let logInBtn = document.getElementById("login");
logInBtn.addEventListener("click", function(){
    let loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";

    let transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
});


// deposit button eventHandler

let depositBtn = document.getElementById("addDeposit");

depositBtn.addEventListener("click", function(){
    let depositAmount = document.getElementById("depositAmount").value;
    let depositNumber = parseFloat(depositAmount);

    updateAmount("currentDeposit", depositNumber);
    updateAmount("currentBalance", depositNumber);
    document.getElementById("depositAmount").value = "";


});

function updateAmount(id, addedNumber){
    let current = document.getElementById(id).innerText;
    let currentNumber = parseFloat(current);
    let total = addedNumber + currentNumber;
    document.getElementById(id).innerText = total;
}




// Withdraw button eventHandler
let withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function(){
    let withdrawAmount = document.getElementById("withdrawAmount").value;
    let withdrawNumber = parseFloat(withdrawAmount);
    updateAmount("withdrawBalance", withdrawNumber);
    updateAmount("currentBalance", -1 * withdrawNumber);
    document.getElementById("withdrawAmount").value = "";
});
