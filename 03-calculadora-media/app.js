'use strict'

function calcularMedia(nota1, nota2, nota3){
    return ((nota1 + nota2 + nota3) / 3).toFixed(1)
}
function classificarMedia(media){
    if(media >= 7){
        return { texto: "Aprovado" , classe: "aprovado"}
    } else if(media >= 5){
        return { texto: "Recuperação" , classe:"recuperação"}
    } else {
        return { texto: "Reprovado" , classe:"reprovado"}
    }
}



function exibirMedia(){
    const nota1 = Number(document.getElementById('nota1').value)
    const nota2 = Number(document.getElementById('nota2').value)
    const nota3 = Number(document.getElementById('nota3').value)
    const resultado = document.getElementById('resultado')

    const valorCalculo = calcularMedia(nota1,nota2,nota3)
    const situacao = classificarMedia(valorCalculo)

    resultado.textContent= `Nota: ${valorCalculo} Situação: ${situacao.texto}`
    resultado.classList.remove('aprovado','recuperação','reprovado')
    resultado.classList.add(situacao.classe)
}
