/*

Objetivo - Quando clicarmos na aba temos que mostrar o conteúdo da aba que foi clicada pelo usuário e esconder o conteúdo da aba anterior

- passo 1 - Dar um jeito de pegar os elementos que representam as abas no HTML

- passo 2 - Dar um jeito de identificar o clique no elemento da aba

- passo 3 - Quando o usuário clicar, desmarcar a aba selecionada

- passo 4 - Marcar a aba clicada como selecionado

- passo 5 - Esconder o conteúdo anterior

- passo 6 - mostrar o conteúdo da aba selecionado

*/

// passo 1 - Dar um jeito de pegar os elementos que representam as abas no HTML
const abas = document.querySelectorAll(".aba");

// passo 2 - Dar um jeito de identificar o clique no elemento da aba
abas.forEach(aba => {
    aba.addEventListener("click", function () {
        // Faz o codigo não se repetir
        if (aba.classList.contains("selecionado")) {
            return;
        }

        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)
    });
});

function selecionarAba(aba) {
    // passo 3 - Quando o usuário clicar, desmarcar a aba selecionada
    const abaSelecionda = document.querySelector(".aba.selecionado");
    abaSelecionda.classList.remove("selecionado")

    // passo 4 - Marcar a aba clicada como selecionado
    aba.classList.add("selecionado")
}

function mostrarInformacoesDaAba(aba) {
    // passo 5 - Esconder o conteúdo anterior
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    // passo 6 - mostrar o conteúdo da aba selecionado
    const idDoElementoInformacoesDaAba = `informacao-${aba.id}`

    const informacaoASerMostrada = document.getElementById(idDoElementoInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado")
}