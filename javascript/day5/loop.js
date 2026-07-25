let arr = [2, 4, 6, 7, 2, 7, 6];
let sum = 0;
for (let v of arr) {
    sum += v;
}

console.log("sum of arrays all values -",sum);

let name = "vishal";
let revName = "";
for(let a = 5; a>=0; a--) {
    revName += name[a];
}

console.log("reverse staring -", revName);
