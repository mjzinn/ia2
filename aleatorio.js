const nomes = ["Lunara", "Arthur", "Sota", "Leonardo", "Olivia", "Matteo", "Martín"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)