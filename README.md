# Motion Software Bootcamp | Software Engineering

### ЗА КУРСА
В днешно време да станеш разработчик на софтуер несъмнено е един от най-добрите избори за кариера, които някой може да направи, не само поради големите възможности за работа, но и поради огромните награди по отношение на личното удовлетворение, самоусъвършенстването и творческото изразяване. Като разработчик на софтуер вие постоянно ще изразявате своето уникално логическо мислене и творчески процес във всяка нова функция и проект, по който ще участвате. Ако желаеш да бъдеш част от този свят това е твоето място. Motion Software Bootcamp е практически програма за обучение за хора, които искат да започнат кариерата си като разработчици на софтуер, дизайнери или маркетингови експерти. Той осигурява опит в реалния живот на работа в гъвкав екип за разработка на софтуер. Целта на темите и учебните материали тук е ви подготви за приемния изпит и да ви даде знанията нужни да продължите успешно в Motion Software Bootcamp.

**Приемният изпитът ще се проведе на 10 януари 2021.** Въз основа на резултатите от изпитите най-добре представителите се ще бъдат поканени на онлайн интервю. Въз основа на представянето от интервюто и изпита, най-добрите ще бъдат приети в програмата. Motion Software Bootcamp ще бъде насочен изцяло към практическо обучение. Участниците ще следват методологията [Scrum](https://www.scrum.org/resources/what-is-scrum) и участват в екип за разработване на софтуер. Проектът ще има реална употреба, заедно с изисквания, Product Owner и технически ръководител, който да насочва целия екип, предоставен от Motion Software.

### Организационни партньори
[Motion Software](https://motion-software.com/) is a global provider of IT consulting and software development services to clients in the area of fintech, AI and blockchain. The company has expertise in a wide range of technologies, but they love building web and mobile solutions with JavaScript based frameworks such as React, Angular, Node and React Native. Motion Software's team consists of true JS specialists who are highly encouraged to push the boundaries in the field.

### ТЕМИ

- DOM
- DOM MANIPULATIONS
- REST SERVICES & AJAX
- ASYNCHRONOUS PROGRAMMING
- THIS
- OBJECT COMPOSITION
- CLASSES
- PROTOTYPES & INHERITANCE
- ADVANCED FUNCTIONS
- DATA STRUCTURES & ALGORITHMS
- SORTING AND SEARCHING

# Sorting Algorithms

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Best</th>
            <th>Average</th>
            <th>Worst</th>
            <th>Memory</th>
            <th>Stable</th>
            <th>Method</th>
        <tr>
    </thead>
    <tbody>
        <tr>
            <td>Selection Sort</td>
            <td>n2</td>
            <td>n2</td>
            <td>n2</td>
            <td>1</td>
            <td>No</td>
            <td>Selection</td>
        </tr>
        <tr>
            <td>Bubble Sort</td>
            <td>n</td>
            <td>n2</td>
            <td>n2</td>
            <td>1</td>
            <td>Yes</td>
            <td>Exchanging</td>
        </tr>
        <tr>
            <td>Insertion Sort</td>
            <td>n</td>
            <td>n2</td>
            <td>n2</td>
            <td>1</td>
            <td>Yes</td>
            <td>Insertion</td>
        </tr>
        <tr>
            <td>Merge Sort</td>
            <td>n*log(n)</td>
            <td>n*log(n)</td>
            <td>n*log(n)</td>
            <td>1 (or n)</td>
            <td>Yes</td>
            <td>Merging</td>
        </tr>
        <tr>
            <td>Quick Sort</td>
            <td>n*log(n)</td>
            <td>n*log(n)</td>
            <td>n2</td>
            <td>log(n)</td>
            <td>Depends</td>
            <td>Partitioning</td>
        </tr>
    </tbody>
</table>

## Selection Sort 

<img src="https://github.com/BoykoPetevBoev/SoftUni-Motion-Software-Bootcamp/blob/main/_README/selection_sort.gif" alt="Selection Sort " width="500"/>

Simple, but inefficient algorithm.
Swap the first with the min element on the right, then the second, etc.

* Memory: **O(1)**
* Stable: **No**
* Method: **Selection**

## Bubble Sort 

<img src="https://github.com/BoykoPetevBoev/SoftUni-Motion-Software-Bootcamp/blob/main/_README/bubble_sort.gif" alt="Bubble Sort " width="500"/>

Simple, but inefficient algorithm.
Swaps to neighbor elements when not in order until sorted.

* Memory: **O(1)**
* Stable: **Yes**
* Method: **Exchanging**

## Insertion Sort  

<img src="https://github.com/BoykoPetevBoev/SoftUni-Motion-Software-Bootcamp/blob/main/_README/insertion_sort.gif" alt="Insertion Sort " width="500"/>

Simple, but inefficient algorithm.
Move the first unsorted element left to its place.

* Memory: **O(1)**
* Stable: **Yes**
* Method: **Insertion**

## Merge Sort  

<img src="https://github.com/BoykoPetevBoev/SoftUni-Motion-Software-Bootcamp/blob/main/_README/merge_sort.gif" alt="Merge Sort " width="500"/>

Efficient sorting algorithm.

1. Divide the list into sub-lists (typically 2 sub-lists)
2. Sort each sub-list (recursively call merge-sort)
3. Merge the sorted sub-lists into a single list

Best, average and worst case: O(n*log(n))

* Memory: **O(n)** / **O(1)**
* Stable: **Yes**
* Method: **Merging**

## Quick Sort  

<img src="https://github.com/BoykoPetevBoev/SoftUni-Motion-Software-Bootcamp/blob/main/_README/quick_sort_hoare.gif" alt="Quick Sort " width="500"/>
<img src="https://github.com/BoykoPetevBoev/SoftUni-Motion-Software-Bootcamp/blob/main/_README/quick_sort_lomuto.gif" alt="Quick Sort " width="500"/>

Efficient sorting algorithm.

1. Choose a pivot 
2. Move smaller elements left & larger right
3. sort left & right

Best & average case: O(n*log(n)); Worst: O(n2)

* Memory: **O(log(n))**
* Stable: **Depends**
* Method: **Partitioning**


