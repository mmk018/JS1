"use strict";


// var leftBorderWidth = 1;
// {
//     let second = 2;
// }// esli ee postavitj v figurnie skobki to za nimi ee vidnpo ne budet
// const pi = 3.14;
// console.log(second);

// Var raspoznaetsja daze do objavlenija, no bez znatsenija
// let sozdaetsja toljko togda, kogda fo nee dohodit code
// nevozmozno pomenjatj

var number = 5;
var string = "Hello!";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4/0) // budet Infinity, nan nolj delitj nikak
console.log("string"*9);// budet NaN  not a number
// Tipi dannih Peremennaja, stroka, boolean logitseskij, object, null, undefined, constanta
let persone = {
name: "John",
age: 25,
isMarried: false
}
console.log(persone.name);


//Massivi
let arr = ["plum.pmg" , "orange.jpg", "apple.bmp" ];

console.log(arr[0]); // Potomus sto s nulja otset

//Obsenie s poljzovatilem
//alert("Hello World!"); OKno s knopkoi ok, bez nazatija vse stoit
//confirm("Are You here?"); //Vijdet Okno ok  cancelAnimationFrame

// let answer = confirm("Are you here?"); //ok oder cancel true or false

// console.log(answer);// vivedet otvet true ili false



// let answer = prompt("Are you 18?" , "Yes"); //ok oder cancel true or false

// console.log(answer); //vivedet otvet polzovatelja


// let answer = +prompt("Are you 18?" , "Yes"); // + pered promt prevratit stroku v tsisilo

// console.log(typeof(answer)); //Vivodit nazvannie tipa dannih, tut String

// console.log(4 + " - object");

let incr = 10,
    decr = 10;

    // incr++;
    // decr--;

    console.log(++incr);// prefix vozvrasaet uze izmenennoe znatsenie
    console.log(decr--);// postfixknoe vozrasaet iznatsaljnoe
    console.log(5%2);
    console.log("2" === 2);

    let isChecked = true,
    isClose= false;

    console.log(isChecked && isClose);// &&  operator i
    console.log(isChecked || isClose);// || operator ili
    console.log(isChecked && !isClose);// ! menjaet znatsenie ne


