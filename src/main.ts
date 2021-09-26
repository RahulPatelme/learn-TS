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
interface IUser {
  firstName: string;
  age?: number;
  getMessage(): string;
}

const user2: IUser = {
  firstName: "Patel",
  // age: 22,
  getMessage() {
    return `hi ${user2.firstName}`;
  },
};

console.log(user2.getMessage());

// Union operator
let username: string = "Rahul";

let pageName: string | number = 21;

let errorMessage: string | null = null;

// Type alias
type ID = string;
type CompanyName = string;

const companyNames: CompanyName[] = ["McLaren", "Mercedes"];

interface UserInterface {
  id: ID;
  name: string;
  surname: string;
}

let userUnion: UserInterface | null = null;

// Union operator + type alias
type MaybeCompanyName = CompanyName | null;

const mercedes: MaybeCompanyName = "AMG-GTR";
