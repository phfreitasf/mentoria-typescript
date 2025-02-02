console.log('Arquivo de testes. Pode mexer nele como quiser.')

// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

if (campoSaldo){
    campoSaldo.innerHTML = '0'
}

function somarAoSaldo(soma: number) {
    if(campoSaldo) campoSaldo.innerHTML = (soma + Number(campoSaldo.innerHTML)).toString() ;
}

function limparSaldo() {
    if (campoSaldo) campoSaldo.innerHTML = '0';
    soma.value = ''
}

botaoAtualizar?.addEventListener('click', function () {
    if(soma) somarAoSaldo(Number(soma.value));
});

botaoLimpar?.addEventListener('click', function () {
    limparSaldo();
});

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */