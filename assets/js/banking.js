document.getElementById('deposite-btn').addEventListener('click', function(e){
        // get the ammount deposite
        const depositInput=document.getElementById('user-deposite');
        const newDepositAmountText = depositInput.value;
        const newDepositAmount = parseFloat(newDepositAmountText);

        // update deposite total
        const depositTotal = document.getElementById('deposite-total');

        const previousDepositText = depositTotal.innerText;

        const previousDepositAmount = parseFloat(previousDepositText);

        const newDepositTotal = previousDepositAmount + newDepositAmount;
        depositTotal.innerText=newDepositTotal;


        // upadte  accout banance
        const balanceTotal=document.getElementById('balance-total');
        const balanceTotaltext=balanceTotal.innerText

        const previousBalanceTotal=parseFloat(balanceTotaltext);
        const newBalanceTotal=previousBalanceTotal+newDepositAmount;
        balanceTotal.innerText=newBalanceTotal

        // clear input filed

        depositInput.value=''

});

// handle withdraw  event handler
document.getElementById('withdraw-btn').addEventListener('click',function(e){
        console.log('withdraw');

        const withdrawInput=document.getElementById('user-withdraw');

        const withdrawAmmoutText=withdrawInput.value;

        const newWithdraw=parseFloat(withdrawAmmoutText)
        console.log(withdrawAmmoutText);


        // set withdraw total

        const withdrawTotal=document.getElementById('withdraw-total');

        const previousWithdrawText=withdrawTotal.innerText;
        const previousWithdrawTotal=parseFloat(previousWithdrawText);

        const newWithdrawTotal=previousWithdrawTotal+ newWithdraw;

        withdrawTotal.innerText=newWithdrawTotal;


        // update balance

       
    const balanceTotal = document.getElementById('balance-total');

    const previousBalanceText = balanceTotal.innerText;

    const previousBalanceTotal = parseFloat(previousBalanceText);

    const newBalanceTotal = previousBalanceTotal - newWithdraw;

    balanceTotal.innerText = newBalanceTotal;




        // clear input

        withdrawInput.value='';


})