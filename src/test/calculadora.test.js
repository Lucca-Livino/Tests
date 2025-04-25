import {describe, expect, test} from '@jest/globals';
import {somar, subtrair, dividir, multiplicar} from '../index.js'


//Cenário de Teste
describe("Deve retornar asserções com valores inteiros positivos", ()=>{
    
    //caso de teste
    test("Deve retornar a soma de 1 + 1", () => {
        const valorEsperado = 2;
        const valorRetornado = somar(1,1)
        expect(valorRetornado).toBe(valorEsperado)
    })
})