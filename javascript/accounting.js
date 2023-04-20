
function Employee(fullName, department, level) {
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.salary = null;
}
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

var employee1 = new Employee("Ghazi Samer", "Administration", "Senior");
employee1.calculateSalary();
var employee2 = new Employee("Lana Ali", "Finance", "Senior");
employee2.calculateSalary();
var employee3 = new Employee("Tamara Ayoub", "Marketing", "Senior");
employee3.calculateSalary();
var employee4 = new Employee("Safi Walid", "Administration", "Mid_Senior");
employee4.calculateSalary();
var employee5 = new Employee("Omar Zaid", "Development", "Mid_Senior");
employee5.calculateSalary();
var employee6 = new Employee("Rana Saleh", "Development", "Mid_Senior");
employee6.calculateSalary();
var employee7 = new Employee("Hadi Ahmad", "Administration", "Mid_Senior");
employee7.calculateSalary();

var departmentSalary = {};
var departmentCount = {};

// Loop through each employee and add their salary to the total for their department
for (var i = 1; i <= 7; i++) {
    var department = eval("employee" + i + ".department");
    var salary = eval("employee" + i + ".salary");
    if (departmentSalary[department]) {
        departmentSalary[department] += salary;
        departmentCount[department]++;
    } else {
        departmentSalary[department] = salary;
        departmentCount[department] = 1;
    }
}

// Print out the average salary for each department
for (var department in departmentSalary) {
    var averageSalary = departmentSalary[department] / departmentCount[department];
    console.log('avg ' + department + ": " + averageSalary);
}


var departmentSalary = {};

// Loop through each employee and add their salary to the total 
for (var i = 1; i <= 7; i++) {
    var department = eval("employee" + i + ".department");
    var salary = eval("employee" + i + ".salary");
    if (departmentSalary[department]) {
        departmentSalary[department] += salary;
    } else {
        departmentSalary[department] = salary;
    }
}

for (var department in departmentSalary) {
    console.log('total ' + department + ": " + departmentSalary[department]);
}

