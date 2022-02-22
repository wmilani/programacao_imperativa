// Calculadora Nível I

let somar = function(n1,n2){
    return n1+n2;
}

let subtrair = function(n1,n2){
    return n1-n2;
}

let multiplicar = function(n1,n2){
    return n1*n2
}

let dividir = function(n1,n2){
    // Verificar se n2 é == 0
    if(n2==0){
        //executar se for true
        return 'Não é possível dividir por 0, tente novamente'
    } else{
        return n1/n2
    }
}

console.log(somar(4,32));
console.log(subtrair(20,7));
console.log(multiplicar(49,5));
console.log(dividir(24,4));

// Calcualdora Nível II



console.log("----------Teste de operações/Calculador-------------");

//adicionar e subtrair
console.log(somar(4,32) + subtrair(20,7));



//Calculadora Nível III

function quadradoDoNumero(n1) {
    const quadrado = multiplicar(n1,n1);
    return quadrado;
}

console.log(quadradoDoNumero(15));

function mediaDeTresNumeros(n1, n2, n3) {
    const soma1 = somar(n1, n2);
    const soma2 = somar(soma1, n3);
    const media = dividir(soma2,3);
    return media;
}

console.log(mediaDeTresNumeros(1,2,3));


function calculaPorcentagem(valor, porcentagem) {
    const decimal = dividir(porcentagem, 100);
    const resultado = multiplicar(decimal, valor);
    return resultado;
}

console.log(calculaPorcentagem(450,15));
console.log(calculaPorcentagem(630, 120));


function geradorDePorcentagem(valorRelativo, valorBase) {
    const numerador = multiplicar(valorRelativo, 100);
    const resultado = dividir(numerador, valorBase);
    return resultado;
}

console.log(geradorDePorcentagem(3,300));
console.log(geradorDePorcentagem(100,100));