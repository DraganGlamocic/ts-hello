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
var _Employee_id;
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(id, firstName, lastName, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
    }
    Employee.prototype.getEmployeeNameAndAddress = function () {
        return "Name: ".concat(this.firstName, " ").concat(this.lastName, "\nAddress: ").concat(this.address);
    };
    return Employee;
}());
exports.Employee = Employee;
_Employee_id = new WeakMap();
var GerkoWubs = new Employee(1, "Gerko", "Wubs", "Kamperfoeliestraat 3");
//GerkoWubs.id = 2;                 // private
GerkoWubs.address = "Hooibaal 2"; // protected
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(id, firstName, lastName, address) {
        return _super.call(this, id, firstName, lastName, address) || this;
    }
    Manager.prototype.getManagerNameAndAddress = function () {
        return "Name [M]: ".concat(this.firstName, " ").concat(this.lastName, "\nAddress: ").concat(this.address);
    };
    return Manager;
}(Employee));
var MarcellaSmilde = new Manager(1, "Marcella", "Smilde", "Anjerstraat 7");
var EmployeeNameAndAddress = GerkoWubs.getEmployeeNameAndAddress();
console.log(EmployeeNameAndAddress);
var ManagerNameAndAddress = MarcellaSmilde.getManagerNameAndAddress();
console.log(ManagerNameAndAddress);
