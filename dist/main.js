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
var userUnion = null;
