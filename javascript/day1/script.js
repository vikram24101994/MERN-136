console.log("hello vikram")

document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("#vl");
    const result = document.getElementById("res");

    input.addEventListener("input", (e) => {
        const expression = e.target.value.replace(/\s+/g, "");

        const tokens = expression.match(/\d+|[+\-*/]/g) || [];

        if (!tokens) {
            result.textContent = "Invalid";
            return;
        }

        result.textContent = calculate(tokens);
    });
});

function calculate(tokens) {
    // First pass: * and /
    let stack = [Number(tokens[0])];

    for (let i = 1; i < tokens.length; i += 2) {
        const op = tokens[i];
        const num = Number(tokens[i + 1]);

        if (op === "*") {
            stack.push(stack.pop() * num);
        } else if (op === "/") {
            stack.push(stack.pop() / num);
        } else {
            stack.push(op);
            stack.push(num);
        }
    }

    // Second pass: + and -
    let result = stack[0];

    for (let i = 1; i < stack.length; i += 2) {
        const op = stack[i];
        const num = stack[i + 1];

        if (op === "+") {
            result += num;
        } else {
            result -= num;
        }
    }

    return result;
}

// document.addEventListener("DOMContentLoaded", () => {
//     const vlInpt = document.querySelector("#vl");
//     console.log(vlInpt);
//     vlInpt.addEventListener("input", function (e) {
//         console.log(e.target.value.split(/([+\-*/])/));
//     });
// });

// document.addEventListener("DOMContentLoaded", () => {
//     const vlInpt = document.querySelector("#vl");

//     vlInpt.addEventListener("change", function (event) {
//         const vals = event.target.value.split(/[+\-*/]/);
//         console.log(vals);
//     });
// });

// let oldNumber = num.value
// let plus = document.getElementById("plus")
// plus.addEventListener("click", function() {
//     alert(n1.value+n2.value)
// })

// let sub = document.getElementById("sub")
// sub.addEventListener("click", function() {
//     alert(n1.value-n2.value)
// })

// let divi = document.getElementById("divi")
// divi.addEventListener("click", function() {
//     alert(n1.value/n2.value)
// })