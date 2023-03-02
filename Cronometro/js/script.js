var rel = document.getElementById('relogio')
var hor = 0
var min = 0
var seg = 0
var interval

function iniciar(){
    cont()
    interval = setInterval(cont,1000)
}

function pausar(){
    clearInterval(interval)
}

function zerar(){
    clearInterval(interval)
    hor = 0
    min = 0
    seg = 0
    rel.innerHTML = '00:00:00'
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