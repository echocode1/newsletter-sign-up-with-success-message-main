let activeSection = document.querySelector('.active__section');
let desktopProfile = document.querySelector('.desktop__profile');
let newsletterSuccess = document.querySelector('.newsletter__success');
let mailBox = document.getElementById('bold')
const emailInput = document.getElementById('email-input');

const response = document.querySelector('#error-response');
const width = window.innerWidth;

function subscription(){
    if(/^[a-z]+[0-9]+@[company.com]+/.test(emailInput.value)){
        desktopProfile.style.display = 'none';
        newsletterSuccess.style.display = "flex";
        activeSection.style.display = 'none';
        mailBox.textContent = `${emailInput.value}`
        emailInput.value = ''
    }
    else{
        response.textContent = 'Valid email required';
        emailInput.value = ''
        emailInput.style.backgroundColor = 'hsl(4, 88%, 90%)';
        emailInput.style.border = '1px solid hsl(4, 100%, 67%)';
    }
}

function dismiss__successMessage(){
    if(width < 576 ){
        newsletterSuccess.style.display = "none",
        activeSection.style.display = 'block'
    }
    else{
        newsletterSuccess.style.display = "none",
        activeSection.style.display = 'block',
        desktopProfile.style.display = "block"
    }
}