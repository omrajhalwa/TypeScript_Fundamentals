

function maxValue(arr : number[]){
    let max = 0;
    for (let i = 0 ;i < arr.length ; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

// type can do but interface doestnot

type NumberArr = number[];
function maxValue2(arr: NumberArr) {

}

console.log(maxValue([1,2,3]));

interface User3 {
    firstName : string;
    lastName  : string;
    age : number;
}

function filtersUsers(users : User3[]) {
    let max = 0;
    for(let i = 0 ; i < users.length ; i++) {
        if(users[i].age > max) {
            max = users[i].age;
        }
    }

    return max;
}