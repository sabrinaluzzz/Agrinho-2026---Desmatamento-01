// Captura dos elementos do HTML
const btnTradicional = document.getElementById('btn-tradicional');
const btnSustentavel = document.getElementById('btn-sustentavel');
const painelResultado = document.getElementById('painel-resultado');
const resultadoTitulo = document.getElementById('resultado-titulo');
const resultadoTexto = document.getElementById('resultado-texto');
const barraProdutividade = document.getElementById('barra-produtividade');
const barraPreservacao = document.getElementById('barra-preservacao');

// Eventos de clique nos botões
btnTradicional.addEventListener('click', mostrarTradicional);
btnSustentavel.addEventListener('click', mostrarSustentavel);

function mostrarTradicional() {
    // Ajusta as classes do painel de resultado (Alerta/Erro)
    painelResultado.classList.remove('hidden', 'sucesso-estilo');
    painelResultado.classList.add('perigo-estilo');

    // Altera os textos
    resultadoTitulo.textContent = "⚠️ Consequência da Prática Tradicional";
    resultadoTexto.textContent = "A expansão por desmatamento gera um ganho rápido de área, mas esgota os nutrientes do solo rapidamente. Sem árvores, o regime de chuvas cai drasticamente na região, derrubando a sua produtividade a longo prazo e gerando boicotes comerciais de grandes compradores.";

    // Anima o gráfico simulado (Largura das barras)
    // Usamos o setTimeout para garantir que o navegador processe a animação do CSS de 0% até o valor desejado
    setTimeout(() => {
        barraProdutividade.style.width = "30%";
        barraPreservacao.style.width = "5%";
    }, 50);
}

function mostrarSustentavel() {
    // Ajusta as classes do painel de resultado (Sucesso/Verde)
    painelResultado.classList.remove('hidden', 'perigo-estilo');
    painelResultado.classList.add('sucesso-estilo');

    // Altera os textos
    resultadoTitulo.textContent = "🌱 Resultado do Agro Sustentável";
    resultadoTexto.textContent = "Utilizando rotação de culturas, sistemas integrados (ILPF) e tecnologia de precisão, você aumenta a eficiência do solo atual. A produção dobra sem precisar derrubar uma árvore. A fazenda recebe certificações verdes, valorizando o produto no mercado internacional.";

    // Anima o gráfico simulado (Largura das barras)
    setTimeout(() => {
        barraProdutividade.style.width = "95%";
        barraPreservacao.style.width = "100%";
    }, 50);
}
