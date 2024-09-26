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
        res.innerHTML = `<div id="linha"></div> Formam um triângulo `
        
        if(na == nb && nb == nc)
        {
            res.innerHTML += `<span>equilátero</span><br>`
        }
        else if(na != nb && nb != nc && na != nc)
        {
            res.innerHTML += `<span>escaleno</span><br>`
        }
        else
        {
            res.innerHTML += `<span>isóceles</span><br>`
        }

        res.innerHTML += `
            <span class="material-symbols-outlined icone">
                check_circle
            </span>`
    }
    else
    {
        res.innerHTML = `Não formam um triângulo<br>
            <span class="material-symbols-outlined icone">
                cancel
            </span>`
    }
}


