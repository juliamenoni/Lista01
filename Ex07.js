// Pedir o valor inicial, final e incremento

//Usar módulo prompt-sync
const prompt = require ('prompt-sync') ();
incial = prompt ("Digite o valor inicial: ");
final = prompt ("Digite o valor final: ");
incremento = prompt("Digite o incremento: ");

console.log(`Valor inicial : ${incial} Valor final: ${final} incremento ${incremento}`);
for(i = inicial; i >= final; i = i + incremento){
    console.log("Numero: ", i);
}
console.log ("Fim");