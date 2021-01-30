
//* First Class Event Handler
//* Plus Button
var firstClassPlusBtn = document.getElementById('firstClass-plus');
firstClassPlusBtn.addEventListener('click', function(){
    updateSeatPriceCalculation('firstClass',true);
})

//* Minus Button 
var firstClassMinusBtn = document.getElementById('firstClass-minus');
firstClassMinusBtn.addEventListener('click', function(){
    updateSeatPriceCalculation('firstClass',false);
})


//* Economy Class Event Handler
//* Plus Button
const economyClassPlusBtn = document.getElementById('economyClass-plus');
economyClassPlusBtn.addEventListener('click', function(){
    updateSeatPriceCalculation('economyClass',true)
})

//* Minus Button 
const economyClassMinusBtn = document.getElementById('economyClass-minus');
economyClassMinusBtn.addEventListener('click', function(){
    updateSeatPriceCalculation('economyClass',false)
});



//* Common Function   
function updateSeatPriceCalculation(Seat,add){
    const SeatInput = document.getElementById(Seat+'-seat-count');
    const SeatCount = parseInt(SeatInput.value);
    let SeatNewCount = SeatCount;
    if(add == true){
        SeatNewCount = SeatCount + 1;
    }
    if(add == false && SeatNewCount > 0){
        SeatNewCount = SeatCount - 1;
    }
    SeatInput.value = SeatNewCount;

    let TotalSeatPrice = 0;

    if(Seat == 'firstClass'){
        TotalSeatPrice = SeatNewCount * 150;
    }
    if(Seat == 'economyClass'){
        TotalSeatPrice = SeatNewCount * 100;
    }
    document.getElementById(Seat+'-price').innerText = TotalSeatPrice;

    billingCalculation();
}


function billingCalculation(){
    const firstClassSeat = getInputValue('firstClass');
    const economyClassSeat =  getInputValue('economyClass');
   
    const SubTotal = firstClassSeat * 150 + economyClassSeat * 100;
    document.getElementById('sub-total').innerText = '$'+ SubTotal;

    const tax = Math.round(SubTotal * 0.1);
    document.getElementById('charge-vat').innerText = '$'+ tax;

    const Total = SubTotal + tax ;
    document.getElementById('total').innerText = '$'+ Total;
}

//* Get Amount of Seat
function getInputValue(Seat){
    const SeatInput = document.getElementById(Seat +'-seat-count');
    const SeatCount = parseInt(SeatInput.value);
    return SeatCount;
}