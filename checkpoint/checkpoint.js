/*Projeto de criação de um menu para um microondas super veloz, onde terá 5 opções de comida com seus respectivos tempos pré definidos   
1 - Pipoca – 10 segundos (padrão);
2 - Macarrão – 8 segundos (padrão);
3 - Carne – 15 segundos (padrão);
4 - Feijão – 12 segundos (padrão);
5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".
*/


const comida = ["pipoca", "macarrao", "carne", "feijao", "brigadeiro"];

function microondas(codigoPrato, tempoPadrao) {
    let tempoPreparo = tempoPadrao;

    let tempoPronto
    let tempoQueimou
    let tempoKabum

    switch (parseInt(codigoPrato)) {
        case 0:
            tempoPronto = 10;
            tempoQueimou = 20;
            tempoKabum = 30;
            break;
        case 1:
            tempoPronto = 8;
            tempoQueimou = 16;
            tempoKabum = 24;
            break;
        case 2:
            tempoPronto = 15;
            tempoQueimou = 30;
            tempoKabum = 45;
            break;
        case 3:
            tempoPronto = 12;
            tempoQueimou = 24;
            tempoKabum = 36;
            break;
        case 4:
            tempoPronto = 8;
            tempoQueimou = 16;
            tempoKabum = 24;
            break;
        default:
            console.log("Digite um prato válido")
            break;
    }

    let mensagem;
    if (tempoPreparo < tempoPronto) mensagem = "Tempo insuficiente"
    if (tempoPreparo == tempoPronto) mensagem = "Prato pronto"
    if (tempoPreparo > tempoPronto && tempoPreparo < tempoQueimou) mensagem = "quase deu ruim"
    if (tempoPreparo == tempoQueimou) mensagem = "Prato queimou"
    if (tempoPreparo > tempoQueimou && tempoPreparo < tempoKabum) mensagem = "Você não sabe o tempo da comida?"
    if (tempoPreparo == tempoKabum) mensagem = "Kaabum"
    if (tempoPreparo > tempoKabum) mensagem = "Já era! Compre outro microondas!"


    console.log(mensagem)


}

microondas(3, 100);