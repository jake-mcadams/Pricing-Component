// selecting element IDs to store in varaibles

let basicSelected = false;
let professionalSelected = false;
let masterSelected = false;
let priceChanged = false;
const priceToggle = document.getElementById('check');
const basicButton = document.getElementById('learn-one');
const professionalButton = document.getElementById('learn-two');
const masterButton = document.getElementById('learn-three');
const basicCard = document.getElementById('card-one');
const professionalCard = document.getElementById('card-two');
const masterCard = document.getElementById('card-three');
const annualAmount = document.getElementById('annual1');
const monthlyAmount = document.getElementById('monthly1');
const annualAmount2 = document.getElementById('annual2');
const monthlyAmount2 = document.getElementById('monthly2');
const annualAmount3 = document.getElementById('annual3');
const monthlyAmount3 = document.getElementById('monthly3');
const amount = document.getElementById('amount-value');

basicButton.addEventListener('click', ()=> {
    if(basicSelected == false){
        basicSelected = true;
        basicCard.classList.toggle('card');
        basicCard.classList.toggle('active');
        basicButton.classList.toggle('learn-more');
        basicButton.classList.toggle('learn-more-clicked')
    }else{
        basicSelected = false;
        basicCard.classList.toggle('card');
        basicCard.classList.toggle('active');
        basicButton.classList.toggle('learn-more');
        basicButton.classList.toggle('learn-more-clicked')
    }
})


professionalButton.addEventListener('click', ()=> {
    if(professionalSelected == false){
        professionalSelected = true;
        professionalCard.classList.toggle('card');
        professionalCard.classList.toggle('active');
        professionalButton.classList.toggle('learn-more');
        professionalButton.classList.toggle('learn-more-clicked')
    }else{
        professionalSelected = false;
        professionalCard.classList.toggle('card');
        professionalCard.classList.toggle('active');
        professionalButton.classList.toggle('learn-more');
        professionalButton.classList.toggle('learn-more-clicked')
    }
})

masterButton.addEventListener('click', ()=> {
    if(masterSelected == false){
        masterSelected = true;
        masterCard.classList.toggle('card');
        masterCard.classList.toggle('active');
        masterButton.classList.toggle('learn-more');
        masterButton.classList.toggle('learn-more-clicked')
    }else{
        masterSelected = false;
        masterCard.classList.toggle('card');
        masterCard.classList.toggle('active');
        masterButton.classList.toggle('learn-more');
        masterButton.classList.toggle('learn-more-clicked')
    }
})

priceToggle.addEventListener('click', ()=>{
    basicChange();
    proffessionalChange();
    masterChange();
})


// change price functions

const basicChange = ()=>{
    if(priceToggle.checked == true){
        annualAmount.style.display="initial";
        monthlyAmount.style.display="none";
    }else{
        annualAmount.style.display="none";
        monthlyAmount.style.display="initial";
    }
}

const proffessionalChange = ()=>{
    if(priceToggle.checked == true){
        annualAmount2.style.display="initial";
        monthlyAmount2.style.display="none";
    }else{
        annualAmount2.style.display="none";
        monthlyAmount2.style.display="initial";
    }
}

const masterChange = ()=>{
    if(priceToggle.checked == true){
        annualAmount3.style.display="initial";
        monthlyAmount3.style.display="none";
    }else{
        annualAmount3.style.display="none";
        monthlyAmount3.style.display="initial";
    }
}