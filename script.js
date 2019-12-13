var char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var num = '0123456789';
var sym = "!@#$%^&*+-_";

var char = document.getElementById("char");
var numBox = document.getElementById("numBox");
var symBox = document.getElementById("symBox");
var submit = document.getElementById("submit");
var yourPw = document.getElementById("password");
var generatorButton = document.getElementById("generatorButton");
                      

function password_generator(){
    
    var length = prompt("How long do you want your password?");
    if (length < 8) {
        alert("not enough characters")
    }
    else if (length > 128) {
        alert("too many characters")
    }

var wantsSpecialChar = confirm("Do you want special characters?")
var wantsCharnum = confirm("Do you want a number?");  
}


generatorButton.addEventListener("click", password_generator);
    function getRndInteger(min, max) {
        return Math.floor(math.random() * (max -min)) +min;
    }
