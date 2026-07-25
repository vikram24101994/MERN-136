let arrNum = [12,11,10,9,8,7,6,5];
let sum = 0;
let revArrNum = []
for(let a = 0; a < 8; a++) {
    sum += arrNum[a];
}

for(let a = 7; a >= 0; a--) {
    revArrNum.push(arrNum[a]);
}
console.log("main array -",arrNum);
console.log("sum of all values of array -", sum);
console.log("reverse of main array",revArrNum);

