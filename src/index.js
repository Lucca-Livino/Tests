

function somar(a , b){
    let resultado = a + b 
    console.log(`O resultado de ${a} + ${b} é: ${resultado}`)
    return resultado
}

function subtrair(a , b){
    let resultado = a - b 
    console.log(`O resultado de ${a} - ${b} é: ${resultado}`)
    return resultado
   
}

function dividir(a , b){
    if (b == 0){
        throw new Error("Divisor inválido")
    }else{
        let resultado = a / b 
        console.log(`O resultado de ${a} / ${b} é: ${resultado}`)
        return resultado
    }
}


function multiplicar(a , b){
    let resultado = a * b 
    console.log(`O resultado de ${a} * ${b} é:${resultado}`)
    return resultado

}

somar(1,2)

export {somar, subtrair, dividir, multiplicar}