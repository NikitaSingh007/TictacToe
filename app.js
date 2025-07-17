let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-button");
let newGamebtn = document.querySelector("#newgame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true ;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame = () =>
{
    turn0 = true ;
    enableBoxes();
    msgContainer.classList.add("hide");

};

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        //console.log("box was clicked");
        if (turn0) {
        box.innerText= "0";
        turn0 = false ;
 }
 else
{
    box.innerText ="X";
    turn0 = true ;


 }
 box.disabled = true ;
 checkWinner() ;
    });
});

 const disableBoxes = () => 
 {
    for(let box of boxes)
    {
        box.disabled = true ;
    }
 };
 const enableBoxes = () => 
 {
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
 };
const showWinner = (winner) => {
    msg.innerText = `Congratulations , winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
} ;


const checkWinner = () =>
{
    for(let pattern of winPattern)
    {
        console.log( boxes[pattern[0]].innerText , boxes[pattern[1]].innerText  , boxes[pattern[2]].innerText  );
        let posVal1 = boxes[pattern[0]].innerText;
         let posVal2 = boxes[pattern[1]].innerText;
          let posVal3 = boxes[pattern[2]].innerText;
          if (posVal1 != "" && posVal2 != "" && posVal3 != "")
          {
            if (posVal1 === posVal2 && posVal2 === posVal3 )
            {
                //console.log("winner" ,posVal1 ) ;
                showWinner(posVal1);
            }
          }
    }
};

newGamebtn.addEventListener("click" , resetGame );
resetbtn.addEventListener("click" , resetGame );