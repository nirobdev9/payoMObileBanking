document.getElementById("cash-out-form").style.display = 'none';
 console.log('toggle added successfully')
 document.getElementById("add-money").addEventListener("click", function(){
    handleToggle("add-money-form","block");
    handleToggle("cash-out-form","none");
    
 })
 document.getElementById("cash-out").addEventListener("click", function(){
    handleToggle("cash-out-form","block");
    handleToggle("add-money-form","none");
 })