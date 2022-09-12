function setCookie(name, value){
    if(name != ""&& value != "" ){
        var today=new Date();
        var expiry=new Date(today.getTime()+30*24*3600*1000);
        var expired=new Date(today.getTime()-24*3600*1000);
        
        document.cookie=name+"="+escape(value)+";path=/; expires="+expiry.toGMTString();
        return true;
    }
    else{
        var error = new Error("cookie data was not in the correct format");
        throw error;
    }
}

function deleteCookie(key){
    var cookieList = allCookies();
    if(cookieList[key]){
        var exDate = new Date();
        exDate.setDate(exDate.getDate()-1);
        document.cookie = key+"=;expires="+exDate.toUTCString();
    }
    else{
        var error = new Error("Key not exists")
        throw error;
    }
}

function allCookies(){
    if(document.cookie != ''){
        var result = {};
        var arr = document.cookie.split("; ");
        for(var item of arr){
            var kv = item.split("=");//username=iti
            //kv = ["username","iti"]
            result[kv[0]]=kv[1];
        }
        return result;
    }
    else{
        var error = new Error("cookie is empty");
        throw error;
    }
}

function getCookie(key){
    var cookieList = allCookies();
    if(cookieList[key]){
        return cookieList[key];
    }
    else{
        var error = new Error("Key not exists")
        throw error;
    }
}

export {setCookie, deleteCookie, getCookie}