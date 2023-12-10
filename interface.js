"use strict";
// Practice interface: create datatype(User), function definition,
exports.__esModule = true;
var _a = {
    name: "John",
    //age: 33,
    id: 5,
    email: "johndoe@example.com"
}, userName = _a.name, userLogin = _a.email;
var employeeJohnDoe = {
    name: "John",
    //age: 55,
    id: 5,
    email: "johndoe@example.com",
    salary: 1000
};
var _b = [
    { name: "Bohn", id: 1, email: "" },
    { name: "John", id: 2, email: "" },
    { name: "Lohn", id: 3, email: "" },
    { name: "Tohn", id: 4, email: "" }
], user1 = _b[0], user2 = _b[1], restUsers = _b.slice(2);
console.log(user1);
console.log(user2);
console.log(restUsers);
var result = restUsers.filter(function (user) { return user.id > 3; });
console.log(result);
