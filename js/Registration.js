//import module
import {NameValidation, EmailValidation, PhoneValidation, PasswordValidation} from './Validate.js'
import {setCookie} from './Cookie.js'

//can't get text boxes values here

document.getElementById("FullName").onblur=function(){
    try{
        NameValidation(this.value);
        //if editing error input then we need to remove the error
        this.classList.remove("is-invalid");
        this.nextElementSibling.innerText = '';
    }
    catch(e){
        //console.log(this.nextElementSibling)
        this.classList.add("is-invalid");
        this.nextElementSibling.innerText = e.message;
    }
}

document.getElementById("Email").onblur=function(){
    try{
        EmailValidation(this.value);
        //if editing error input then we need to remove the error
        this.classList.remove("is-invalid");
        this.nextElementSibling.innerText = '';
    }
    catch(e){
        //console.log(this.nextElementSibling)
        this.classList.add("is-invalid");
        this.nextElementSibling.innerText = e.message;
    }
}

document.getElementById("Password").onblur=function(){
    try{
        PasswordValidation(this.value);
        //if editing error input then we need to remove the error
        this.classList.remove("is-invalid");
        this.nextElementSibling.innerText = '';
    }
    catch(e){
        //console.log(this.nextElementSibling)
        this.classList.add("is-invalid");
        this.nextElementSibling.innerText = e.message;
    }
}

document.getElementById("Phone").onblur=function(){
    try{
        PhoneValidation(this.value);
        //if editing error input then we need to remove the error
        this.classList.remove("is-invalid");
        this.nextElementSibling.innerText = '';
    }
    catch(e){
        //console.log(this.nextElementSibling)
        this.classList.add("is-invalid");
        this.nextElementSibling.innerText = e.message;
    }
}

document.forms[0].onsubmit = function(eve){
    var name = document.getElementById("FullName").value;
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;
    var phone = document.getElementById("Phone").value;

    try{
        NameValidation(name);
        EmailValidation(email);
        PasswordValidation(password);
        PhoneValidation(phone);

        //create cookie with user data
        setCookie("username",name);
    }
    catch(e){
        eve.preventDefault();
        alert(e.message);
    }
}