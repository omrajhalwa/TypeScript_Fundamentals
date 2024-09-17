
// what is the difference between interface and a type 
//  interface use for implements class and types use for union and intersection operation
type User1 = {

    firstName : string;
    lastName  : string;
    age  : number;
}


interface User2 {
    firstName : string;
    lastName  : string;
    age : number;
}

function greet3( id : (number    | string)) {

}

greet3(1);
greet3("1");

//UNION

type greetArg = number | string;
function greet2(id : greetArg) {

}


//intersection

type Employee1 = {
    name  : string;
    startDate : Date;
}

interface Manager {
    name : string;
    department: string;
}

// not can be use interface here
type TechLead = Employee1 & Manager;
//same as 
// type TechLead = {
//     name :string;
//     department : string;
//     startDate :Date
// }

const t:TechLead = {
    name : "harkirat",
    startDate : new Date(),
    department: "cse"
}