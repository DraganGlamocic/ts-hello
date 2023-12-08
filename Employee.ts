// TypeScript practice: classes, getters/setters, constructor, inheritance, access modifiers

export class Employee {
    #id: number;
    protected employeeFirstName: string;
    protected employeeLastName: string;
    EmployeeAddress: string;

    static getEmployeeCount(): number {
        return 50;
    }

    constructor(id: number, protected EmployeeFirstName: string, protected EmployeeLastName: string, EmployeeAddress: string) {
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
}

let gerkoWubs = new Employee(1, "Gerko", "Wubs", "Kamperfoeliestraat 3");

gerkoWubs.empId = 100;
console.log(gerkoWubs.empId);

//gerkoWubs.id = 2;                 // private
gerkoWubs.EmployeeAddress = "Hooibaal 2"    // protected
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