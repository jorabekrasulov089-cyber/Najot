// 1 juft yoki toq son
let son1 = +prompt("Son kiriting:");

if (son9 % 2 === 0) {
  console.log("Juft son");
} else {
  console.log("Toq son");
}
// ==================================
// 2. 3 xonali son ichida eng katta raqam qaysi honada
let son12 = +prompt("3 xonali son kiriting:");

let yuzlik = Math.floor(son12 / 100);
let onlik = Math.floor((son12 % 100) / 10);
let birlik = son12 % 10;

if (yuzlik >= onlik && yuzlik >= birlik) {
  console.log("Eng katta raqam yuzlik xonasida:", yuzlik);
} else if (onlik >= yuzlik && onlik >= birlik) {
  console.log("Eng katta raqam onlik xonasida:", onlik);
} else {
  console.log("Eng katta raqam birlik xonasida:", birlik);
}

// ===============================================================
// 3. Sonning ishorasi
let son33 = +prompt("Son kiriting:");

if (son33 > 0) {
  console.log("musbat");
} else if (son33 < 0) {
  console.log("manfiy");
} else {
  console.log("nol");
}
// =======================================================================
// 4. 3 xonali sonni soz bilan chaqirish 
let son42 = +prompt("3 xonali son kiriting:");

let yuzlik4 = Math.floor(son42 / 100);
let onlik4 = Math.floor((son42 % 100) / 10);
let birlik4 = son42 % 10;

let yuzlar = ["", "bir yuz", "ikki yuz", "uch yuz", "to'rt yuz", "besh yuz", "olti yuz", "yetti yuz", "sakkiz yuz", "to'qqiz yuz"];
let onlar = ["", "o'n", "yigirma", "o'ttiz", "qirq", "ellik", "oltmish", "yetmish", "sakson", "to'qson"];
let birliklar = ["", "bir", "ikki", "uch", "to'rt", "besh", "olti", "yetti", "sakkiz", "to'qqiz"];

console.log(yuzlar[yuzlik4] + " " + onlar[onlik4] + " " + birliklar[birlik4]);
// ===================================================================================
// 5. kabisa yil 
let yil = +prompt("Yil kiriting:");

if (yil % 400 === 0) {
  console.log("Kabisa yil");
} else if (yil % 100 === 0) {
  console.log("Oddiy yil");
} else if (yil % 4 === 0) {
  console.log("Kabisa yil");
} else {
  console.log("Oddiy yil");
}
// =============================================================================================
// 6. Eng kichik son (Mathsiz)
let a = +prompt("1-sonni kiriting:");
let b = +prompt("2-sonni kiriting:");

let kichik;

if (a < b) {
  kichik = a;
} else {
  kichik = b;
}

console.log("Eng kichik son:", kichik);

// =========================================================================================================
// 7. let, const, var farqi
// var
// eski usul
// qayta e'lon qilish mumkin
// function scope
// va tepasigagam chiqarilishi mumkin

var a1 = 10;
var a2 = 20; // mumkin

// let
// zamonaviy
// qayta e'lon qilib bo'lmaydi
// block scope

let b1 = 10;
let b2 = 20; // xato

// const
// o'zgarmas qiymat
// e'lon qilganda qiymat berish shart

const c1 = 10;
// c1 = 20;  xato
