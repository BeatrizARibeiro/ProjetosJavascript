var resp = document.getElementById('numpes')
var resa = document.getElementById('numalt')
var rangepeso = document.getElementById('peso')
var rangealtura = document.getElementById('altura')
var res = document.getElementById('res')


resp.textContent = rangepeso.value;

rangepeso.oninput = function(){
    resp.textContent = this.value;
}

resa.textContent = rangealtura.value;

rangealtura.oninput = function(){
    resa.textContent = this.value;
}

function calcular(){
    res.innerHTML = ""
    var imc
    imc = rangepeso.value / ((rangealtura.value * 0.01) ** 2)

    res.innerHTML = `Seu IMC: ${imc.toFixed(2)} <br><br>`
    if(imc < 18.5){
        res.innerHTML += `Você está abaixo do peso <br><br>`
        res.innerHTML += `&#128532; <br><br>`
    }
    else if(imc < 24.9){
        res.innerHTML += `Você está no peso ideal <br><br>`
        res.innerHTML += `&#128526; <br><br>`
    }
    else if(imc < 29.9){
        res.innerHTML += `Você está acima do peso <br><br>`
        res.innerHTML += `&#128532; <br><br>`
    }
    else if(imc < 34.9){
        res.innerHTML += `Você está com obesidade grau I <br><br>`
        res.innerHTML += `&#128551; <br><br>`
    }
    else if(imc < 39.9){
        res.innerHTML += `Você está com obesidade grau II <br><br>`
        res.innerHTML += `&#128551; <br><br>`
    }
    else {
        res.innerHTML += `Você está com obesidade grau III <br><br>`
        res.innerHTML += `&#128561; <br><br>`
    }



}


