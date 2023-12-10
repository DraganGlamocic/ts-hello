"use strict";
// Practice interface: create datatype(User), function definition,
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Component_1;
Object.defineProperty(exports, "__esModule", { value: true });
let { name: userName, email: userLogin } = {
    name: "John",
    //age: 33,
    id: 5,
    email: "johndoe@example.com"
};
let employeeJohnDoe = {
    name: "John",
    //age: 55,
    id: 5,
    email: "johndoe@example.com",
    salary: 1000, // Salary is now included as "properties" because of "type" extension
};
let [user1, user2, ...restUsers] = [
    { name: "Bohn", id: 1, email: "" },
    { name: "John", id: 2, email: "" },
    { name: "Lohn", id: 3, email: "" },
    { name: "Tohn", id: 4, email: "" }
];
console.log(user1);
console.log(user2);
console.log(restUsers);
let result = restUsers.filter(user => user.id > 3); // filter for higher than 3
console.log(result);
// when to use interfaces or classes?
// nterfaces are used to define a contract or a blueprint for a data structure.
// They specify the properties and methods that a class must have,
// but they don't provide any implementation details.
// This allows you to define a common type for objects that share similar properties
// and methods, without having to duplicate the same code multiple times.
// Classes, on the other hand, are used to create instances of objects that represent
// real-world entities or concepts. They provide the implementation for the properties
// and methods defined in interfaces, which allows you to create objects with specific behavior.
let Component = Component_1 = class Component {
    constructor(name) {
        this.name = name;
    }
};
Component = Component_1 = __decorate([
    Component_1({})
], Component);
