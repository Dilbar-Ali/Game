// alert("hello page relode");

const rockBtn=document.getElementById("rock-btn");

const paperBtn=document.getElementById("paper-btn");

const scissorBtn=document.getElementById("scissor-btn");


const userChoice=document.getElementById("user-choise");

const computerChoice=document.getElementById("computer-choise");

const result=document.getElementById("result");



const userScore=document.getElementById("users-score");

const computerScore=document.getElementById("computer-score");

let cmpScore=0;
let usrScore=0;

const increment=(string)=>{

    if(string=="Computer"){
        cmpScore++;
        // cmpScore=cmpScore+1
        computerScore.innerHTML=cmpScore;

    }
    else{
        usrScore++;
        userScore.innerHTML=usrScore;
    }

}





const runGame=(name)=>{

    const userInput=name;

    const values=["Rock" , "Paper", "Scissor"];


    const randomNumber=Math.floor(Math.random()*3);

    const computerInput=values[randomNumber];
    userChoice.innerHTML="Your pick  " + userInput;
    computerChoice.innerHTML="Computer pick  " + computerInput;

    if(userInput=="Rock"){
        if(computerInput=="Rock"){
            result.innerHTML="Draw";
        }
    }
    else if(computerInput=="Paper"){
        result.innerHTML="You Lose";
        increment("Computer");
    }
    else{
        result.innerHTML="You Win";
        increment("User");
    }


}


rockBtn.addEventListener("click",()=>{
runGame("Rock");
// alert("rockBtn click");


});

paperBtn.addEventListener("click",()=>{
runGame("Paper");
// alert("paperBtn click");

});

scissorBtn.addEventListener("click",()=>{
runGame("Scissor");
// alert("scissorBtn click");

});




