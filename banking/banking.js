document.getElementById("deposit-button").addEventListener("click", function(){
    
})


function amountInput(inputId){
    const input = document.getElementById(inputId);
    const inputValueText = input.value;
    const inputValue = parseFloat(inputValueText);
    input.value = "";
    return inputValue;

}

function innerText(innerId,amount){
const balance = document.getElementById(innerId);
const balanceValue = parseFloat(balance.innerText);
const newTotal = balanceValue + amount;
balance.innerText = newTotal;
return balance.innerText;
}


//this function also used for checking valid amount 
function previousBalance(){
    const balance = document.getElementById("balance-total");
    const previousBalance = parseFloat(balance.innerText);
    return previousBalance;
}


function balance(amount, isAdd){
    const balance = document.getElementById("balance-total");
    let theLastBalance = previousBalance();

    // const previousBalance = parseFloat(balance.innerText);
    if(isAdd == true){
        const totalBalance = theLastBalance + amount;
        balance.innerHTML = totalBalance;
        return balance.innerText;
    } else {
        const totalBalance = theLastBalance - amount;
        balance.innerHTML = totalBalance;
        return balance.innerText;
    }

}

document.getElementById("deposit-button").addEventListener("click", function(){
    const theInput = amountInput("deposit-input");
    if(theInput > 0){
        innerText("deposit-total",theInput);
        balance(theInput, true);
    }

})
document.getElementById("withdraw-button").addEventListener("click", function(){
    const theInput = amountInput("withdraw-input");
    const existBalance = previousBalance();
    if(theInput > 0 && theInput < existBalance){
        innerText("withdraw-total",theInput);
        balance(theInput, false);        
    }
    else {
        alert("Please input valid amount or you have not sufficient balance")
    }
})