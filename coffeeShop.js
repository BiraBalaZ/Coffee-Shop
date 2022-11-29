//Imprimeindo a logo 'Coffe Shop' no começo da aplicação.
console.log(" _____        __  __             _____ _                     ___    ___          ");
console.log("/ ____|      / _|/ _|           / ____| |                   |__ \\  / _ \\       ");
console.log("| |     ___ | |_| |_ ___  ___  | (___ | |__   ___  _ __        ) || | | |        ");
console.log("| |    / _ \\|  _|  _/ _ \\/ _ \\  \\___ \\|  _ \\ / _ \\|  _ \\      / / | | | |");
console.log("| |___| (_) | | | ||  __/  __/  ____) | | | | (_) | |_) |    / /_ | |_| |        ");
console.log("\\______\\___/|_| |_| \\___|\\___| |_____/|_| |_|\\___/| .__/    |____(_)___/    ");
console.log("                                                  | |                            ");
console.log("   [Horário de funcionamento: 08h às 18h]         |_|                \n\n\n      ");

dolar = false;
estoqueMax = 100;
day = new Date();
hour = 15; //day.getHours();

//Definindo os itens do nosso Menu/Cardápio e seus valores
var menu = [
    item01 = { nome:'Café preto           ', valor:'01.00',  qnty: 0,  estoque: estoqueMax,  type:'Bebida quente' },
    item02 = { nome:'Expresso             ', valor:'02.50',  qnty: 0,  estoque: estoqueMax,  type:'Bebida quente' },
    item03 = { nome:'Cappuccino           ', valor:'11.90',  qnty: 0,  estoque: estoqueMax,  type:'Bebida quente' },
    item04 = { nome:'Mocha                ', valor:'10.50',  qnty: 0,  estoque: estoqueMax,  type:'Bebida quente' },
    item05 = { nome:'Mochaccino           ', valor:'14.90',  qnty: 0,  estoque: estoqueMax,  type:'Bebida quente' },
    item06 = { nome:'Machiato             ', valor:'11.50',  qnty: 0,  estoque: estoqueMax,  type:'Bebida quente' },
    item07 = { nome:'Latte                ', valor:'07.90',  qnty: 0,  estoque: estoqueMax,  type:'Bebida quente' },
    item08 = { nome:'Duplo                ', valor:'04.90',  qnty: 0,  estoque: estoqueMax,  type:'Bebida quente' },
    item09 = { nome:'Café com leite       ', valor:'04.50',  qnty: 0,  estoque: estoqueMax,  type:'Bebida quente' },
    item10 = { nome:'Leite               ',  valor:'03.50',  qnty: 0,  estoque: estoqueMax,  type:'Bebida quente' },
    item11 = { nome:'Frappuccino         ',  valor:'17.50',  qnty: 0,  estoque: estoqueMax,  type:'Bebida gelada' },
    item13 = { nome:'Refrigerante        ',  valor:'05.50',  qnty: 0,  estoque: estoqueMax,  type:'Bebida gelada' },
    item14 = { nome:'Suco Natural        ',  valor:'07.90',  qnty: 0,  estoque: estoqueMax,  type:'Bebida gelada' },
    item15 = { nome:'X-Burger            ',  valor:'24.90',  qnty: 0,  estoque: estoqueMax,  type:'Lanche'        },
    item16 = { nome:'X-Bacon             ',  valor:'29.90',  qnty: 0,  estoque: estoqueMax,  type:'Lanche'        },
    item17 = { nome:'X-Salada            ',  valor:'26.50',  qnty: 0,  estoque: estoqueMax,  type:'Lanche'        },
    item18 = { nome:'Donuts              ',  valor:'05.50',  qnty: 0,  estoque: estoqueMax,  type:'Doce'          },
    item19 = { nome:'Misto quente        ',  valor:'10.50',  qnty: 0,  estoque: estoqueMax,  type:'Doce'          },
    item20 = { nome:'Brigadeirão         ',  valor:'04.90',  qnty: 0,  estoque: estoqueMax,  type:'Doce'          },
    item21 = { nome:'Torta de pêssego    ',  valor:'07.50',  qnty: 0,  estoque: estoqueMax,  type:'Doce'          },
    item22 = { nome:'Torta de maçã       ',  valor:'05.50',  qnty: 0,  estoque: estoqueMax,  type:'Doce'          },
    item22 = { nome:'Torta de morango    ',  valor:'06.50',  qnty: 0,  estoque: estoqueMax,  type:'Doce'          },
    item24 = { nome:'Bolo de cenoura     ',  valor:'07.50',  qnty: 0,  estoque: estoqueMax,  type:'Doce'          },
    item25 = { nome:'Bolo de chocolate   ',  valor:'09.50',  qnty: 0,  estoque: estoqueMax,  type:'Doce'          },
    item26 = { nome:'Bolo de fubá        ',  valor:'05.50',  qnty: 0,  estoque: estoqueMax,  type:'Doce'          },
    item27 = { nome:'Bolo de morango     ',  valor:'04.50',  qnty: 0,  estoque: estoqueMax,  type:'Doce'          },
    item28 = { nome:'Brownie             ',  valor:'06.90',  qnty: 0,  estoque: estoqueMax,  type:'Doce'          },
    item29 = { nome:'Pão de queijo (100g)',  valor:'02.50',  qnty: 0,  estoque: estoqueMax,  type:'Salgado'       },
    item30 = { nome:'Mini Coxinha (100g) ',  valor:'06.90',  qnty: 0,  estoque: estoqueMax,  type:'Salgado'       },
    item31 = { nome:'Bola de queijo (UN) ',  valor:'01.50',  qnty: 0,  estoque: estoqueMax,  type:'Salgado'       }
];

//Perguntando se deseja pagar em dolar ou real
pergunta = prompt('Como deseja pagar? Dolar (U$D) ou Real (R$)? ');
perg = pergunta.toLowerCase();

//Ligando ou Desligando a variável dolar
if (perg == 'real'.trim()) {
    dolar = false;
} else if (perg == 'dolar'.trim()) {
    dolar = true;
}

//Função de anotar o pedido
function anotarPedido() {
    //Pedindo o codigo do item
    anotar = prompt('Digite o valor do item que deseja: ');
    numPedido = anotar-1;

    //Mostrar item selecionado
    console.log(`Selecionado: ${menu[numPedido].nome}`);

    //Quantidade de itens que o usuário deseja
    quantidade = prompt('Quantos vai querer? ');

    //Verificando a quantidade que foi solicitada e a quantidade que temos disponível no estoque
    if (quantidade <= menu[numPedido].estoque) {
        //Aumentando a quantidade do item selecionado
        menu[numPedido].qnty += quantidade;

        //Diminuindo a quantidade no estoque de acordo com a quantidade solicitada
        menu[numPedido].estoque -= quantidade;

        //Perguntando se o cliente quer mais alguma coisa
        console.log('');
        resposta = prompt('Deseja pedir mais alguma coisa? ');
        console.log('');
    } else if (quantidade > menu[numPedido].estoque && menu[numPedido].estoque == 0) {
        //Mensagem caso não tenhamos mais o item no estoque (estoque == 0)
        console.log('Sentimos muito, não temos mais deste item no estoque');

        //Perguntando se o cliente quer mais alguma coisa
        console.log('');
        resposta = prompt('Deseja pedir mais alguma coisa? ');
        console.log('');
    }
    else {
        //Aumentando a quantidade do item selecionado
        menu[numPedido].qnty += menu[numPedido].estoque;

        //Perguntando se o cliente quer mais alguma coisa
        console.log('');
        console.log('Ops, não temos tudo isso! Vamos dar a quantidade máxima que temos');
        console.log(`Que é: ${menu[numPedido].estoque}`);
        resposta = prompt('Deseja pedir mais alguma coisa? ');
        console.log('');

        //Se o valor for a mais que o estoque, o estoque fica com 0 e damos o valor máximo disponível
        menu[numPedido].estoque = 0;
    }
    //Transformando a resposta em minuscula para ter apenas uma verificação
    resp = resposta.toLowerCase().trim();
}

//O programa só funciona das 8h às 18h
if (hour >= 8 && hour <= 22) {
    //#region - Imprimindo o cardápio
        console.log('                        Dê uma olhada no nosso carápio!\n');
        for (i = 0; i < menu.length; i += 2) {
            console.log(`[${i+1}] ${menu[i].nome} | R$ ${menu[i].valor}   -   [${i+2}] ${menu[i+1].nome} | R$ ${menu[i+1].valor}`);
        }
        console.log('');
    //#endregion
    
    //#region - Anotando o pedido pela primeira vez
        anotarPedido();

        //Enquanto a resposta for sim ele segue anotando o pedido
        while (resp.trim() == 'sim') {
            anotarPedido();
        }

        //Subtotal da compra, como os itens que nao foram selecionados se multiplicam por ZERO e viram ZERO, não altera o valor total REAL
        //Pegando o subtotal ser somado automaticamente sem inclusão das variáveis
        subtotal = 0;
        for (k = 0; k < menu.length; k += 1) {
            subtotal += menu[k].valor * menu[k].qnty;
        }

        //Mostrando o valor em U$D ou R$, dependendo da vontade do cliente
        if (dolar == true) {
            console.log(`\nSubTotal: U$D ${Math.trunc(subtotal/5.20)}.90`);
        } else if (dolar == false) {
            //Multiplicando o valor do item pela quantidade solicitada
            console.log(`\nSubTotal: R$ ${subtotal}`);
        }
    //#endregion
}
else {
    //Se estiver fora do horário de atendimento, ele dá as seguintes mensagens:
    console.log('Estamos Fechados.');
}
