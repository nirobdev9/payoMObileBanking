document.getElementById("add-money-btn").addEventListener('click', function(event){
event.preventDefault()
 const accountNumber = getAccountNumberByID("add-money-number") ;
 const pin = getElementByID("pin-amount");
 const amount = getElementByID("add-money-amount");
 const mainBalance = getInnerTextByID("main-balance");
 if(amount<= 0){
   alert("invalid amount")
   return;
 }

 if (accountNumber.toString().length === 11) {
    if (pin === 1234) {
      const sum = mainBalance + amount;
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