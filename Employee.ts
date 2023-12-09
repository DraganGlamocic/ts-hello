// TypeScript practice: classes, getters/setters, constructor, inheritance, access modifiers, interface

import {Login, User} from "./interface";

interface Address {
    street: string;
    city: string;
    state: string;
    pin: string;
};  // terminate type declaration with semicolon or not?

export class Employee implements Login {     // implementation of login from interface.ts
    #id: number;
    protected employeeFirstName: string;
    protected employeeLastName: string;
    EmployeeAddress: Address;

    static getEmployeeCount(): number {
        return 50;
    }

    constructor(id: number, protected EmployeeFirstName: string, protected EmployeeLastName: string, EmployeeAddress: Address) {
        this.#id = id;
        this.employeeFirstName = EmployeeFirstName;
        this.employeeLastName = EmployeeLastName;
        this.EmployeeAddress = EmployeeAddress;
    }

    get empId(): number {
        return this.#id;
    }

    set empId(id: number) {
        this.#id = id;
    }

    getEmployeeNameAndAddress(): string {
        return `Name: ${this.employeeFirstName} ${this.employeeLastName}\nAddress: ${this.EmployeeAddress}`;
    }

    Login(): User {
        return {
            name: "John",
            id: 5,
            email: "johndoe@example.com"
        };
    }
}

let gerkoWubs = new Employee(1, "Gerko", "Wubs", {
    street: "Hooibaal",
    city: "Groningen",
    state: "Groningen",
    pin: "9727JL"
});     // from interface: Address

gerkoWubs.empId = 100;
console.log(gerkoWubs.empId);

//gerkoWubs.id = 2;                 // private
gerkoWubs.EmployeeAddress.street = "GooiBaal 2"    // protected
// Employee.getEmployeeCount()      // static -> call on name without creating new instance


class Manager extends Employee {
    constructor(id: number, firstName: string, lastName: string, address: string) {
        super(id, firstName, lastName, address);
    }

    getManagerNameAndAddress(): string {
        return `Name[M]: ${this.employeeFirstName} ${this.employeeLastName}\nAddress: ${this.EmployeeAddress}`;
    }
}

let marcellaSmilde = new Manager(1, "Marcella", "Smilde", "Anjerstraat 7");


let EmployeeNameAndAddress = gerkoWubs.getEmployeeNameAndAddress()
console.log(EmployeeNameAndAddress);

let ManagerNameAndAddress = marcellaSmilde.getManagerNameAndAddress()
console.log(ManagerNameAndAddress);