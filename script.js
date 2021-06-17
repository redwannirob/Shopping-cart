// variables
const increment1 = document.querySelector('#increment-1');
const decrement1 = document.querySelector('#decrement-1');
const increment2 = document.querySelector('#increment-2');
const decrement2 = document.querySelector('#decrement-2');
const checkOutBtn = document.querySelector('#checkout-btn');

const input1 = document.querySelector('#phone-input');
const input2 = document.querySelector('#case-input');
const subtotalValue = document.querySelector('#subtotal-amount');
const taxValue = document.querySelector('#tax-amount');
const totalValue = document.querySelector('#total-amount');
const cartDiv = document.querySelector('#cart-div');
const anotherDiv = document.querySelector('.another');

const phonePrice = 1219;
const casePrice = 59;

let totalPhonePrice = input1.value * phonePrice;
let totalCasePrice = input2.value * casePrice;
let subtotal = phonePrice + casePrice;
let tax = (subtotal * 10) / 100;
let total = 0;

// FUNCTIONS

const updateSubtotal = (totalPhonePrice, totalCasePrice) => {
     subtotal = totalPhonePrice + totalCasePrice;
    subtotalValue.innerHTML = subtotal;
    return subtotal;
}

const updateTax = (subtotal) => {
     tax = (subtotal * 13.5) / 100;
     taxValue.innerHTML = tax;
     return updateTax;
}

const updateTotal=(subtotal,tax)=>{
    total = subtotal + tax;
    totalValue.innerHTML = total;
    return total;
}


//EVENT LISTENERS 

increment1.addEventListener("click", function () {
    input1.value++;
    // subtotal = totalCasePrice + input1.value * phonePrice;
    updateSubtotal(totalCasePrice, input1.value * phonePrice);
    updateTax(subtotal);
    updateTotal(subtotal,tax);
   
})

increment2.addEventListener("click", function () {
    input2.value++;
    updateSubtotal(input2.value * casePrice, input1.value * phonePrice);
    updateTax(subtotal);
    updateTotal(subtotal,tax);
})

decrement1.addEventListener("click", function () {
    input1.value <= 0 ? input1.value = 0 : input1.value--;

    // if (input1.value <= 0) {
    //     input1.value = 0;
    // }
    // else{
    //     input1.value--;
    // }
    updateSubtotal(totalCasePrice, input1.value * phonePrice);
    updateTax(subtotal);
    updateTotal(subtotal,tax);
})

decrement2.addEventListener("click", function () {
    input2.value <= 0 ? input2.value = 0 : input2.value--;
    updateSubtotal(input2.value * casePrice, input1.value * phonePrice);
    updateTax(subtotal);
    updateTotal(subtotal,tax);
})

checkOutBtn.addEventListener("click",function(){
 cartDiv.style.display = 'none'; 
    anotherDiv.style.display = 'block';
    anotherDiv.style.color = 'blueviolet';
})



