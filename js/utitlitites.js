function getElementByID(id){
    const value = document.getElementById(id).value;
    const convertedValue = parseFloat(value);
    return convertedValue;
   

}
function getInnerTextByID(id){
    const innerText = document.getElementById(id).innerText;
    const convertedInnerText = parseFloat(innerText);
    return convertedInnerText;
}
function getAccountNumberByID(id){
    const accountNumber = document.getElementById(id).value;
     
    return accountNumber;
}
function handleToggle (id,status){
    document.getElementById(id).style.display = status;

}