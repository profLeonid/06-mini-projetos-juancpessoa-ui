'use strict'
 


function calcularDesconto(){

const desconto = document.getElementById('desconto')
const preco = document.getElementById('preco')

if(preco.value === '' || desconto.value === ''){
    alert('Insira valor valido')
}else{
    calculoDesconto(preco.value , desconto.value)
}
}
 
function calculoDesconto(preco, desconto){

    ((preco*desconto)/100)
    console.log('oi')
}

