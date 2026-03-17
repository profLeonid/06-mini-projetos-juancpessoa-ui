'use strict'
 

// const cadastrar = document.getElementById ('click')

// function calcular(){
//     const desconto = document.getElementById('desconto')
//     const preco = document.getElementById('preco')
//     const resultado = document.getElementById('resultado')

//     resultado =  ((preco*desconto)/100)

// }
// click.addEventListener('click', calcularDesconto)


function calcularValorEconomizado(preco,desconto) {
    return preco*desconto/100
}
function calcularPreçoFinal(preco,valorEconomizado){
    return preco - valorEconomizado
}

function escolherCor(desconto){
    if(desconto <= 5){
        return 'desconto1'
    }else if(desconto <= 10){
        return 'desconto2'
    }else{
        return 'desconto3'
}
}

function handleClick(){
    const preco  = Number(document.getElementById('preco').value)
    const desconto = Number(document.getElementById('desconto').value)
    const resultado = (document.getElementById('resultado'))

    const valorEconomizado = calcularValorEconomizado(preco,desconto)
    const precoFinal= calcularPreçoFinal(preco,valorEconomizado)

    const cor = escolherCor(desconto)
    
    resultado.textContent = `${valorEconomizado} - ${precoFinal}`
    resultado.classList.remove('desconto1','desconto2','desconto3')
    resultado.classList.add(cor) 
}