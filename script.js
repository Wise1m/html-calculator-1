function display(val){
    document.getElementById('result').value += val;

    return val
}

function solve(){
    let x = document.getElementById('result').value;
    let y = eval(x);
    document.getElementById('result').value = y

    return y
}

function clearScreen(){
    document.getElementById('result').value = ''
}

function sqr(){
    let x = document.getElementById('result').value;
    let y = Math.sqrt(x);
    document.getElementById('result').value = y

    return y
}

function sin(){
    let x = document.getElementById('result').value;
    let y = Math.sin(x);
    document.getElementById('result').value = y

    return y
}

function cos(){
    let x = document.getElementById('result').value;
    let y = Math.cos(x);
    document.getElementById('result').value = y

    return y
}

function tan(){
    let x = document.getElementById('result').value;
    let y = Math.tan(x);
    document.getElementById('result').value = y

    return y
}

function log(){
    let x = document.getElementById('result').value;
    let y = Math.log(x);
    document.getElementById('result').value = y

    return y
}