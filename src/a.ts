
//typescript
const x: number = 1001;
console.log(x);
//can not write x = 'string'


//javascript
// const x = 1;
// console.log(x);

function greet(firstName : string) {
    console.log('Hello' + firstName);
}

greet("rom rom");
// good practice
function multiply(a: number, b: number): number {
    return a * b;
}

// type inference automatic calculate than function return a number...
function sum(a: number, b: number) {
    return a + b;
}

const value: number = multiply(1,2);
console.log(value);

const value1 = sum(3, 4) ;
console.log(value1);


function isLegal(age: number) : boolean {
    if(age > 10) {
        return true;
    }else {
        return false;
    }
}

let findLegal = isLegal(34);

//function argument have to give types
function runAfter15(fn : () => void) {
    setTimeout(fn, 1000);
}

runAfter15( function() {
    console.log("hi there");
})

const greet1 = (name : string) => `Hello ${name}` ;
