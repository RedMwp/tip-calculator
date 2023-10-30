//select all fileds
const bill = document.getElementById('bill');
const customTip = document.getElementById('custom');
const numberOfPeople = document.getElementById('number-of-people')
const totalAmount = document.getElementById('total-amount');
const tipAmount = document.getElementById('tip-amount');
const button = document.getElementById('submit');

// tips

const five = document.getElementById('five');
const ten = document.getElementById('ten');
const fTeen = document.getElementById('f-teen')
const tFive = document.getElementById('t-five');
const fTy = document.getElementById('f-ty');


// fixed tip into custom;

function takeTip(elem){
    customTip.value=elem;
}



five.onclick = function(e){
    takeTip(05);
    changeBtn();
    clearBg(fTy,fTeen,ten,tFive)
    e.target.style.background='hsl(172, 67%, 45%)'
}
ten.onclick = function(e){
    takeTip(10)
    changeBtn()
    clearBg(five,fTeen,fTy,tFive)
    e.target.style.background='hsl(172, 67%, 45%)'
}
fTeen.onclick = function(e){
    takeTip(15)
    changeBtn()
    clearBg(five,fTy,ten,tFive)
    e.target.style.background='hsl(172, 67%, 45%)'
}
tFive.onclick = function(e){
    takeTip(25)
    changeBtn();
    clearBg(five,fTeen,ten,fTy)
    e.target.style.background='hsl(172, 67%, 45%)'
}
fTy.onclick = function(e){
    takeTip(50)
    changeBtn();
    clearBg(five,fTeen,ten,tFive)
    e.target.style.background='hsl(172, 67%, 45%)';
    
    
}
// change button color onclick;

//btn actions

function changeBtn(){
    button.style.background='hsl(172, 67%, 45%)'
}

function clearBg(elem1,elem2,elem3,elem4){
    elem1.style.background='hsl(183, 100%, 15%)';
    elem2.style.background='hsl(183, 100%, 15%)';
    elem3.style.background='hsl(183, 100%, 15%)';
    elem4.style.background='hsl(183, 100%, 15%)';
}

customTip.onchange = changeBtn;
// calculate ths tip

function calculateTip(){
    
    var amount = bill.value;
    amount = Number(amount);
    var tipPercent = customTip.value;
    var people = numberOfPeople.value;
    var tipAmoun = null;
    // fomula
    var tT = amount / 100
    tT *= tipPercent;
    var result = tT + amount;
    result = result/people;
    result = parseFloat(result).toFixed(2);
    //display amount
    totalAmount.innerHTML=result;
    tipAmount.innerHTML= parseFloat(tT).toFixed(2);
    
}
button.onclick = calculateTip;
setInterval(calculateTip,1000)