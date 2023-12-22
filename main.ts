import inquirer from "inquirer";
let aiChoice:any
let roll
let rollArr
let playerScore:number=0
let aiScore:number=0
let drawScore:number=0
console.log("*****WELCOME TO ROCK PAPER SCISSORS VS AI*****\n","CAN YOU BEAT A SIMPLE MATH.RANDOM FUNCTION?")
async function startRPS() {
    let playerDetails = await inquirer.prompt([
        {
            type:'input',
            name:'playerName',
            message:'Enter your name'       
        },
    ])
    while(true){
    let playerInput = await inquirer.prompt([
            
            {
                type:'list',
                name:'playerSelection',
                message:'SELECT YOUR MOVE',
                choices: ['Rock', 'Paper','Scissors','Quit']
            }
        ])
        
        if (playerInput.playerSelection === 'Quit') {
            console.log('Thanks for playing! \n'+'FINAL SCORE!')
            console.log('DRAW='+drawScore+'\t'+'AI='+aiScore+'\t'+playerDetails.playerName+'='+playerScore+'\t')
            break;
          }
          roll=Math.floor(Math.random()*3)
          rollArr=['Rock','Paper','Scissors']
          aiChoice=rollArr[roll]
          console.log(playerDetails.playerName+' Chose '+playerInput.playerSelection+'\tVS\t'+'AI Chose '+aiChoice)
          if(playerInput.playerSelection===aiChoice){
            drawScore++
            console.log("its a draw")
            console.log('DRAW='+drawScore+'\t'+'AI='+aiScore+'\t'+playerDetails.playerName+'='+playerScore+'\t')
            
        }
        else if(
                (playerInput.playerSelection==='Paper'&&aiChoice==='Rock')||
                (playerInput.playerSelection==='Rock'&&aiChoice==='Scissors')||
                (playerInput.playerSelection==='Scissors'&&aiChoice==='Paper')){
        
            playerScore++
            console.log("Player "+playerDetails.playerName+" WINS")
            console.log('DRAW='+drawScore+'\t'+'AI='+aiScore+'\t'+playerDetails.playerName+'='+playerScore+'\t')
            
        }
        else{
            aiScore++
            console.log("Player "+playerDetails.playerName+" LOST")
            console.log('DRAW='+drawScore+'\t'+'AI='+aiScore+'\t'+playerDetails.playerName+'='+playerScore+'\t')
        }
    }
}
startRPS()