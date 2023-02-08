//Imprimeindo a logo 'Coffe Shop' no começo da aplicação.
console.log(" _____        __  __             _____ _                     ___    ___          ");
console.log("/ ____|      / _|/ _|           / ____| |                   |__ \\  / _ \\       ");
console.log("| |     ___ | |_| |_ ___  ___  | (___ | |__   ___  _ __        ) || | | |        ");
console.log("| |    / _ \\|  _|  _/ _ \\/ _ \\  \\___ \\|  _ \\ / _ \\|  _ \\      / / | | | |");
console.log("| |___| (_) | | | ||  __/  __/  ____) | | | | (_) | |_) |    / /_ | |_| |        ");
console.log("\\______\\___/|_| |_| \\___|\\___| |_____/|_| |_|\\___/| .__/    |____(_)___/    ");
console.log("                                                  | |                            ");
console.log("   [Horário de funcionamento: 08h às 22h]         |_|                \n\n\n      ");

dolar = false;
baunilha = false;
estoqueMax = 100;
day = new Date();
hour = 15; //day.getHours();

//Definindo os itens do nosso Menu/Cardápio e seus valores
var menu = [
    item01 = { nome: 'Café preto           ', valor: '01.00',  qnty: 0,  estoque: estoqueMax,  type: 'Bebida'  , situation: 'selecionavel'    },
    item02 = { nome: 'Expresso             ', valor: '02.50',  qnty: 0,  estoque: estoqueMax,  type: 'Bebida'  , situation: 'selecionavel'    },
    item03 = { nome: 'Cappuccino           ', valor: '11.90',  qnty: 0,  estoque: estoqueMax,  type: 'Bebida'  , situation: 'selecionavel'    },
    item04 = { nome: 'Mocha                ', valor: '10.50',  qnty: 0,  estoque: estoqueMax,  type: 'Bebida'  , situation: 'selecionavel'    },
    item05 = { nome: 'Mochaccino           ', valor: '14.90',  qnty: 0,  estoque: estoqueMax,  type: 'Bebida'  , situation: 'selecionavel'    },
    item06 = { nome: 'Machiato             ', valor: '11.50',  qnty: 0,  estoque: estoqueMax,  type: 'Bebida'  , situation: 'selecionavel'    },
    item07 = { nome: 'Latte                ', valor: '07.90',  qnty: 0,  estoque: estoqueMax,  type: 'Bebida'  , situation: 'selecionavel'    },
    item08 = { nome: 'Duplo                ', valor: '04.90',  qnty: 0,  estoque: estoqueMax,  type: 'Bebida'  , situation: 'selecionavel'    },
    item09 = { nome: 'Café com leite       ', valor: '04.50',  qnty: 0,  estoque: estoqueMax,  type: 'Bebida'  , situation: 'selecionavel'    },
    item10 = { nome: 'Leite               ',  valor: '03.50',  qnty: 0,  estoque: estoqueMax,  type: 'Bebida'  , situation: 'selecionavel'    },
    item11 = { nome: 'Frappuccino         ',  valor: '17.50',  qnty: 0,  estoque: estoqueMax,  type: 'Bebida'  , situation: 'selecionavel'    },
    item13 = { nome: 'Refrigerante        ',  valor: '05.50',  qnty: 0,  estoque: estoqueMax,  type: 'Bebida'  , situation: 'selecionavel'    },
    item14 = { nome: 'Suco Natural        ',  valor: '07.90',  qnty: 0,  estoque: estoqueMax,  type: 'Bebida'  , situation: 'selecionavel'    },
    item15 = { nome: 'X-Burger            ',  valor: '24.90',  qnty: 0,  estoque: estoqueMax,  type: 'Lanche'  , situation: 'nao_selecionavel'},
    item16 = { nome: 'X-Bacon             ',  valor: '29.90',  qnty: 0,  estoque: estoqueMax,  type: 'Lanche'  , situation: 'nao_selecionavel'},
    item17 = { nome: 'X-Salada            ',  valor: '26.50',  qnty: 0,  estoque: estoqueMax,  type: 'Lanche'  , situation: 'nao_selecionavel'},
    item18 = { nome: 'Donuts              ',  valor: '05.50',  qnty: 0,  estoque: estoqueMax,  type: 'Doce'    , situation: 'nao_selecionavel'},
    item19 = { nome: 'Misto quente        ',  valor: '10.50',  qnty: 0,  estoque: estoqueMax,  type: 'Doce'    , situation: 'nao_selecionavel'},
    item20 = { nome: 'Brigadeirão         ',  valor: '04.90',  qnty: 0,  estoque: estoqueMax,  type: 'Doce'    , situation: 'nao_selecionavel'},
    item21 = { nome: 'Torta de pêssego    ',  valor: '07.50',  qnty: 0,  estoque: estoqueMax,  type: 'Doce'    , situation: 'nao_selecionavel'},
    item22 = { nome: 'Torta de maçã       ',  valor: '05.50',  qnty: 0,  estoque: estoqueMax,  type: 'Doce'    , situation: 'nao_selecionavel'},
    item22 = { nome: 'Torta de morango    ',  valor: '06.50',  qnty: 0,  estoque: estoqueMax,  type: 'Doce'    , situation: 'nao_selecionavel'},
    item24 = { nome: 'Bolo de cenoura     ',  valor: '07.50',  qnty: 0,  estoque: estoqueMax,  type: 'Doce'    , situation: 'nao_selecionavel'},
    item25 = { nome: 'Bolo de chocolate   ',  valor: '09.50',  qnty: 0,  estoque: estoqueMax,  type: 'Doce'    , situation: 'nao_selecionavel'},
    item26 = { nome: 'Bolo de fubá        ',  valor: '05.50',  qnty: 0,  estoque: estoqueMax,  type: 'Doce'    , situation: 'nao_selecionavel'},
    item27 = { nome: 'Bolo de morango     ',  valor: '04.50',  qnty: 0,  estoque: estoqueMax,  type: 'Doce'    , situation: 'nao_selecionavel'},
    item28 = { nome: 'Brownie             ',  valor: '06.90',  qnty: 0,  estoque: estoqueMax,  type: 'Doce'    , situation: 'nao_selecionavel'},
    item29 = { nome: 'Pão de queijo (100g)',  valor: '02.50',  qnty: 0,  estoque: estoqueMax,  type: 'Salgado' , situation: 'nao_selecionavel'},
    item30 = { nome: 'Mini Coxinha (100g) ',  valor: '06.90',  qnty: 0,  estoque: estoqueMax,  type: 'Salgado' , situation: 'nao_selecionavel'},
    item31 = { nome: 'Bola de queijo (UN) ',  valor: '01.50',  qnty: 0,  estoque: estoqueMax,  type: 'Salgado' , situation: 'nao_selecionavel'}
];

//Função da pergunta se é em real ou dolar
function dolarOrReal() {
    pergunta = prompt('Como deseja pagar? Dolar (U$D) ou Real (R$)? ');
    perg = pergunta.toLowerCase();
}

//Perguntando se deseja pagar em dolar ou real
dolarOrReal();

//Se a resposta da pergunta for diferente de 'real' ou 'dolar' ele repete a pergunta
while (perg !== 'real' && perg !=='dolar') {
    dolarOrReal();
}

//Ligando ou Desligando a variável dolar
if (perg.trim() == 'real') {
    dolar = false;
}
else if (perg.trim() == 'dolar') {
    dolar = true;
}

//Função de anotar o pedido
function anotarPedido() {
    //Pedindo o codigo do item
    anotar = prompt('Digite o valor do item que deseja: ');
    numPedido = anotar - 1;

    //Descobirndo o valor que está fora do vetor
    maxVetor = menu.length + 1;

    //Enquanto ele digitar um valor que está fora do vetor, ele permanece pedindo o valor do produto
    while (anotar >= maxVetor || anotar <= 0) {
        anotarPedido();
    }

    if (menu[numPedido].estoque <= 0) {
        console.log('Infelizmente não temos esse item agora :(');
        console.log('');
        resposta = prompt('Deseja pedir mais alguma coisa? ');
        console.log('');
        res = resposta.toLowerCase().trim();
        
        if (res == 'nao') {
            console.log('Sentimos muito por não ter o item que desejava :(\nVolte sempre!');
        }
        else {
            anotarPedido();
        }
    }

    if (menu[numPedido].estoque >= 1) {

        if (menu[numPedido].situation == 'selecionavel') {
                function selectSize() {
                    function extraAndFlavor() {
                        //Perguntando se deseja adicional ou sabor
                        if (menu[numPedido] == item07) {
                            extraQuestion = prompt('Deseja adicionar baunilha para ficar com um sabor mais doce? ');
                            extra = extraQuestion.toLowerCase();
                    
                            if (extra.trim() == 'sim') {
                                console.log(`Selecionado: ${menu[numPedido].nome.trim()} com baunilha`);
                                menu[numPedido].valor = '10.00';
                                baunilha = true;
                            }
                            else if (extra.trim() == 'nao') {
                                console.log(`Selecionado: ${menu[numPedido].nome.trim()}`);
                                baunilha = false;
                            }
                            else {
                                extraAndFlavor();
                            }
                        }
                        else if (menu[numPedido] == item11) {
                            console.log('Qual sabor você gostaria?');
                            flavorSelect = prompt('Chocolate, Menta, Morango ou Caramelo? ');
                            flavor = flavorSelect.toLowerCase();
                    
                            if (flavor.trim() == 'chocolate') {
                                console.log(`Selecionado: ${menu[numPedido].nome.trim()} de Chocolate`);
                            }
                            else if (flavor.trim() == 'morango') {
                                console.log(`Selecionado: ${menu[numPedido].nome.trim()} de Morango`);
                            }
                            else if (flavor.trim() == 'menta') {
                                console.log(`Selecionado: ${menu[numPedido].nome.trim()} de Menta`);
                            }
                            else if (flavor.trim() == 'caramelo') {
                                console.log(`Selecionado: ${menu[numPedido].nome.trim()} de Caramelo`);
                            }
                            else {
                                extraAndFlavor();
                            }
                        }
                    }

                    //Verificando se é Latte ou Frappuccino
                    extraAndFlavor();

                    console.log('Digite apenas o valor, sem o "ml"');
                    tamanho = prompt('Qual tamanho deseja? 300ml - 500ml - 700ml: ');

                    //Verificando a resposta
                    if (tamanho.trim() == '300') {        
                        console.log(`Selecionado: ${menu[numPedido].nome.trim()} de 300ml`);
                    }
                    else if (tamanho.trim() == '500') {        
                        console.log(`Selecionado: ${menu[numPedido].nome.trim()} de 500ml`);
                        switch (numPedido) {
                            case 0:
                                menu[numPedido].valor = '03.00';
                            break;
                        
                            case 1:
                                menu[numPedido].valor = '04.90';
                            break;
                        
                            case 2:
                                menu[numPedido].valor = '14.50' 
                            break;
                        
                            case 3:
                                menu[numPedido].valor = '12.30';
                            break;
                        
                            case 4:
                                menu[numPedido].valor = '16.70';
                            break;
                        
                            case 5:
                                menu[numPedido].valor = '19.90';
                            break;
                        
                            case 6:
                                if (baunilha == false) {
                                    menu[numPedido].valor = '15.90';
                                }
                                else if (baunilha == true) {
                                    menu[numPedido].valor = '17.50';
                                }
                            break;
                        
                            case 7:
                                menu[numPedido].valor = '08.90';
                            break;
                        
                            case 8:
                                menu[numPedido].valor = '06.50';
                            break;
                        
                            case 9:
                                menu[numPedido].valor = '05.10';
                            break;
                        
                            case 10:
                                menu[numPedido].valor = '19.90';
                            break;
                        
                            case 11:
                                menu[numPedido].valor = '07.40';
                            break;
                        
                            case 12:
                                menu[numPedido].valor = '09.50'
                            break;
                        }
                    }
                    else if (tamanho.trim() == '700') {        
                        console.log(`Selecionado: ${menu[numPedido].nome.trim()} de 700ml`);
                        switch (numPedido) {
                            case 0:
                                menu[numPedido].valor = '05.00';
                            break;
                        
                            case 1:
                                menu[numPedido].valor = '07.50';
                            break;
                        
                            case 2:
                                menu[numPedido].valor = '17.00' 
                            break;
                        
                            case 3:
                                menu[numPedido].valor = '14.90';
                            break;
                        
                            case 4:
                                menu[numPedido].valor = '18.90';
                            break;
                        
                            case 5:
                                menu[numPedido].valor = '22.00';
                            break;
                        
                            case 6:
                                if (baunilha == false) {
                                    menu[numPedido].valor = '18.50';
                                }
                                else if (baunilha == true) {
                                    menu[numPedido].valor = '22.50';
                                }
                            break;
                        
                            case 7:
                                menu[numPedido].valor = '10.50';
                            break;
                        
                            case 8:
                                menu[numPedido].valor = '08.00';
                            break;
                        
                            case 9:
                                menu[numPedido].valor = '07.10';
                            break;
                        
                            case 10:
                                menu[numPedido].valor = '22.50';
                            break;
                        
                            case 11:
                                menu[numPedido].valor = '08.30';
                            break;
                        
                            case 12:
                                menu[numPedido].valor = '11.40'
                            break;
                        }
                    }
                    else {
                        selectSize();
                    }
                }

            //Selecionando o tamanho
            selectSize();
        }
        else if (menu[numPedido].situation == 'nao_selecionavel'){
            //Mostrar item selecionado
            console.log(`Selecionado: ${menu[numPedido].nome}`);
        }

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
                
            //Transformando a resposta em minuscula para ter apenas uma verificação
            resp = resposta.toLowerCase();
            console.log('');
        }
        else if (quantidade > menu[numPedido].estoque && menu[numPedido].estoque == 0) {
            //Mensagem caso não tenhamos mais o item no estoque (estoque == 0)
            console.log('Sentimos muito, não temos mais deste item no estoque');

            //Perguntando se o cliente quer mais alguma coisa
            console.log('');
            resposta = prompt('Deseja pedir mais alguma coisa? ');
            
            //Transformando a resposta em minuscula para ter apenas uma verificação
            resp = resposta.toLowerCase();
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
    }
}
//O programa só funciona das 8h às 18h
if (hour >= 8 && hour <= 22) {
    //#region - Imprimindo o cardápio em real e em dolar
        if (dolar == false) {
            console.log('                        Dê uma olhada no nosso carápio!\n');
            for (i = 0; i < menu.length; i += 2) {
                console.log(`[${i+1}] ${menu[i].nome} | R$ ${menu[i].valor}   -   [${i+2}] ${menu[i+1].nome} | R$ ${menu[i+1].valor}`);
            }
            console.log('');
        }
        else if (dolar == true) {
            console.log('                        Dê uma olhada no nosso carápio!\n');
            for (j = 0; j < menu.length; j += 2) {
                console.log(`[${j+1}] ${menu[j].nome} | $ ${Math.trunc(menu[j].valor/5.20)}.90   -   [${j+2}] ${menu[j+1].nome} | $ ${Math.trunc(menu[j+1].valor/5.20)}.90`);
            }
            console.log('');
        }
    //#endregion
    
    //#region - Anotando o pedido pela primeira vez
        anotarPedido();

        if (menu[numPedido].estoque >= 1) {
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
            }
            else if (dolar == false) {
                //Multiplicando o valor do item pela quantidade solicitada
                console.log(`\nSubTotal: R$ ${subtotal}0`);
            }
        //#endregion
    }
}
else {
    //Se estiver fora do horário de atendimento, ele dá as seguintes mensagens:
    console.log('Estamos Fechados.');
}

                                  /*
 ____ _____ _____               / /  ____          _                ______
|  _ \_   _|  __ \     /\      / /  |  _ \   /\   | |        /\    |___  /   
| |_) || | | |__) |   /  \    / /__ | |_) | /  \  | |       /  \      / /    
|  _ < | | |  _  /   / /\ \  |___  /|  _ < / /\ \ | |      / /\ \    / /     
| |_) || |_| | \ \  / ____ \    / / | |_) / ____ \| |____ / ____ \  / /__    
|____/_____|_|  \_\/_/    \_\  / /  \____/_/    \_\______/_/    \_\/_____|   
                              / /     
                             */
