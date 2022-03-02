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


const comida1 = "pipoca";
const tempoPipoca = 31;

tempoPipoca >= 10 && tempoPipoca <= 19
? console.log("Prato pronto")
: tempoPipoca <= 9
? console.log("Tempo insuficiente")
: tempoPipoca >= 20 && tempoPipoca <=29
? console.log("Seu prato queimou")
: tempoPipoca >= 30
? console.log("Kaaabum")
: console.log("Prato pronto, bom apetite!!!")

const comida2 = "macarrao";
const tempoMacarrao = 23;

tempoMacarrao >= 8 && tempoMacarrao <= 15
? console.log("Prato pronto")
: tempoMacarrao <= 8
? console.log("Tempo insuficiente")
: tempoMacarrao >= 16 && tempoMacarrao<= 23
? console.log("Seu prato queimou")
: tempoMacarrao >= 24
? console.log("Kaaabum")
: console.log("Prato pronto, bom apetite")


const comida3 = "carne";
const tempoCarne = 14;

tempoCarne >= 15 && tempoCarne <= 29
? console.log("Prato pronto")
: tempoCarne <= 15
? console.log("Tempo insuficiente")
: tempoCarne >= 30 && tempoCarne <= 44
? console.log("Seu prato queimou")
: tempoCarne >= 45
? console.log("Kaaabum")
: console.log("Prato pronto, bom apetite")

const comida4 = "feijao";
const tempoFeijao = 12;

tempoFeijao >= 12 && tempoFeijao <= 23
? console.log("Prato pronto")
: tempoFeijao <= 12
? console.log("Tempo insuficiente")
: tempoFeijao >= 24 && tempoFeijao <= 35
? console.log("Seu prato queimou")
: tempoFeijao >= 36
? console.log("Kaaabum")
: console.log("Prato pronto, bom apetite")

const comida5 = "brigadeiro"
const tempoBrigadeiro = 8;

tempoBrigadeiro >= 8 && tempoBrigadeiro <= 15
? console.log("Prato pronto")
: tempoBrigadeiro <= 7
? console.log("Tempo insuficiente")
: tempoBrigadeiro >= 16 && tempoBrigadeiro <= 23
? console.log("Seu prato queimou")
: tempoBrigadeiro >= 24
? console.log("Kaaabum")
: console.log("Prato pronto, bom apetite")


