// console.log(13);
// console.log("швабра");
// let syyyyyyyyyyyyy="suuuuuuuuuuu"
// console.log(syyyyyyyyyyyyy);
// let dog="doda"
// console.log(dog);
// let food="fries"
// console.log(dog+" likes "+food);
// let city="Rome"
// console.log(dog+" lives in "+city);
let checkButton = document.getElementById("checkButton")
let input = document.getElementById("input")
let zagolovok = document.getElementById("zagolovok")
let hp = document.getElementById("h2")
let podskazki = document.getElementById("h4")
let img = document.getElementById("img")
let newButton = document.getElementById("newButton")
let monkey = document.getElementById("monkey")
let schet = 0 
let hpSteps = [
    "💖💖💖",
    "💔💖💖",
    "💔💔💖",
    "💀💀💀",
]
let hpNumber = 0
// hp.innerHTML = "💖".repeat(hpNumber)
hp.innerHTML = hpSteps[0]
let secret = Math.floor(Math.random() * 10)
// secret = 1
console.log(input)
console.log(checkButton);
checkButton.onclick = function (event) {
    // чтобы страница не оьновлялась
    event.preventDefault();
    console.log(input.value)
    if (input.value == secret) {
        console.log("победа");
        zagolovok.innerHTML = "ты победил. ты утратил сердец: " + hpNumber
        checkButton.disabled = true
        checkButton.style.opacity = 0.5
        img.src = "you win.avif"
    }
    else {
        console.log("ты проиграл");
        hpNumber = hpNumber + 1
        // hp.innerHTML = "💖".repeat(hpNumber)
        hp.innerHTML = hpSteps[hpNumber]
        if (secret > input.value) {
            console.log("число больше");
            podskazki.innerHTML = "секретное число было больше "
        }
        else {
            console.log("число меньше")
            podskazki.innerHTML = "секретное число было меньше"
        }

        if (hpNumber == 3) {
            // hp.innerHTML = "💀💀💀"
            zagolovok.innerHTML = "ты проиграл. сикретное число было " + secret
            checkButton.disabled = true
            checkButton.style.opacity = 0.5
            img.src = "hj.jpg"

        }
        console.log(hpNumber);
    }
}
newButton.onclick = function (event) {
    console.log("Игра начилась")
    img.src = "hi.png"
    zagolovok.innerHTML = "Угадай число"
    hp.innerHTML = "💖💖💖"
    checkButton.disabled = false
    checkButton.style.opacity = 1
    hpNumber = 0
    secret = Math.floor(Math.random() * 10)
    schet = 0
}
img.onclick = function (event){
    console.log(schet);
    schet = schet + 1
    if (schet == 10) {
       img.src= "gg.png"  
    }
    
}

//  else{
//     console.log("monkey");
//     monkey = monkey + 10
    
// 