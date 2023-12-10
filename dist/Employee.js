"use strict";
// TypeScript practice: classes, getters/setters, constructor, inheritance, access modifiers, interface
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
; // terminate type declaration with semicolon or not?
class Employee {
    constructor(id, EmployeeFirstName, EmployeeLastName, EmployeeAddress) {
        this.EmployeeFirstName = EmployeeFirstName;
        this.EmployeeLastName = EmployeeLastName;
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.employeeFirstName = EmployeeFirstName;
        this.employeeLastName = EmployeeLastName;
        this.EmployeeAddress = EmployeeAddress;
    }
    static getEmployeeCount() {
        return 50;
    }
    get empId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set empId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    getEmployeeNameAndAddress() {
        return `Name: ${this.employeeFirstName} ${this.employeeLastName}\nAddress: ${this.EmployeeAddress}`;
    }
    Login() {
        return {
            name: "John",
            id: 5,
            email: "johndoe@example.com"
        };
    }
}
exports.Employee = Employee;
_Employee_id = new WeakMap();
let gerkoWubs = new Employee(1, "Gerko", "Wubs", {
    street: "Hooibaal",
    city: "Groningen",
    state: "Groningen",
    pin: "9727JL"
}); // from interface: Address
gerkoWubs.empId = 100;
console.log(gerkoWubs.empId);
//gerkoWubs.id = 2;                 // private
gerkoWubs.EmployeeAddress.street = "GooiBaal 2"; // protected
// Employee.getEmployeeCount()      // static -> call on name without creating new instance
class Manager extends Employee {
    constructor(id, firstName, lastName, address) {
        super(id, firstName, lastName, address);
    }
    getManagerNameAndAddress() {
        return `Name[M]: ${this.employeeFirstName} ${this.employeeLastName}\nAddress: ${this.EmployeeAddress}`;
    }
}
let marcellaSmilde = new Manager(1, "Marcella", "Smilde", "Anjerstraat 7");
let EmployeeNameAndAddress = gerkoWubs.getEmployeeNameAndAddress();
console.log(EmployeeNameAndAddress);
let ManagerNameAndAddress = marcellaSmilde.getManagerNameAndAddress();
console.log(ManagerNameAndAddress);
