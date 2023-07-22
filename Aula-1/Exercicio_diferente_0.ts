import PromptSync from "prompt-sync";
const prompt = PromptSync();
export function exercicioDiferenteDe0() {
    let numero: number;

    do {
        numero = parseInt(prompt("Qual o número? "))
    }while (numero != 0)
} 