let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const mosterStats = document.querySelector("#mosterStats");
const monsterNameText = document.querySelector("#monsterNameText");
const monsterHealthText = document.querySelector("#monsterHealthText");

//initialize buttons
button1.onclick = goStore;
button2.onclick = goCavern;
button3.onclick = fightDragon;

function goStore() {
    console.log("Going to store")

}

function goCavern() {
    console.log("Going to Cavern")

}

function fightDragon() {
    console.log("Going to fight the dragon")

}