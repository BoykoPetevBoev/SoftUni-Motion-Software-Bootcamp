function events() {
    document.getElementById('submitBtn').addEventListener('click', handleEvent);
};

function handleEvent(e) {
    e.preventDefault();

    const lectureNameInput = document.getElementById('lecture-name');
    const lectureDateInput = document.getElementById('lecture-date');
    const lectureModuleSelect = document.getElementById('lecture-module');
    const modulesDiv = document.getElementById('modules');

    if (!lectureNameInput || !lectureDateInput || !lectureModuleSelect || !modulesDiv) {
        throw new Error('Missing DOM element');
    }

    const lectureName = lectureNameInput.value;
    const lectureDate = lectureDateInput.value;
    const lectureModule = lectureModuleSelect.value.toUpperCase();

    if (!lectureName || !lectureDate || lectureModule.toLowerCase() === 'select module') {
        return;
    }

    const li = createLectureElement(lectureName, lectureDate);
    const moduleDiv =
        findModuleElement(lectureModule, modulesDiv.children) ||
        createModuleElement(lectureModule, modulesDiv);
        
    const ul = moduleDiv.getElementsByTagName("UL")[0];

    ul.appendChild(li);
}

function findModuleElement(lecture, arr) {
    for (let element of arr) {
        if (element.innerHTML.includes(lecture)) {
            return element;
        }
    }
    return;
}

function createModuleElement(lecture, modulesDiv) {
    const h3 = createElement('h3', `${lecture}-MODULE`);
    const ul = createElement('ul');
    const moduleDiv = createElement('div', '', 'module', [h3, ul]);
    modulesDiv.appendChild(moduleDiv);
    return moduleDiv;
}

function createLectureElement(lectureName, lectureDate) {
    const h4 = createElement('H4', `${lectureName} - ${lectureDate}`);
    const button = createElement('button', 'Del', 'red');
    const li = createElement('li', '', 'flex', [h4, button]);

    button.addEventListener('click', deleteHandler);
    return li;
}

function deleteHandler(e) {
    const target = e.target;
    const ul = target.parentNode.parentNode;
    target.parentNode.remove();
    if (ul.children.length === 0) {
        ul.parentNode.remove();
    }
}

function createElement(type, value, className, childrens) {
    const element = document.createElement(type);
    if (value) {
        element.innerHTML = value;
    }
    if (className) {
        element.classList.add(className);
    }
    if (childrens) {
        element.append(...childrens)
    }
    return element;
}

window.addEventListener('DOMContentLoaded', () => events());