const play_button = document.getElementById("play")
const container = document.getElementsByClassName("container")
const confirm_button = document.getElementById("confirm")

// this function makes disappear the play button and pops up the container with the game and the confirm button
play_button.addEventListener("click", () => {
    play_button.style.display = "none"
    container[0].style.display = "flex"
    confirm_button.style.display = "block"
})

function play() {

    const radioElement = document.getElementsByName("choose")
    let radioValue = ""
    
    // getting the value of the radio input selected
    for(let i = 0; i < radioElement.length; i++) {
        if(radioElement[i].checked) {
            radioValue = radioElement[i].value
        }
    }

    //  arrayOption is needed for the computer to choose an option with a random number from 1 to 3
    let arrayOption = ["rock", "paper", "scissors"]
    let random = Math.floor(Math.random() * 3)

    const computerChoice = document.getElementById("computer-choice")
    const output = document.getElementById("output")
    

    if(arrayOption[random] == radioValue) {
        computerChoice.style.display = "block"
        output.style.display = "block"
        computerChoice.innerHTML = "The computer chose " + arrayOption[random]
        output.innerHTML = "It's a tie!"
        console.log("tie")

    } else if(arrayOption[random] == "rock" && radioValue == "paper") {
        computerChoice.style.display = "block"
        output.style.display = "block"
        computerChoice.innerHTML = "The computer chose " + arrayOption[random]
        output.innerHTML = "You Won"
        console.log("You Won!")

    } else if(arrayOption[random] == "scissors" && radioValue == "paper") {
        computerChoice.style.display = "block"
        output.style.display = "block"
        computerChoice.innerHTML = "The computer chose " + arrayOption[random]
        output.innerHTML = "You Lost"
        console.log("You Lost")

    } else if(arrayOption[random] == "paper" && radioValue == "scissors") {
        computerChoice.style.display = "block"
        output.style.display = "block"
        computerChoice.innerHTML = "The computer chose " + arrayOption[random]
        output.innerHTML = "You won"
        console.log("You Won")

    } else if(arrayOption[random] == "paper" && radioValue == "rock"){
        computerChoice.style.display = "block"
        output.style.display = "block"
        computerChoice.innerHTML = "The computer chose " + arrayOption[random]
        output.innerHTML = "You Lost"
        console.log("You Lost")

    } else if(arrayOption[random] == "scissors" && radioValue == "rock") {
        computerChoice.style.display = "block"
        output.style.display = "block"
        computerChoice.innerHTML = "The computer chose " + arrayOption[random]
        output.innerHTML = "You Won"
        console.log("You Won")

    } else if(arrayOption[random] == "rock" && radioValue == "scissors"){
        computerChoice.style.display = "block"
        output.style.display = "block"
        computerChoice.innerHTML = "The computer chose " + arrayOption[random]
        output.innerHTML = "You Lost"
        console.log("You Lost")

    } else {
        output.style.display = "block"
        output.innerHTML = "You have not chosen an option, reload the page to play."
        console.log("You have not chosen an option, reload the page to play.")
    }


}  
