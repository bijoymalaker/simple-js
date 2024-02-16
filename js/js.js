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
    const depositNumber = parseFloat(document.getElementById('depositAmount').value);

    const currentDepositNumber = parseFloat(document.getElementById("currentDeposit").innerText);
    const totalDeposit = depositNumber + currentDepositNumber;
    document.getElementById("currentDeposit").innerText = totalDeposit;

    const currentBalanceNumber = parseFloat(document.getElementById("currentBalance").innerText);
    const totalBalance = totalDeposit + currentBalanceNumber;
    document.getElementById("currentBalance").innerText = totalBalance;

    document.getElementById("depositAmount").value ="";
})


//Withdraw button event handler

const withdrawBtn = document.getElementById("withdraw");
withdrawBtn.addEventListener("click",function(){
    const withdrawNumber = parseFloat(document.getElementById("withdrawAmount").value);

    const currentWithdrawNumber = parseFloat(document.getElementById("currentWithdraw").innerText);
    const totalWithdraw = currentWithdrawNumber + withdrawNumber;

    document.getElementById("currentWithdraw").innerText = totalWithdraw;

    const currentBalance = document.getElementById("currentBalance").innerText;
    const totalBalance = currentBalance - withdrawNumber;

    document.getElementById("currentBalance").innerText = totalBalance;

    document.getElementById("withdrawAmount").value ="";
})