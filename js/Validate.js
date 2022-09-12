//library
function NameValidation(name){
    var regex = new RegExp(/^[a-zA-Z\s]{3,}$/);
    if(regex.test(name))
        return true;
    else{
        var error = new Error("name was not in the correct format");
        throw error;
    }
}

function EmailValidation(email){
    var regex = new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/);
    if(regex.test(email))
        return true;
    else{
        var error = new Error("email was not in the correct format");
        throw error;
    }
}

function PhoneValidation(phone){
    var regex = new RegExp(/^(01)(0|1|2|5)[0-9]{8}$/);
    if(regex.test(phone))
        return true;
    else{
        var error = new Error("phone was not in the correct format");
        throw error;
    }
}

function PasswordValidation(password){
    var regex = new RegExp(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/);
    if(regex.test(password))
        return true;
    else{
        var error = new Error("password was not in the correct format");
        throw error;
    }
}

//js modules
export {NameValidation, EmailValidation, PhoneValidation, PasswordValidation};