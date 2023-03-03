var rel = document.getElementById('relogio')
var btni = document.getElementById('iniciar')
var btnp = document.getElementById('pausar')
var btnz = document.getElementById('zerar')
var hor = 0
var min = 0
var seg = 0
var interval

btnp.disabled = true;
btnz.disabled = true;

function iniciar(){
    cont()
    interval = setInterval(cont,1000)
    btni.disabled = true;
    btnp.disabled = false;
    btnz.disabled = false;
}

function pausar(){
    clearInterval(interval)
    btni.disabled = false;
    btnz.disabled = false;
}

function zerar(){
    clearInterval(interval)
    hor = 0
    min = 0
    seg = 0
    rel.innerHTML = '00:00:00'
    btni.disabled = false;
    btnp.disabled = false;
    btnp.disabled = false;
}

function addzero(num){
    if(num<10){
        return('0' + num)
    }
    else{
        return(num)
    }
}

function cont(){
    seg++
    if(seg == 60){
        min++
        seg = 0
    }
    if(min == 60){
        hor++
        min = 0
    }
    rel.innerHTML = addzero(hor) + ':' + addzero(min) + ':' + addzero(seg)
}