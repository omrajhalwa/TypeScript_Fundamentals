type Input = number | string;

function firstEl(arr : Input[]) {
    return arr[0];
}

const value2 = firstEl(["sanket", "singh"]);

console.log(value2)

// problem 1 console.log(value2.toUpperCase());


// problem 2 either string array of number array;
const value3 = firstEl([2, "sanket" ,"singh",1]);

console.log(value3);


//solution

function identity<T>(arg: T):T {
    return arg
}


let output1 = identity<string>("myString");
let output2 = identity<number>(100);

console.log(output1.toUpperCase());
console.log(output2);


 