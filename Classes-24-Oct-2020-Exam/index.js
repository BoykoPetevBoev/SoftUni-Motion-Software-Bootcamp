class Developer {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.baseSalary = 1000;
        this.tasks = [];
        this.experience = 0;
    }
    addTask(id, name, priority) {
        const task = { id, name, priority };
        priority === 'high'
            ? this.tasks.unshift(task)
            : this.tasks.push(task);
        return `Task id ${id}, with ${priority} priority, has been added.`;
    }
    doTask() {
        if (this.tasks.length === 0) {
            return `${this.firstName}, you have finished all your tasks. You can rest now.`;
        }
        const task = this.tasks.shift();
        return task.name;
    }
    getSalary() {
        return `${this.firstName} ${this.lastName} has a salary of: ${this.baseSalary}`;
    }
    reviewTasks() {
        let result = `Tasks, that need to be completed:\n`;
        result += this.tasks.map(task => `${task.id}: ${task.name} - ${task.priority}`).join('\n');
        return result;
    }
}

class Junior extends Developer {
    constructor(firstName, lastName, bonus, experience) {
        super(firstName, lastName);
        this.baseSalary += bonus;
        this.experience = experience;
    }
    learn(years) {
        this.experience += years;
    }
}

class Senior extends Developer {
    constructor(firstName, lastName, bonus, experience) {
        super(firstName, lastName);
        this.baseSalary += bonus;
        this.experience = experience + 5;
    }
    changeTaskPriority(taskId) {
        const index = this.tasks.findIndex(task => task.id === taskId);
        const [task] = this.tasks.splice(index, 1);
        if (task.priority === 'high') {
            task.priority = 'low';
            this.tasks.push(task);
        } else {
            task.priority = 'high';
            this.tasks.unshift(task);
        }
        return task;
    }
}


const developer = new Developer("George", "Joestar");
console.log(developer.addTask(1, "Inspect bug", "low"));
console.log(developer.addTask(2, "Update repository", "high"));
console.log(developer.reviewTasks());
console.log(developer.getSalary());

const junior = new Junior("Jonathan", "Joestar", 200, 2);
console.log(junior.getSalary());

const senior = new Senior("Joseph", "Joestar", 200, 2);
senior.addTask(1, "Create functionality", "low");
senior.addTask(2, "Update functionality", "high");
console.log(senior.changeTaskPriority(1)["priority"]);
