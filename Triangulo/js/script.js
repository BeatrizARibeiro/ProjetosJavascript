var resa = document.getElementById('numa')
var resb = document.getElementById('numb')
var resc = document.getElementById('numc')
var a = document.getElementById('slidera')
var b = document.getElementById('sliderb')
var c = document.getElementById('sliderc')
var res = document.getElementById('res')


resa.textContent = a.value;

a.oninput = function(){
    resa.textContent = this.value;
}

resb.textContent = b.value;

b.oninput = function(){
    resb.textContent = this.value;
}

resc.textContent = c.value;

c.oninput = function(){
    resc.textContent = this.value;
}



function verificar(){
    var na = parseFloat(a.value)
    var nb = parseFloat(b.value)
    var nc = parseFloat(c.value)

    res.innerHTML = ""

    if(na < nb + nc && nb < na + nc && nc < na + nb)
    {
        res.innerHTML = `Formam um Triângulo<br><br>`
        
        if(na == nb && nb == nc)
        {
            res.innerHTML += `Equilátero<br>`
        }
        else if(na != nb && nb != nc && na != nc)
        {
            res.innerHTML += `Escaleno<br>`
        }
        else
        {
            res.innerHTML += `Isóceles<br>`
        }
    }
    else
    {
        res.innerHTML = `Não Formam um Triângulo<br>`
    }
}


