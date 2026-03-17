'use strict'

function calcularImc(peso, altura) {
    return (peso / (altura * altura))*10000
}
function classificarResultado(valor){
    if(valor < 18.5){
        return {texto: "Abaixo do peso", classe: "abaixoPeso"}
    } else if(valor < 25){
        return {texto: "Peso normal", classe: "pesoNormal"}
    } else if(valor < 30){
        return {texto:"Sobre peso",classe: "sobrePeso"}
    } else if(valor < 35){
        return {texto:"Obesidade grau I" ,classe: "ObesidadeGrauI"}
    } else if(valor < 40){
        return {texto:"Obesidade grau II" ,classe: "ObesidadeGrauII"}
    } else {
        return {texto:"Obesidade grau III",classe: "ObesidadeGrauIII"}
    }
}

function exibirIMC(){
    const nome = document.getElementById('nome').value
    const peso = Number(document.getElementById('peso').value)
    const altura = Number(document.getElementById('altura').value)
    const resultado= document.getElementById('resultado')

    const valorImc = calcularImc(peso,altura).toFixed(1)
    const classificarImc = classificarResultado(valorImc)

    resultado.textContent= `${nome} seu Imc: ${valorImc} e sua classificação : ${classificarImc.texto}`
    resultado.classList.remove('abaixoPeso','pesoNormal','sobrePeso',"ObesidadeGrauI","ObesidadeGrauII","ObesidadeGrauIII")
    resultado.classList.add(classificarImc.classe)
}