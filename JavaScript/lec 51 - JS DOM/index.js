// JS DOM - Accessing Methods
// 1. getElementById()
// 2. getElementsByClassName()
// 3. getElementsByTagName()
// 4. querySelector()
// 5. querySelectorAll()


let loginbtn = document.getElementById("paymentButton");
let body = document.body;
console.log(body)
let title = document.querySelector(".card_title");
// console.log(title)

// JS DOM - updating methods
// 2. innerHTML
// 4. outerHTML
// 1. textContent
// 3. innerText

loginbtn.textContent = "Login Now";
title.innerText = "Login to RazaorPay"


// JS DOM - inserting methods
// 1. createElement()
// 1. appendChild()
// 2. insertAdjacentElement()
// 1. insertAdjacentHTML()
// 3. insertAdjacentText()

let forgetbtn = document.createElement("a");
forgetbtn.textContent = "Forget Password";
forgetbtn.href = "#";
forgetbtn.style.color = "blue";
forgetbtn.style.textDecoration = "none";

loginbtn.insertAdjacentElement("beforebegin", forgetbtn);

// let container = document.querySelector(".container");
// container.appendChild(forgetbtn);

let footer = document.createElement("footer")
footer.innerText = " &copy; 2021 RazaorPay. All Rights Reserved";
footer.style.backgroundColor = "gray";
footer.style.textAlign = "center";
footer.style.padding = "2rem";

body.insertAdjacentElement("beforeend", footer);

// JS DOM - removing methods
// 1. removeChild()
// 2. remove()

let card = document.querySelector('.card');
let cancelbtn = document.querySelector('#cancelButton');

//  it removes cancelbtn from the card
// card.removeChild(cancelbtn);

// it removes card from the body
// card.remove();