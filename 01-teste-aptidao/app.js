'use strict'

function removerClasses(){
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('apto','nao-apto')
}

function avaliar(){
    const tempo = document.getElementById('tempo')
    const resultado = document.getElementById('resultado') // CRIA A VARIAVEL E ATRIBUI A CLASS DO HTML
    
    removerClasses()

    if(tempo.value === ""){
        alert(' Digite Valor Valido') //ALERTA NA TELA 
    }
    else if(tempo.value <= 14 ){
        resultado.textContent = 'Apto'
        resultado.classList.add('apto') // DICIONA A CLASS
    }else{
        resultado.textContent = 'Não Apto'
        resultado.classList.add('nao-apto') // DICIONA A CLASS (clss)
        }
}