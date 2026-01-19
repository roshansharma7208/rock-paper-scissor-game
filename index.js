let userScore = 0
let AIScore = 0
let userpoint = document.querySelector("#user")
let AIpoint = document.querySelector("#AI")
let board = document.querySelector("#board")

// Getting user Choice
let choices = document.querySelectorAll(".choice")  //Accessing all choices
choices.forEach(choice => {
    choice.addEventListener("click", () => {
        let user = choice.getAttribute("id")
        play(user)
    })
})

// Computer choices
const gameplay = () => {
    let AI = ['rock', 'paper', 'scissor']
    let randomIndex = Math.floor(Math.random() * 3)
    return AI[randomIndex]
}

// Gameplay
const play = (user) => {
    const comp = gameplay()

    // When game is Draw
    if (user === comp) {
        board.innerText = `Match Draw`
        board.style.backgroundColor = ''
    }
    // To see Who Win
    else {
        let userWin = true
        if (user == 'rock') {
            userWin = comp == 'paper' ? false : true
        }
        else if (user == 'paper') {
            userWin = comp == 'scissor' ? false : true
        }
        else {
            userWin = comp == 'rock' ? false : true
        }
        displayPoint(userWin, comp)
    }
}

// Showing and Calculating Score
const displayPoint = (userWin, comp) => {
    if (userWin) {
        userScore = userScore + 1
        userpoint.innerText = userScore
        board.innerText = `Comp choose ${comp}, You win!`
        board.style.backgroundColor = 'green'
    }
    else {
        AIScore = AIScore + 1
        AIpoint.innerText = AIScore
        board.innerText = `Comp choose ${comp}, You lost!`
        board.style.backgroundColor = 'red'
    }
}