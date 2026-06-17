// Banco de dados das etapas da cadeia logística
const etapasLogistica = [
    {
        titulo: "A Colheita",
        descricao: "Os agricultores colhem as verduras, legumes e frutas no momento ideal de maturação para garantir o frescor."
    },
    {
        titulo: "O Transporte Refrigerado",
        descricao: "Os alimentos são higienizados e acomodados em caminhões com controle de temperatura para não estragarem na estrada."
    },
    {
        titulo: "Centro de Distribuição",
        descricao: "Os produtos chegam aos grandes centros urbanos (como a CEASA), passando por nova triagem e inspeção de qualidade."
    },
    {
        titulo: "Feiras e Supermercados",
        descricao: "Por fim, os alimentos são expostos nas gôndolas locais, prontos para o consumo e abastecimento das famílias."
    }
];

let indiceAtual = 0;

// Seleção de elementos do DOM
const elNumero = document.getElementById("etapa-numero");
const elTitulo = document.getElementById("titulo-etapa");
const elDescricao = document.getElementById("descricao-etapa");
const btnProximo = document.getElementById("btn-proximo");

// Função para atualizar a interface do usuário (UI)
const atualizarInterface = () => {
    const etapa = etapasLogistica[indiceAtual];
    
    // Atualiza os textos com efeitos simples
    elNumero.textContent = `Etapa ${indiceAtual + 1} de ${etapasLogistica.length}`;
    elTitulo.textContent = etapa.titulo;
    elDescricao.textContent = etapa.descricao;
};

// Evento do botão utilizando Arrow Function e operador de resto (%) para o loop infinito
btnProximo.addEventListener("click", () => {
    indiceAtual = (indiceAtual + 1) % etapasLogistica.length;
    atualizarInterface();
});
