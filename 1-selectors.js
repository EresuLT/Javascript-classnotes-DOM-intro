//* =====================================================
//*                     DOM SELECTORS
//* ======================================================

console.log('***** SELECTORS *****');


//! =====================================================
//!                     GETELEMENTBYID()
//! ======================================================

//* =========================EXAMPLE-1 (Paragraph Style)============================

const header = document.getElementById('header');
console.log(header);

header.style.color = "red";

//* =========================EXAMPLE-2 (Button Style)============================

const button = document.getElementById("btn")
console.log(button);

button.style.color = "yellow";
button.style.backgroundColor = "black";
btn.style.fontSize = "2rem";

//! =====================================================
//!                     GETELEMENTBYTAGNAME()
//! ======================================================

//* =========================EXAMPLE-3 (img Styling)============================

const img = document.getElementsByTagName("img");
console.log(img);

img[0].style.border = "solid"
img[0].style.borderColor = "red"
img[0].style.transform = "rotate(-5deg)"


//! =====================================================
//!                     GETELEMENTBYCLASSNAME()
//! ======================================================

//* =========================EXAMPLE-4 (CLASS STYLE)============================

const par = document.getElementsByClassName('par');

par[0].textContent = 'DOM Manipülasyonu ';
par[0].innerHTML += '<a href="https://www.clarusway.com">CLARUSWAY</a>';

//! =====================================================
//!                     QUERYSELECTOR()
//! ======================================================

//* =========================EXAMPLE-5 (QUERY STYLE)============================

document.querySelector("title").textContent = "JS09-DOM😎";

const myPars = document.querySelectorAll("p");
console.log(myPars); //? NodeList
myPars.forEach((p) => console.log(p.innerText));


const myPars1 = document.getElementsByClassName("par");
console.log(myPars); //? HTML Collection

//! HTML Collection'dan Array'e çevirme yöntemleri
//? 1.Array.from()
const myParsArray = Array.from(myPars1); //? Array.from ile diziye çevrilir
console.log(myParsArray);
myParsArray.forEach((p) => console.log(p.innerText));

//? 2.Spread/rest Notasyonu
[...myPars1].forEach((p) => console.log(p.innerText));

//! querySelector ile CSS vari seçim yapmak mümkündür.
//! CSS Selectorların hepsini kullanmak mümkündür.
console.log(document.querySelector('section p a'));



