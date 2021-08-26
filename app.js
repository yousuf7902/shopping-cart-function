function updateInput(product,price, isIncreasing) {

    const input = document.getElementById(product+'-input');
    
    let inputValue = input.value;
   
    if (isIncreasing == true) {
        inputValue= parseInt(inputValue) + 1;
    }
    else if(inputValue > 0) {
        inputValue = parseInt(inputValue) - 1;
    }

    input.value = inputValue;
    const caseTotal = document.getElementById(product+'-total');
    caseTotal.innerText = inputValue * price;
    // Calculate total
    calculateTotal();

}

function getInputValue(product) {
    const productInput = document.getElementById(product+'-input')
    const inputValue = parseInt(productInput.value);
    return inputValue;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const taxAmount = subTotal / 10;
    const totalPrice = subTotal + taxAmount;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = taxAmount;
    document.getElementById('total-price').innerText = totalPrice;

}
/* function updatePhoneInput(isIncreasing) {
    const input = document.getElementById('phone-input');

    let inputValue = input.value;

    if (isIncreasing == true) {
        inputValue = parseInt(inputValue) + 1;
    }
    else if (inputValue > 0) {
        inputValue = parseInt(inputValue) - 1;
    }
    input.value = inputValue;
    const phoneTotal = document.getElementById('phone-total');
    phoneTotal.innerText = inputValue * 1219;

} */

document.getElementById('plus-case-btn').addEventListener('click', function () {
   /*  const inputCase = document.getElementById('input-case');
    const inputValue = inputCase.value;
    inputCase.value = parseInt(inputValue) + 1; */
    updateInput('case',59, true);
})

document.getElementById('minus-case-btn').addEventListener('click', function () {
    /* const inputCase = document.getElementById('input-case');
    const inputValue = inputCase.value;
    inputCase.value = parseInt(inputValue) - 1; */
    updateInput('case',59,false);
})

document.getElementById('plus-phone-btn').addEventListener('click', function () {
    updateInput('phone',1219,true);
});

document.getElementById('minus-phone-btn').addEventListener('click', function () {
    updateInput('phone',1219,false);
})