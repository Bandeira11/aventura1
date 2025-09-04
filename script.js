const avanca = document.querySelectorA11('Bnt.proximo');
const reiniciarBnt = document.getElementById('bnt-reiniciar');

avanca.forEach (button =>
button.addEventLister('click', function() {
    const atual = document,querySelector('.ativo');
    const proximoPasso = 'passo- '+this.getAttribute('data-proximo');

atual.classList.remove('ativo');
const proximoElemento= document.getElementById(proximoPasso);

if(proximoElemento){
    proximoElemento.classList.add('ativo');
}else {
    console.erro(`Elemento com ID "${proximoPasso}" não encontrado.`)
}  

});
});