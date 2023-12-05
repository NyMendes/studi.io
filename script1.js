// Suponha que 'form' é o seu formulário de questionário
let form = document.querySelector('perguntas.html');

// Inicializa um objeto para contar as respostas
let contagem = {'A': 0, 'B': 0, 'C': 0, 'D': 0, 'E': 0, 'F': 0, 'G': 0};

// Percorre todos os botões de opção no formulário
let radios = form.querySelectorAll('input[type=radio]');
radios.forEach((radio) => {
    // Quando um botão de opção é selecionado, incrementa a contagem para esse valor
    radio.addEventListener('change', (event) => {
        if (event.target.checked) {
            contagem[event.target.value]++;
        }
    });
});

// Função para encontrar a resposta mais votada
function encontrarMaisVotada(contagem) {
    let maisVotada = Object.keys(contagem).reduce((a, b) => contagem[a] > contagem[b] ? a : b);
    return maisVotada;
}

// Função para redirecionar para a página correspondente à resposta mais votada
function redirecionar(maisVotada) {
    // Suponha que você tenha um mapeamento de respostas para URLs
    let urls = {
        'A': 'adm.html',
        'B': 'CME.html',
        'C': 'info.html',
        'D': 'juridico.html',
        'E': 'Marketing.html',
        'F': 'RH.html',
        'G': 'SdT.html'
        // Adicione aqui as URLs para 'C', 'D', 'E', 'F', 'G'
    };

    // Redireciona para a URL correspondente à resposta mais votada
    window.location.href = urls[maisVotada];
}

// Uso
let botaoResultado = document.querySelector('#btn')
botaoResultado.addEventListener('click', () => {
    let maisVotada = encontrarMaisVotada(contagem);
    redirecionar(maisVotada);  // Redireciona para a página correspondente à resposta mais votada
});