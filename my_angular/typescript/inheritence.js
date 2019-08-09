var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(empId, name, salary) {
        this.empId = empId;
        this.name = name;
        this.salary = salary;
        Employee.noOfEmployees++;
    }
    Employee.prototype.display = function () {
        console.log("Id : " + this.empId + "\nName : " + this.name + "\nSalary : " + this.salary + "\nTotalcount : " + Employee.noOfEmployees);
    };
    Employee.noOfEmployees = 0;
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(empId, name, salary, noOfReporties) {
        var _this = _super.call(this, empId, name, salary) || this;
        _this.noOfReporties = noOfReporties;
        return _this;
    }
    Manager.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("No. of Reporties:" + this.noOfReporties);
    };
    return Manager;
}(Employee));
var e1 = new Employee(456, "amit", 8000);
e1.display();
var m1 = new Manager(978, "sumit", 9000, 5);
console.log("\n");
m1.display();
