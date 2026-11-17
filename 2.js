// EXERCÍCIO 1 //

let valores = [];

for (let i = 0; i < 10; i++) {
    valores[i] = parseInt(prompt("Digite um número:"));
}

let saida = "Números cadastrados:\n";

for (let i = 0; i < 10; i++) {
    saida += valores[i] + "\n";
}

alert(saida);


// EXERCÍCIO 2 //

let numeros = [];
let acumulador = 0;

for (let i = 0; i < 10; i++) {
    numeros[i] = parseInt(prompt("Digite um número:"));
    acumulador += numeros[i];
}

alert("Soma total: " + acumulador);


// EXERCÍCIO 3 //

let boletim = [];
let somaNotas = 0;

for (let i = 0; i < 8; i++) {
    boletim[i] = parseFloat(prompt("Digite uma nota:"));
    somaNotas += boletim[i];
}

let mediaFinal = somaNotas / 8;

alert("Média: " + mediaFinal.toFixed(2));


// EXERCÍCIO 4 //

let lista = [];

for (let i = 0; i < 10; i++) {
    lista[i] = parseInt(prompt("Digite um número:"));
}

let valorMaximo = lista[0];
let valorMinimo = lista[0];

for (let i = 1; i < 10; i++) {
    if (lista[i] > valorMaximo) {
        valorMaximo = lista[i];
    }

    if (lista[i] < valorMinimo) {
        valorMinimo = lista[i];
    }
}

alert("Maior: " + valorMaximo + "\nMenor: " + valorMinimo);


// EXERCÍCIO 5 //

let valoresNumericos = [];
let qtdPares = 0;
let qtdImpares = 0;

for (let i = 0; i < 10; i++) {
    valoresNumericos[i] = parseInt(prompt("Digite um número:"));

    if (valoresNumericos[i] % 2 == 0) {
        qtdPares++;
    } else {
        qtdImpares++;
    }
}

alert("Pares: " + qtdPares + "\nÍmpares: " + qtdImpares);


// EXERCÍCIO 6 //

let dados = [];
let localizado = false;

for (let i = 0; i < 10; i++) {
    dados[i] = parseInt(prompt("Digite um número:"));
}

let numeroBusca = parseInt(prompt("Qual número deseja procurar?"));

for (let i = 0; i < 10; i++) {
    if (dados[i] == numeroBusca) {
        localizado = true;
    }
}

if (localizado) {
    alert("Número encontrado!");
} else {
    alert("Número não encontrado!");
}


// EXERCÍCIO 7 //

let sequencia = [];

for (let i = 0; i < 10; i++) {
    sequencia[i] = parseInt(prompt("Digite um número:"));
}

let texto = "Ordem inversa:\n";

for (let i = 9; i >= 0; i--) {
    texto += sequencia[i] + "\n";
}

alert(texto);


// EXERCÍCIO 8 //

let numerosDigitados = [];
let qtdPositivos = 0;
let qtdNegativos = 0;
let qtdZeros = 0;

for (let i = 0; i < 10; i++) {
    numerosDigitados[i] = parseInt(prompt("Digite um número:"));

    if (numerosDigitados[i] > 0) {
        qtdPositivos++;
    } else if (numerosDigitados[i] < 0) {
        qtdNegativos++;
    } else {
        qtdZeros++;
    }
}

alert(
    "Positivos: " + qtdPositivos +
    "\nNegativos: " + qtdNegativos +
    "\nZeros: " + qtdZeros
);


// EXERCÍCIO 9 //

let primeiroGrupo = [];
let segundoGrupo = [];
let resultado = [];

for (let i = 0; i < 5; i++) {
    primeiroGrupo[i] = parseInt(prompt("Primeiro vetor - digite um número:"));
}

for (let i = 0; i < 5; i++) {
    segundoGrupo[i] = parseInt(prompt("Segundo vetor - digite um número:"));
}

let saidaFinal = "Vetor 1 | Vetor 2 | Soma\n";

for (let i = 0; i < 5; i++) {
    resultado[i] = primeiroGrupo[i] + segundoGrupo[i];

    saidaFinal += primeiroGrupo[i] + " | " +
        segundoGrupo[i] + " | " + resultado[i] + "\n";
}

alert(saidaFinal);


// EXERCÍCIO 10 //

let notasAlunos = [];
let somaTurma = 0;
let qtdAprovados = 0;
let qtdReprovados = 0;

for (let i = 0; i < 10; i++) {
    notasAlunos[i] = parseFloat(prompt("Digite a nota do aluno:"));

    somaTurma += notasAlunos[i];

    if (notasAlunos[i] >= 6) {
        qtdAprovados++;
    } else {
        qtdReprovados++;
    }
}

let mediaTurma = somaTurma / 10;
let relatorio = "Notas da turma:\n";

for (let i = 0; i < 10; i++) {
    relatorio += "Aluno " + (i + 1) + ": " + notasAlunos[i] + "\n";
}

relatorio += "\nMédia: " + mediaTurma.toFixed(2);
relatorio += "\nAprovados: " + qtdAprovados;
relatorio += "\nReprovados: " + qtdReprovados;

alert(relatorio);


// EXERCÍCIO 11 //

let numerosOrdenados = [];

for (let i = 0; i < 10; i++) {
    numerosOrdenados[i] = parseInt(prompt("Digite um número:"));
}

for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9 - i; j++) {

        if (numerosOrdenados[j] > numerosOrdenados[j + 1]) {
            let temporario = numerosOrdenados[j];

            numerosOrdenados[j] = numerosOrdenados[j + 1];
            numerosOrdenados[j + 1] = temporario;
        }
    }
}

let ordemFinal = "Números em ordem crescente:\n";

for (let i = 0; i < 10; i++) {
    ordemFinal += numerosOrdenados[i] + "\n";
}

alert(ordemFinal);
