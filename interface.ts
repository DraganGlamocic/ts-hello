// Practice interface: create datatype(User), function definition,

export interface User {
    name: string;
    age?: number; // ? to make it optional
    id: number;
    email: string;
}

let {name: userName, email: userLogin}: User = {   // "{name: userName, email}" instead of "userJohnDoe", to access only email and name.
    name: "John",                                  // userName and userLogin to rename the properties.
    //age: 33,
    id: 5,
    email: "johndoe@example.com"
};


interface Employees extends User {
    salary: number;
}

let employeeJohnDoe: Employees = {
    name: "John",
    //age: 55,
    id: 5,
    email: "johndoe@example.com",
    salary: 1000,   // Salary is now included as "properties" because of "type" extension
};

export interface Login {
    Login(): User;
}

let [user1, user2, ...restUsers]: User[] = [
    {name: "Bohn", id: 1, email: ""},
    {name: "John", id: 2, email: ""},
    {name: "Lohn", id: 3, email: ""},
    {name: "Tohn", id: 4, email: ""}
];
console.log(user1);
console.log(user2);
console.log(restUsers);

let result = restUsers.filter(user => user.id > 3);  // filter for higher than 3
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

@Component({})
class Component {
    constructor(public name: string) {
    }
}




