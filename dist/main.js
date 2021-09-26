// Variable
var hello = "world";
// Function
var getFullName = function (name, surname) {
    return name + " " + surname;
};
console.log(getFullName("Rahul", "Patel"));
// Object
var user = {
    name: "Rahul",
    age: 22
};
var user2 = {
    firstName: "Patel",
    // age: 22,
    getMessage: function () {
        return "hi " + user2.firstName;
    }
};
console.log(user2.getMessage());
// Union operator
var username = "Rahul";
var pageName = 21;
var errorMessage = null;
var companyNames = ["McLaren", "Mercedes"];
var userUnion = null;
var mercedes = "AMG-GTR";
// Void
var doSomething = function () {
    console.log("Do something");
};
// Any
// Any type turns off TypeScript checks
var car = 64;
// Never
var doSomethingNever = function () {
    throw "never";
};
// Unknown
var vAny = 21;
var vUnknown = 21;
var a1 = vAny;
// Error
// let a2: string = vUnknown;
// Type assertion
var a2 = vUnknown;
var pageNumber = "1";
var numericPageNumber = pageNumber;
