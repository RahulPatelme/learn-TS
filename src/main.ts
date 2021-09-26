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
  name: string;
  age?: number;
}

const user2: User = {
  name: "Patel",
  // age: 22,
};

console.log(user2.name);
