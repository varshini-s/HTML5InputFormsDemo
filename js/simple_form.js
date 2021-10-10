
const EMAIL_PATTERN = RegExp("^[a-z0-9]+([+._-][a-z0-9]+){0,1}@[a-z0-9]+[.][a-z]{2,4}([.][a-z]{2,4}){0,1}$");
const NAME_PATTERN = RegExp('^[A-Z]{1}[a-z]{2,}$');
const PHONE_NUMBER_PATTERN = RegExp("^[0-9]{2}[ ][0-9]{10}$");
const PASSWORD_PATERN = RegExp("^(?=.*[0-9])(?=.*[A-Z])(?=.{8,}$)[0-9a-zA-Z]*[@#$%][0-9a-zA-Z]*$");

const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input', function () {
    if (NAME_PATTERN.test(text.value)) 
    {
        textError.textContent = "";
    }
    else 
    {
        textError.textContent = "Name is Incorrect";
    }
});

