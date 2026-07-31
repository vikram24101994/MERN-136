// let m = [];
// for (let i=1; i <= 100; i++) {
//     if ((i%3) == 0 && (i%5) == 0) {
//         m.push(i);
//     }
// }

// console.log(m);


let m = [];
for (let i=1; i <= 100; i++) {
    if ((i%3) == 0 || (i%5) == 0) {
        m.push(i)
    }
}

console.log(m);