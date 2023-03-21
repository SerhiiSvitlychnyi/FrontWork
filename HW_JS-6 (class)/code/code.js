function Worker (name, surname, rate, days){
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
}

Worker.prototype.getSalary = function (){
    return(this.rate * this.days);
}

let worker1 = new Worker("Bob1", "Bobovich1", 5, 10);
document.write("Зарплата: " + worker1.getSalary() + "<br/>");
let worker2 = new Worker("Bob2", "Bobovich2", 10, 10);
document.write("Зарплата: " + worker2.getSalary() + "<br/>");
let worker3 = new Worker("Bob3", "Bobovich3", 15, 10);
document.write("Зарплата: " + worker3.getSalary() + "<br/>");
let worker4 = new Worker("Bob4", "Bobovich4", 120, 10);
document.write("Зарплата: " + worker4.getSalary() + "<br/>");



function MyString (){

}

MyString.prototype.reverse = function(text){
    return(text.split('').reverse().join(''));
}

MyString.prototype.ucFirst = function(text){
    if (!text) return text;
    return text[0].toUpperCase() + text.slice(1);
}

MyString.prototype.ucWords = function(text){
    for (var a = text, b = "", i = 0; i < a.length; i++) {
        b += " " != a[i] ? i && " " != a[i - 1] ? a[i] : a[i].toUpperCase() : " ";
        }
    return b;
        
}

let text1 = new MyString();
document.write("Переворачиваем строку : " + text1.reverse("Переворачиваем строку") + "<br/>");
document.write("С заглавной буквы строка : " + text1.ucFirst("с заглавной буквы строка ") + "<br/>");
document.write("Каждое слово с заглавной : " + text1.ucWords("Каждое слово с заглавной") + "<br/>");


function Phone(number, model, weight) {
    this.number = number;
    this.model = model;
    this.weight = weight;
}

Phone.prototype.receiveCall = function(name){
    document.write(` <br/> Телефонує ${name}, `);
}

Phone.prototype.getNumber = function(){
    return this.number;
}

let phone1 = new Phone(1234567890, "LG", 130);
document.write(`${phone1.number}, ${phone1.model}, ${phone1.weight} <br/>`);
let phone2 = new Phone(2345678901, "Sony", 140);
document.write(`${phone2.number}, ${phone2.model}, ${phone2.weight} <br/>`);
let phone3 = new Phone(3456789012, "Samsung", 185);
document.write(`${phone3.number}, ${phone3.model}, ${phone3.weight} <br/>`);
phone1.receiveCall("Sam");

document.write(phone1.getNumber());
phone2.receiveCall("Ann");
document.write(phone2.getNumber());
phone3.receiveCall("Bob");
document.write(phone3.getNumber());