let pointsHome = 0
let pointsAway = 0

let hScorer = document.getElementById("homescore-el")
let aScorer = document.getElementById("awayscore-el")

let penaltyHomeBtn = document.getElementById("penaltyHome-btn")
let dropHomeBtn = document.getElementById("dropHome-btn")
let tryHomeBtn = document.getElementById("tryHome-btn")
let missedHomeBtn = document.getElementById("missedHome-btn")
let conversionHomeBtn = document.getElementById("conversionHome-btn")

let penaltyAwayBtn = document.getElementById("penaltyAway-btn")
let dropAwayBtn = document.getElementById("dropAway-btn")
let tryAwayBtn = document.getElementById("tryAway-btn")
let missedAwayBtn = document.getElementById("missedAway-btn")
let conversionAwayBtn = document.getElementById("conversionAway-btn")

let newGameBtn = document.getElementById("newgame-btn")

function disableButtons1Home() {
    penaltyHomeBtn.disabled = true
    dropHomeBtn.disabled = true
    tryHomeBtn.disabled = true
}

function disableButtons2Home() {
    missedHomeBtn.disabled = true
    conversionHomeBtn.disabled = true
}

function disableAllHome() {
    disableButtons1Home()
    disableButtons2Home()
}

function disableButtons1Away() {
    penaltyAwayBtn.disabled = true
    dropAwayBtn.disabled = true
    tryAwayBtn.disabled = true
}

function disableButtons2Away() {
    missedAwayBtn.disabled = true
    conversionAwayBtn.disabled = true
}

function disableAllAway() {
    disableButtons1Away()
    disableButtons2Away()
}

function disableAll() {
    disableAllHome()
    disableAllAway()
}

function enableButtons1Home() {
    penaltyHomeBtn.disabled = false
    dropHomeBtn.disabled = false
    tryHomeBtn.disabled = false
}

function enableButtons2Home() {
    missedHomeBtn.disabled = false
    conversionHomeBtn.disabled = false
}

function enableButtons1Away() {
    penaltyAwayBtn.disabled = false
    dropAwayBtn.disabled = false
    tryAwayBtn.disabled = false
}

function enableButtons2Away() {
    missedAwayBtn.disabled = false
    conversionAwayBtn.disabled = false
}

function newGame() {
    pointsHome = 0
    pointsAway = 0
    hScorer.textContent = pointsHome
    aScorer.textContent = pointsAway
    hScorer.style.textDecoration = "none"
    aScorer.style.textDecoration = "none"
    enableButtons1Home()
    disableButtons2Home()
    enableButtons1Away()
    disableButtons2Away()
}

function winning() {
    if (pointsHome > pointsAway) {
        hScorer.style.textDecoration = "underline"
        aScorer.style.textDecoration = "none"
    }
    else if (pointsHome < pointsAway) {
        aScorer.style.textDecoration = "underline"
        hScorer.style.textDecoration = "none"
    }
    else {
        hScorer.style.textDecoration = "none"
        aScorer.style.textDecoration = "none"
    }
}

function penaltyHome() {
    pointsHome += 3
    hScorer.textContent = pointsHome
    winning()
}

function dropHome() {
    pointsHome += 3
    hScorer.textContent = pointsHome
    winning()
}

function tryHome() {
    pointsHome += 5
    hScorer.textContent = pointsHome
    disableButtons1Home()
    enableButtons2Home()
    disableAllAway()
    winning()
    newGameBtn.disabled = true
}

function missedHome() {
    enableButtons1Home()
    disableButtons2Home()
    enableButtons1Away()
    winning()
    newGameBtn.disabled = false
}

function conversionHome() {
    pointsHome += 2
    hScorer.textContent = pointsHome
    enableButtons1Home()
    disableButtons2Home()
    enableButtons1Away()
    winning()
    newGameBtn.disabled = false
}

function penaltyAway() {
    pointsAway += 3
    aScorer.textContent = pointsAway
    winning()
}

function dropAway() {
    pointsAway += 3
    aScorer.textContent = pointsAway
    winning()
}

function tryAway() {
    pointsAway += 5
    aScorer.textContent = pointsAway
    disableButtons1Away()
    enableButtons2Away()
    disableAllHome()
    winning()
    newGameBtn.disabled = true
}

function missedAway() {
    enableButtons1Away()
    disableButtons2Away()
    enableButtons1Home()
    winning()
    newGameBtn.disabled = false
}

function conversionAway() {
    pointsAway += 2
    aScorer.textContent = pointsAway
    enableButtons1Away()
    disableButtons2Away()
    enableButtons1Home()
    winning()
    newGameBtn.disabled = false
}

disableAll()