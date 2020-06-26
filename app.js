function getnumber(num){
    var result = document.getElementById("result");
    result.value += num;
}

function resultsqrt(){
    var result = document.getElementById("result");
    result.value = Math.sqrt(result.value);
}
function clearresult(){
    var result = document.getElementById("result");
    result.value = ""
}
function getresult(){
    var result = document.getElementById("result");
    result.value = eval(result.value)
}

function sin(){
    var result = document.getElementById("result");
    result.value = Math.sin(result.value);
}
function cos(){
    var result = document.getElementById("result");
    result.value = Math.cos(result.value);
}

function tan(){
    var result = document.getElementById("result");
    result.value = Math.tan(result.value);
}

function log(){
    var result = document.getElementById("result");
    result.value = Math.log(result.value);
}