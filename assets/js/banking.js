document.getElementById('deposite-btn').addEventListener('click', function(e){
        // get the ammount deposite
        const userDeposite=document.getElementById('user-deposite');
        const depositeAmmout=userDeposite.value;
        console.log(depositeAmmout);
        const depositeTotal=document.getElementById('deposite-total')

        console.log(depositeTotal.innerText);

        depositeTotal.innerText=depositeAmmout;

        // clear the deposite input filed;
        userDeposite.value='';

});