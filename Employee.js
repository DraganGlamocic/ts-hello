"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(id, EmployeeFirstName, EmployeeLastName, EmployeeAddress) {
        this.EmployeeFirstName = EmployeeFirstName;
        this.EmployeeLastName = EmployeeLastName;
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.employeeFirstName = EmployeeFirstName;
        this.employeeLastName = EmployeeLastName;
        this.EmployeeAddress = EmployeeAddress;
    }
    Employee.getEmployeeCount = function () {
        return 50;
    };
    Object.defineProperty(Employee.prototype, "empId", {
        get: function () {
            return __classPrivateFieldGet(this, _Employee_id, "f");
        },
        set: function (id) {
            __classPrivateFieldSet(this, _Employee_id, id, "f");
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.getEmployeeNameAndAddress = function () {
        return "Name: ".concat(this.employeeFirstName, " ").concat(this.employeeLastName, "\nAddress: ").concat(this.EmployeeAddress);
    };
    return Employee;
}());
exports.Employee = Employee;
_Employee_id = new WeakMap();
var gerkoWubs = new Employee(1, "Gerko", "Wubs", "Kamperfoeliestraat 3");
gerkoWubs.empId = 100;
console.log(gerkoWubs.empId);
//gerkoWubs.id = 2;                 // private
gerkoWubs.EmployeeAddress = "Hooibaal 2"; // protected
// Employee.getEmployeeCount()      // static -> call on name without creating new instance
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(id, firstName, lastName, address) {
        return _super.call(this, id, firstName, lastName, address) || this;
    }
    Manager.prototype.getManagerNameAndAddress = function () {
        return "Name[M]: ".concat(this.employeeFirstName, " ").concat(this.employeeLastName, "\nAddress: ").concat(this.EmployeeAddress);
    };
    return Manager;
}(Employee));
var marcellaSmilde = new Manager(1, "Marcella", "Smilde", "Anjerstraat 7");
var EmployeeNameAndAddress = gerkoWubs.getEmployeeNameAndAddress();
console.log(EmployeeNameAndAddress);
var ManagerNameAndAddress = marcellaSmilde.getManagerNameAndAddress();
console.log(ManagerNameAndAddress);
