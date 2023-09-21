const emailInput = document.getElementById('email-input');
const form = document.querySelector('.form-js');
const emailPattern = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
const errorIcon = document.querySelector('.error-js')
const singUp = document.querySelector('.container');
const thankYouCard = document.querySelector('.thank-you-card');
const dismissButton = document.querySelector('.dissmiss-js');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const email = emailInput.value;
    if(email.match(emailPattern)){
        errorIcon.style.display = "none";
        singUp.style.display = "none";
        thankYouCard.style.display ="block";
        return true;
    }else{
        errorIcon.style.display = "block";
        singUp.style.display = "flex";
        thankYouCard.style.display ="none";
        emailInput.style.borderColor = "hsl(4, 100%, 67%)";
        emailInput.style.color = "hsl(4, 100%, 67%)";
        return false;
    }
})

function resetColor(){
    if(emailInput.value !== '')
    {
        emailInput.style.color = "black";
        emailInput.style.borderColor = "hsl(231, 7%, 60%)";
    }
}
function dismissMessage(){
    if(thankYouCard.style.display ==="block"){
        thankYouCard.style.display ="none";
        singUp.style.display = "flex";
    }
}