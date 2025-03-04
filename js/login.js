 document.getElementById('login-btn').addEventListener('click', function(event){
     event.preventDefault()
     const accountNumber = document.getElementById('account-input').value;
     const pinNumber = document.getElementById('pin-input').value;
     const convertedNumber = parseInt(pinNumber)
     if (accountNumber.length === 11) {
        if (convertedNumber === 1234) {
            window.location.href="./main.html"
          
        }  
        else{
             alert('pin invalid')
        }
    } 
    else{
       alert('invalid number')
    } 
});