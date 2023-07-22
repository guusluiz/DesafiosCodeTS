import PromptSync from "prompt-sync";
const prompt = PromptSync();
export function exercicioTabuadaAte10() {
    let numeroEscolhido:number = parseInt(prompt("Escolha um número: "))

    for (let contador:number = 1; contador <= 10; contador++) {
        let resultado:number = contador * numeroEscolhido
        console.log(numeroEscolhido + " x " + contador + " = " + resultado);
    }
}
