const play_button = document.getElementById("play")
const container = document.getElementsByClassName("container")
const confirm_button = document.getElementsByClassName("confirm")
const radio_rock = document.getElementById("rock")
const radio_paper = document.getElementById("paper")
const radio_scissors = document.getElementById("scissors")

play_button.addEventListener("click", () => {
    play_button.style.display = "none"
    container[0].style.display = "flex"
})

function confirm() {
    if(radio_rock.checked) {
        confirm_button[0].style.display = "block"
    } else if(radio_paper.checked) {
        confirm_button[1].style.display = "block"
    } else if(radio_scissors.checked) {
        confirm_button[2].style.display = "block"
    }
}