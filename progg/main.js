var cxPrincipal = document.querySelector(".cx-principal");
var cxPerguntas = document.querySelector(".cx-perguntas");
var cxAlternativas = document.querySelector(".cx-alternativas");
var cxResultado = document.querySelector(".cx-resultado");
var txResultado = document.querySelector(".tx-resultado");
var perguntas = [
    {
        enunciado: "A IA pode automatizar tarefas repetitivas.",
        alternativas: [
            {
                texto: "Vai eliminar tarefas monotonas",
                afirmaçao: ""
            },
            {
                texto:"Vai tirar muitos empregos",
                afirmaçao: ""

            }
                
          
        ]
    },
    {
        enunciado: "A IA pode tomar decisões baseadas em dados.",
        alternativas: [
            {
                texto:"Assustador",
                afirmaçao: ""
            },
            {
                texto:"Maravilhoso",
                afirmaçao: ""

            }
            
    
        ],
    },
    {
        enunciado: "A IA pode substituir certos empregos.",
        alternativas: [
            {
                texto: "Não vejo problemas",
                afirmaçao: ""
            },
            {
                texto: "É o fim dos empregos como conhecemos hoje",
                afirmaçao: ""

            }
            
           
        ],
    },
    {
        enunciado: "A IA pode ajudar a prever tendências de mercado.",
        alternativas: [
            {
                texto: "Incrível",
                afirmaçao: ""
            },
            {
                texto:   "Sinistro",
                afirmaçao: ""

            }
           
            
          
        ],
    },
    {
        enunciado: "A IA pode trabalhar 24/7 sem pausas.",
        alternativas: [
            {
                texto:  "Surpreendente",
                afirmaçao: ""
            },
            {
                texto: "Mão de obra barata",
                afirmaçao: ""

            }
       
        ]
    }
];

var posiçãoAtual = 0;
var perguntaAtual;

mostraPergunta();

function mostraPergunta(){
    perguntaAtual = perguntas[posiçãoAtual];
    cxPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (var alternativa of perguntaAtual.alternativas) {
        var botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        cxAlternativas.appendChild(botaoAlternativas);
    }
}