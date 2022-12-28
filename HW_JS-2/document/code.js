const arr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.write(arr.join("-") + "<br>");
document.write("Массив = " + arr);

for(let i = 0; i < arr.length; i++){
    document.write(`<div class = "ppp"> ${arr[i]} </div> <br>`);    
};

const arr1 = ['a', 'b', 'c'];
const arr2 = [1, 2, 3];
const arr1_2_1 = arr1.concat(arr2);
arr1.push(arr2);
document.write("concat:"+ arr1_2_1 + "<br>");
document.write("push:" + arr1 + "<br>");
document.write("reverse:" + arr2.reverse() + "<br>");
arr2.unshift([4, 5, 6]);
document.write("unshift:" + arr2 + "<br>");
arr3 = [4, 5, 6, 1, 2, 3];
document.write("slice:" + arr3.slice(2, 4) + "<br>");
arr3 = [4, 5, 6, 1, 2, 3];
arr3.splice(2, 4);
document.write("splice:" + arr3 + "<br>");
arr3 = [1, 5, 6, 7, 8, 9];
arr3.splice(1, 0, 2, 3, 4);
document.write("splice+:" + arr3 + "<br>");
document.write("sort:" + arr3.sort() + "<br>");
let len = parseInt(prompt("Введите количество символов в массиве"));
let new_arr = [];
for(i = 1; i <= len; i++){
    new_arr.push(i);
} 
document.write(new_arr.join(" * "));

