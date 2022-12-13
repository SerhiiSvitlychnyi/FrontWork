
var name = prompt("Your name");
var serName = prompt("Your sername");
var age = parseInt(prompt("Add your age"));


document.write(
    `<table border="1" style="border-collapse: collapse; text-align: center">'+
    <thead><tr style="width: 800px; height: 200px"></tr></thead>'+
    <tbody><tr><td style="width: 100px; height: 400px"></td>'+
    <td style="width: 700px; height: 400px">${name} ${serName} ${age}</td></tr></tbody>'+
    <tfoot><tr><td style="width: 800px; height: 200px" colspan="2"></td></tr></tfoot></table>`);

var num1 = parseInt(prompt());
var num2 = parseInt(prompt());
var num3 = parseInt(prompt());

average = parseFloat((num1 + num2 + num3)/3)

document.write('<br>' + "Average is " + average);

var x = 6;
var y = 14;
var z = 4;
a = x + y - x++ * z;
x = 6;
y = 14;
z = 4;
b = --x -y * 5;
x = 6;
y = 14;
z = 4;
c = (x + 5 % z) / y;
x = 6;
y = 14;
z = 4;
d = y - x++ * z;
document.write('<br>' + "x += y - x++ * z is " + a);
document.write('<br>' + "z = --x -y * 5 is " + b);
document.write('<br>' + "y /= x + 5 % z is " + c);
document.write('<br>' + "x = y - x++ * z is " + d);
