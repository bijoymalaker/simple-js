//login section
const loginBtn = document.getElementById("login");
loginBtn.addEventListener('click',function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display ="none";
    const transtionArea = document.getElementById("transiton-area");
    transtionArea.style.display ="block";
})

//deposite button eVent handler

const depositBtn = document.getElementById("deposit");
depositBtn.addEventListener("click",function(){
    const addedNumber = parseFloat(document.getElementById('depositAmount').value);
    updateSpanText("currentDeposit", addedNumber);

    updateSpanText("currentBalance", addedNumber);

    document.getElementById("depositAmount").value ="";
})
function updateSpanText(id, addedNumber){
    const currentNumber = parseFloat(document.getElementById(id).innerText);
    const total = addedNumber + currentNumber;
    document.getElementById(id).innerText = total;
}


//Withdraw button event handler

const withdrawBtn = document.getElementById("withdraw");
withdrawBtn.addEventListener("click",function(){
    const withdrawNumber = parseFloat(document.getElementById("withdrawAmount").value);

    updateSpanText("currentWithdraw", withdrawNumber);

    updateSpanText("currentBalance", -1 * withdrawNumber);

    document.getElementById("withdrawAmount").value ="";
})