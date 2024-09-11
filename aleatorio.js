const nomes = ["Ana", "Arthur", "Sota", "Leonardo", "Olivia", "Matteo", "Silva"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)