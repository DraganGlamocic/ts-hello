export class Employee {
    #id: number;
    protected firstName: string;
    protected lastName: string;
    address: string;

    constructor(id: number, protected firstName: string, protected lastName: string, address: string) {
        this.#id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
    }

    getEmployeeNameAndAddress(): string {
        return `Name: ${this.firstName} ${this.lastName}\nAddress: ${this.address}`;
    }
}

let GerkoWubs = new Employee(1, "Gerko", "Wubs", "Kamperfoeliestraat 3");
//GerkoWubs.id = 2;                 // private
GerkoWubs.address = "Hooibaal 2"    // protected

class Manager extends Employee {
    constructor(id: number, firstName: string, lastName: string, address: string) {
        super(id, firstName, lastName, address);
    }
    getManagerNameAndAddress(): string {
        return `Name[M]: ${this.firstName} ${this.lastName}\nAddress: ${this.address}`;
    }
}

let BarcellaSmilde = new Manager(1, "Barcella", "Smilde", "Anjerstraat 7");


let EmployeeNameAndAddress = GerkoWubs.getEmployeeNameAndAddress()
console.log(EmployeeNameAndAddress);

let ManagerNameAndAddress = BarcellaSmilde.getManagerNameAndAddress()
console.log(ManagerNameAndAddress);
