let array = [1,2,"a","b",true, false,{name:"vikram",age:30}, null, undefined];

console.log("declare array -",array);

array[1] = 4;
array[3] = "d";
array[5] = true;
array[6].age = 31;
array[7] = 12;
array[8] = "r";
array[9] = "xyz";

console.log("modify array-",array);

array.push(123);

console.log("after push the value 123-",array);

array.pop();

console.log("after pop the value-",array);

array.unshift("0001");

console.log("after unshift the value 0001 -",array);

array.shift();

console.log("after shift the value-",array);


