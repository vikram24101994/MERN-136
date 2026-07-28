// reverse string using function and loop
let name = "vikram";

console.log("using naming function -",reverseString(name));

function reverseString(str) {
    let len = str.length;
    let revStr = "";
    for(let a = len-1; a >= 0; a--) {
        revStr += str[a];
    }
    return revStr;
}

let revFunction = (str) => {
    let len = str.length;
    let revStr = "";
    for(let a = len-1; a >= 0; a--) {
        revStr += str[a];
    }
    return revStr;
};
console.log("using arrow function- ",revFunction(name));

// sum of array all values using function and loop
let marks = [80,90,70];
function sum(nums){
    let len = nums.length;
    let sumVal = 0;
    for(let a = 0; a < len; a++) {
        sumVal += nums[a];
    }
    return sumVal
} 

console.log("sum all values of array by using naming function",sum(marks));

let sumFun = (nums) => {
    let len = nums.length;
    let sumVal = 0;
    for(let a = 0; a < len; a++) {
        sumVal += nums[a];
    }
    return sumVal
} 
console.log("sum all values of array by using arrow function",sumFun(marks));


// array value reverse using function and loop
let nums = [5,6,7,7,8,8,8,9];
console.log("reverse number using naming function -",reverseNumber(nums));

function reverseNumber(num) {
    let len = num.length;
    let revNum = [];
    for(let a = len-1; a >= 0; a--) {
        revNum.push(num[a]);
    }
    return revNum;
}

let numRevFun = (num) => {
    let len = num.length;
    let revNum = [];
    for(let a = len-1; a >= 0; a--) {
        revNum.push(num[a]);
    }
    return revNum;
};
console.log("reverse number using arrow function- ",numRevFun(nums));
