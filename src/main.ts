// Variable
let hello: string = "world";

// Function
const getFullName = (name: string, surname: string) => {
  return `${name} ${surname}`;
};
console.log(getFullName("Rahul", "Patel"));

// Object
const user: { name: string; age: number } = {
  name: "Rahul",
  age: 22,
};

// Interface
interface User {
  firstName: string;
  age?: number;
  getMessage(): string;
}

const user2: User = {
  firstName: "Patel",
  // age: 22,
  getMessage() {
    return `hi ${user2.firstName}`;
  },
};

console.log(user2.getMessage());
