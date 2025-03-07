document.getElementById("cash-out-btn").addEventListener("click", function(){
    const accountNumber = getAccountNumberByID("add-cash-out-number");
    const cashOutAmount = getElementByID("cash-out-amount");
    const pin = getElementByID("cash-out-pin");
    const mainBalance = getInnerTextByID("main-balance");
    if(cashOutAmount <= 0){
        alert("Amount invalid")
        return;
    }
    if(mainBalance < cashOutAmount){
        alert("Amount invalid")
        return;
    }
        
    if (accountNumber.toString().length === 11) {
        if (pin === 1234) {
          const sum = mainBalance - cashOutAmount;
         document.getElementById("main-balance").innerText = sum;
          
        
          
        }  
        else{
             alert('pin invalid')
        }
    } 
    else{
       alert('invalid account number')
    } 
     
})