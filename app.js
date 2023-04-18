// Define the Employee constructor function
function Employee(id, fullName, department, level, imageUrl) {
    this.id = id;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = this.calculateSalary();
}

Employee.prototype.employee_info = function () {
    let info = `Employee's name is ${this.fullName} and their salary is ${this.salary}`;
    return info;
}

// Define the calculateSalary method on the Employee prototype
Employee.prototype.calculateSalary = function () {
    var salaryTable = {
        Junior: { min: 500, max: 1000 },
        Mid_Senior: { min: 1000, max: 1500 },
        Senior: { min: 1500, max: 2000 }
    };
    var levelSalary = salaryTable[this.level];
    var minSalary = levelSalary.min;
    var maxSalary = levelSalary.max;
    var randomSalary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
    var netSalary = randomSalary * 0.925;
    return netSalary;
};

// Create instances of the Employee constructor function for each employee
var employee1 = new Employee(1000, "Ghazi Samer", "Administration", "Senior", "https://example.com/ghazi.jpg");
var employee2 = new Employee(1001, "Lana Ali", "Finance", "Senior", "https://example.com/lana.jpg");
var employee3 = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "https://example.com/tamara.jpg");
var employee4 = new Employee(1003, "Safi Walid", "Administration", "Mid_Senior", "https://example.com/safi.jpg");



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

