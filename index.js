let userScore = 0
let AIScore = 0
let userpoint = document.querySelector("#user")
let AIpoint = document.querySelector("#AI")
let board = document.querySelector("#board")
let reset = document.getElementById("reset")


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
        // localStorage.setItem('you',userScore)
    }
    else {
        AIScore = AIScore + 1
        AIpoint.innerText = AIScore
        board.innerText = `Comp choose ${comp}, You lost!`
        board.style.backgroundColor = 'red'
        // localStorage.setItem('AI',AIScore)
    }
    if(userScore==5 || AIScore==5){
        choices.forEach(choice=>
            choice.style.display = "none"
        )
        if(userScore==5){
            board.innerText = `Yeah! you win`
            board.style.backgroundColor = 'green'
        }
        else{
            board.innerText = `OOP! you lost`
            board.style.backgroundColor = 'red'
        }
    }
}
reset.addEventListener("click",()=>{
    userScore = 0
    userpoint.innerText = 0
    AIScore = 0
    AIpoint.innerText = 0
    choices.forEach(choice=>
        choice.style.display = "block "
    )    
})
