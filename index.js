const billAmount = document.querySelector("#bill-amt-input");
const givenCash =document.querySelector("#cash-given-input");
const button = document.querySelector("#checkBtn");
const errorBox = document.querySelector("#errorMsg")
const numOfNotes = document.querySelectorAll(".no-of-notes")
const availableNotes = [2000,500,100,20,10,5,1]

function validateAmount(){
    let billAmountValue = Number(billAmount.value)
    let givenCashValue =Number(givenCash.value)
    if(billAmountValue > 0 && givenCashValue > 0){
        if(billAmountValue <= givenCashValue){
            const returnAmount = givenCashValue - billAmountValue;
            if(returnAmount == 0){
                errorBox.innerText = "No Amount to return"
            }else{
                errorBox.innerText = returnAmount;
                calculateChange(returnAmount)
            }
        }
    }else if(billAmountValue < 0 || givenCashValue < 0){
        errorBox.innerText = "Invalid Input"
    }}
  
function calculateChange (returnAmount){
        for (let i = 0; i < availableNotes.length; i++) {
          const numberOfNotes = Math.trunc(returnAmount / availableNotes[i]);
          returnAmount %= availableNotes[i];
          numOfNotes[i].innerText = numberOfNotes;
        }
      }
      
button.addEventListener("click",validateAmount)