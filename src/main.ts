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

// Void
const doSomething = (): void => {
  console.log("Do something");
};

// Any
// Any type turns off TypeScript checks
let car: any = 64;

// Never
const doSomethingNever = (): never => {
  throw "never";
};

// Unknown
let vAny: any = 21;
let vUnknown: unknown = 21;

let a1: string = vAny;
// Error
// let a2: string = vUnknown;

// Type assertion
let a2: string = vUnknown as string;

let pageNumber: string = "1";
let numericPageNumber: number = pageNumber as unknown as number;
