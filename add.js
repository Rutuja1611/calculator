function Addition() {
    var num1 = document.querySelector("#num1").value
    var num2 = document.querySelector("#num2").value
    var num3 = parseInt (num1) + parseInt(num2)
    document.querySelector("#Result").innerHTML = num3
}

function Substract(){
    var num1 = document.querySelector("#num1").value
    var num2 = document.querySelector("#num2").value
    var num3 = parseInt (num1) - parseInt(num2)
    document.querySelector("#Result").innerHTML = num3
}

function Multiply(){
    var num1 = document.querySelector("#num1").value
    var num2 = document.querySelector("#num2").value
    var num3 = parseInt (num1) * parseInt(num2)
    document.querySelector("#Result").innerHTML = num3
}

function Div(){
    var num1 = document.querySelector("#num1").value
    var num2 = document.querySelector("#num2").value
    var num3 = parseInt (num1) / parseInt(num2)
    document.querySelector("#Result").innerHTML = num3
}
function Mod(){
    var num1 = document.querySelector("#num1").value
    var num2 = document.querySelector("#num2").value
    var num3 = parseInt (num1) % parseInt(num2)
    document.querySelector("#Result").innerHTML = num3
}


