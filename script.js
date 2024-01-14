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

const location = [
    {
        name: "town square",
        "button text": [Fight Dragon ,Go To Cavern ,Go to Store ],
        "button functions": [fightDragon ,goCavern ,goStore],
        text: "You are in the town square. You see a sign that says \"Store.\""
    },
    {
        name: "store"
        "button text": ["Buy 10 Health (10 Gold)", "Buy weapon (30 gold)", "Go To Square"]
        "button functions": [buyHealth, buyWeapon, goTown]
        text: "You've enter the store."
    }
]

//initialize buttons
button1.onclick = goStore;
button2.onclick = goCavern;
button3.onclick = fightDragon;

function update(location) {


}


function goTown() {
    button1.innerText = "Go to store";
    button2.innerText = "Go to Cavern";
    button3.innerText = "Fight dragon";
    button1.onclick = goStore;
    button2.onclick = goCavern;
    button3.onclick = fightDragon;
    text.innerText = "You've enter the town square. you see a sign that says \"store\".";

}

function goStore() {
    button1.innerText = "Buy 10 Health (10 Gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go To Square";
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goStore;
    text.innerText = "You've enter the store.;"
}

function goCavern() {
    console.log("Going to Cavern")
    button1.innerText = "Buy 10 Health (10 Gold)"
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go To Square";
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goCavern;
    text.innerText = "Cavern has been entered.;"
}

function fightDragon() {
    console.log("Going to fight the dragon")

}

function buyWeapon() {
    console.log("Going to fight the dragon")
    button1.innerText = "Sword (10 Gold)"
    button2.innerText = "Axe (50 gold)";
    button3.innerText = "Dagger (25 gold)";
    button4.innerText = "Go To Square";
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goCavern;
    text.innerText = "Cavern has been entered.;"
}
