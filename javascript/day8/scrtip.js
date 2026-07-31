// 4 , 3, 2, 1, 0
// 2 , 2, 2, 2, 2
// 16, 8, 4, 2, 1


let a = 3; // 011
let b = 5; // 101

console.log(a & b); // where both having 1 

console.log(a | b); // where between both array any one having true 

console.log(~a);

console.log(a<<1);

console.log(a>>1);

// q1. array check even or odd.
let a1 = [2,4,6,8,9];
let typ = "even";
for (v of a1) {
    if (v%2 !== 0) {
        typ = "odd";
        break;
    }
}
console.log("array type : ", typ);


// q2. get a prompt and check condition and log msg.

let marks = prompt("Enter Your Marks");
console.log(typeof marks);
if (marks < 100 && marks >= 90) {
    alert("Grade : A+");
}else if (marks < 100 && marks >= 90) {
    alert("Grade : A");
}else if (marks < 90 && marks >= 80) {
    alert("Grade : B");
}else if (marks < 80 && marks >= 70) {
    alert("Grade : C");
}else if (marks < 70 && marks >= 60) {
    alert("Grade : D");
}else if (marks < 60 && marks >= 50) {
    alert("Grade : E");
}else {
    alert("Grade : F")
}
