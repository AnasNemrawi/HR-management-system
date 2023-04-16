// Define the Employee constructor function
function Employee(id, fullName, department, level, imageUrl) {
    this.id = id;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = this.calculateSalary();
}

//4. Define the calculateSalary method on the Employee prototype
Employee.prototype.calculateSalary = function () {
    // Salary table
    var salaryTable = {
        Junior: { min: 500, max: 1000 },
        Mid_Senior: { min: 1000, max: 1500 },
        Senior: { min: 1500, max: 2000 }
    };

    // Get the minimum and maximum salary for the employee's level
    var levelSalary = salaryTable[this.level];
    var minSalary = levelSalary.min;
    var maxSalary = levelSalary.max;

    // Generate a random salary between the min and max for the employee's level
    var randomSalary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;

    // Calculate the net salary after applying a 7.5% tax
    var netSalary = randomSalary * 0.925;

    return netSalary;
};

// 5.Create instances of the Employee constructor function for each employee
var employee1 = new Employee(1000, "Ghazi Samer", "Administration", "Senior", "https://example.com/ghazi.jpg");
var employee2 = new Employee(1001, "Lana Ali", "Finance", "Senior", "https://example.com/lana.jpg");
var employee3 = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "https://example.com/tamara.jpg");
var employee4 = new Employee(1003, "Safi Walid", "Administration", "Mid_Senior", "https://example.com/safi.jpg");
var employee5 = new Employee(1004, "Omar Zaid", "Development", "Senior", "https://example.com/omar.jpg");
var employee6 = new Employee(1005, "Rana Saleh", "Development", "Junior", "https://example.com/rana.jpg");
var employee7 = new Employee(1006, "Hadi Ahmad", "Finance", "Mid_Senior", "https://example.com/hadi.jpg");


console.log(employee1);
console.log(employee2);
console.log(employee3);
console.log(employee4);