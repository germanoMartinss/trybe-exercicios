const numerosSorteados = [];
const meuJogo =  [5, 13, 24, 35, 48, 57];



for (let repeticao = 0; repeticao < 6; repeticao += 1); {
    const numeroAleatorio = Math.floor(Math.random() * 60);
   if (!numerosSorteados.includes(numeroAleatorio)) { 
    numerosSorteados.push(numeroAleatorio);
    } else {
        repeticao -= 1;
    }
}
console.log(numeroAleatorio);