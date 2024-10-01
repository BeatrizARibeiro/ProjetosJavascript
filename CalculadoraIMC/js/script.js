var peso = document.getElementById('peso')
var altura = document.getElementById('altura')
var res = document.getElementById('res')


function calcular(){
    var imc
    var check = 0;

    var pesoConvertido = parseFloat(peso.value.replace(',', '.'))

    imc = pesoConvertido / ((altura.value * 0.01) ** 2)

    res.innerHTML = `<div id="linha"></div>`

    if(!isNaN(parseFloat(imc)) && isFinite(imc)){
        res.innerHTML += `Seu IMC ficou no valor de ${imc.toFixed(2).replace('.', ',')} <br><br>`

        if(imc < 18.5){
            res.innerHTML += `Você está <span class="vermelho">abaixo do peso </span><br>`
        }
    
        else if(imc < 24.9){
            res.innerHTML += `Você está <span class="verde">no peso ideal </span><br>`
            check = 1;
        }
    
        else if(imc < 29.9){
            res.innerHTML += `Você está <span class="vermelho">acima do peso </span><br>`
        }
    
        else if(imc < 34.9){
            res.innerHTML += `Você está com <span class="vermelho">obesidade grau I </span><br>`
        }
    
        else if(imc < 39.9){
            res.innerHTML += `Você está com <span class="vermelho">obesidade grau II </span><br>`
        }
    
        else {
            res.innerHTML += `Você está com <span class="vermelho">obesidade grau III </span><br>`
        }
    
        if(check > 0){
            res.innerHTML += `<span class="material-symbols-outlined icone verde">
                check_circle
                </span>`
        }
    
        else{
            res.innerHTML += `<span class="material-symbols-outlined icone vermelho">
                cancel
            </span>`
        }
    }

    else{
        res.innerHTML += `<span class="vermelho">Adicione um valor válido </span><br>
        <span class="material-symbols-outlined icone vermelho">
                cancel
            </span>`
    }

}