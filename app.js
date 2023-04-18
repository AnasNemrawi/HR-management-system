'use strict'


function Employee(fullName, department, level, imageUrl, id) {
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = null;
    this.id = 0;
}

Employee.prototype.employee_info = function () {
    let info = `Employee's name is ${this.fullName} and their salary is ${this.salary}`;
    return info;
}

// Define the calculateSalary method on the Employee prototype
var salaryTable = {
    Junior: { min: 500, max: 1000 },
    Mid_Senior: { min: 1000, max: 1500 },
    Senior: { min: 1500, max: 2000 }
};
Employee.prototype.calculateSalary = function () {
    var levelSalary = salaryTable[this.level];
    var minSalary = levelSalary.min;
    var maxSalary = levelSalary.max;
    var randomSalary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
    var netSalary = randomSalary * 0.925;
    this.salary = netSalary;
};


// Create instances of the Employee constructor function for each employee
var employee1 = new Employee("Ghazi Samer", "Administration", "Senior", "https://example.com/ghazi.jpg");
employee1.calculateSalary();
var employee2 = new Employee("Lana Ali", "Finance", "Senior", "https://example.com/lana.jpg");
employee2.calculateSalary();
var employee3 = new Employee("Tamara Ayoub", "Marketing", "Senior", "https://example.com/tamara.jpg");
employee3.calculateSalary();
var employee4 = new Employee("Safi Walid", "Administration", "Mid_Senior", "https://example.com/safi.jpg");
employee4.calculateSalary();


const employee1Par = document.createElement('p');
const employee2Par = document.createElement('p');
const employee3Par = document.createElement('p');
const employee4Par = document.createElement('p');

employee1Par.textContent = employee1.employee_info();
employee2Par.textContent = employee2.employee_info();
employee3Par.textContent = employee3.employee_info();
employee4Par.textContent = employee4.employee_info();

const parentEle = document.getElementById('emp');
parentEle.appendChild(employee1Par);
parentEle.appendChild(employee2Par);
parentEle.appendChild(employee3Par);
parentEle.appendChild(employee4Par);


//random ID
Employee.prototype.randomId = function () {
    this.id = Math.floor(Math.random() * 9000) + 1000;
}

//render

Employee.prototype.render = function () {
    const showinfo = document.getElementById('showinfo');

    //create an element
    const divEle = document.createElement('div');
    //append the element to the parent
    showinfo.appendChild(divEle);
    const h4Ele = document.createElement('h4');
    h4Ele.textContent = this.fullName;
    const p1 = document.createElement('p')
    p1.textContent = this.department
    const p2 = document.createElement('p')
    p2.textContent = this.level
    const p3 = document.createElement('p')
    p3.textContent = this.salary
    //adding the text  to the created element
    divEle.appendChild(h4Ele)
    divEle.appendChild(p1)
    divEle.appendChild(p2)
    divEle.appendChild(p3)
    //for the img
    const ulEle = document.createElement('ul');
    divEle.appendChild(ulEle);
    for (let i = 0; i < this.imageUrl.length; i++) {
        const liEl = document.createElement('li');
        ulEle.appendChild(liEl);
        liEl.textContent = this.imageUrl[i]

    }

}

//adding an employee
var salaryTable = {
    Junior: { min: 500, max: 1000 },
    Mid_Senior: { min: 1000, max: 1500 },
    Senior: { min: 1500, max: 2000 }
};

function addNewEmp(e) {
    e.preventDefault();
    let fullname = e.target.fullname.value;
    let department = e.target.department.value;
    let level = e.target.level.value;
    let imageurl = e.target.imageurl.value.split(',');

    const newEmp = new Employee(fullname, department, level, imageurl)
    newEmp.randomId()
    newEmp.render()
    console.log(newEmp)
}


const infoForm = document.getElementById('infoForm');
console.log(infoForm)
infoForm.addEventListener('submit', addNewEmp);



