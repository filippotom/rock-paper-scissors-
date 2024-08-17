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
            radioValue = radioElement[i].value + " "
            console.log(radioValue)
        }
    }

    let random = Math.floor(Math.random() * 4)
    console.log(random)

}  
