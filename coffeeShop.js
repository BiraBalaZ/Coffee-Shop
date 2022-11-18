    //Definindo os itens do nosso Menu/Cardápio e seus valores
    var menu = [
        item1  = {nome:'Café preto          ', valor:'01.00', qnty: 0},
        item2  = {nome:'Expresso            ', valor:'02.00', qnty: 0},
        item3  = {nome:'Cappuccino          ', valor:'12.00', qnty: 0},
        item4  = {nome:'Mocha               ', valor:'10.00', qnty: 0},
        item5  = {nome:'Mochaccino          ', valor:'15.00', qnty: 0},
        item6  = {nome:'Machiato            ', valor:'11.50', qnty: 0},
        item7  = {nome:'Latte               ', valor:'08.00', qnty: 0},
        item8  = {nome:'Duplo               ', valor:'05.00', qnty: 0},
        item9  = {nome:'Frappuccino         ', valor:'17.50', qnty: 0},
        item10 = {nome:'Café com leite      ', valor:'04.00', qnty: 0},
        item11 = {nome:'Leite               ', valor:'03.50', qnty: 0},
        item12 = {nome:'Hamburguer          ', valor:'25.00', qnty: 0},
        item13 = {nome:'Donuts              ', valor:'06.00', qnty: 0},
        item14 = {nome:'Misto quente        ', valor:'10.00', qnty: 0},
        item15 = {nome:'Brigadeirão         ', valor:'05.00', qnty: 0},
        item16 = {nome:'Torta de pêssego    ', valor:'07.50', qnty: 0},
        item17 = {nome:'Torta de maçã       ', valor:'07.50', qnty: 0},
        item18 = {nome:'Torta de morango    ', valor:'07.50', qnty: 0},
        item19 = {nome:'Bolo de brigadeiro  ', valor:'04.50', qnty: 0},
        item20 = {nome:'Bolo de chocolate   ', valor:'04.50', qnty: 0},
        item21 = {nome:'Bolo de fubá        ', valor:'04.50', qnty: 0},
        item22 = {nome:'Bolo de morango     ', valor:'04.50', qnty: 0},
        item23 = {nome:'Pão de queijo (100g)', valor:'02.50', qnty: 0}
    ];

    //#region: Imprimindo o cardápio
        console.log(`[01] ${menu[00].nome} | R$ ${menu[00].valor}`);
        console.log(`[02] ${menu[01].nome} | R$ ${menu[01].valor}`);
        console.log(`[03] ${menu[02].nome} | R$ ${menu[02].valor}`);
        console.log(`[04] ${menu[03].nome} | R$ ${menu[03].valor}`);
        console.log(`[05] ${menu[04].nome} | R$ ${menu[04].valor}`);
        console.log(`[06] ${menu[05].nome} | R$ ${menu[05].valor}`);
        console.log(`[07] ${menu[06].nome} | R$ ${menu[06].valor}`);
        console.log(`[08] ${menu[07].nome} | R$ ${menu[07].valor}`);
        console.log(`[09] ${menu[08].nome} | R$ ${menu[08].valor}`);
        console.log(`[10] ${menu[09].nome} | R$ ${menu[09].valor}`);
        console.log(`[11] ${menu[10].nome} | R$ ${menu[10].valor}`);
        console.log(`[12] ${menu[11].nome} | R$ ${menu[11].valor}`);
        console.log(`[13] ${menu[12].nome} | R$ ${menu[12].valor}`);
        console.log(`[14] ${menu[13].nome} | R$ ${menu[13].valor}`);
        console.log(`[15] ${menu[14].nome} | R$ ${menu[14].valor}`);
        console.log(`[16] ${menu[15].nome} | R$ ${menu[15].valor}`);
        console.log(`[17] ${menu[16].nome} | R$ ${menu[16].valor}`);
        console.log(`[19] ${menu[17].nome} | R$ ${menu[17].valor}`);
        console.log(`[18] ${menu[18].nome} | R$ ${menu[18].valor}`);
        console.log(`[20] ${menu[19].nome} | R$ ${menu[19].valor}`);
        console.log(`[21] ${menu[20].nome} | R$ ${menu[20].valor}`);
        console.log(`[22] ${menu[21].nome} | R$ ${menu[21].valor}`);
        console.log(`[23] ${menu[22].nome} | R$ ${menu[22].valor}`);
    //#endregion

    function anotarPedido() {

        //Pedindo o codigo do item
        anotar = prompt('\nDigite o valor do item que deseja: ');
        numPedido = anotar-1;

        //Mostar item selecionado
        console.log(`Selecionado: ${menu[numPedido].nome}`);

        //Quantidade de itens que o usuário deseja
        quantidade = prompt('Quantos vai querer? ');

        menu[numPedido].qnty += quantidade;

        //Perguntando se o cliente quer mais alguma coisa
        resposta = prompt('Deseja pedir mais alguma coisa? ');
    }

    //Anotando o pedido pela primeira vez
    anotarPedido();

    //Enquanto a resposta for sim ele segue anotando o pedido
    while (resposta == 'sim' || resposta == 'Sim' || resposta == 'SIM') {
        anotarPedido();
    }

    const subtotal = ((menu[00].valor * menu[00].qnty) + (menu[01].valor * menu[01].qnty) + (menu[02].valor * menu[02].qnty) + (menu[03].valor * menu[03].qnty) + (menu[04].valor * menu[04].qnty) + (menu[05].valor * menu[05].qnty) + (menu[06].valor * menu[06].qnty) + (menu[07].valor * menu[07].qnty) + (menu[08].valor * menu[08].qnty) + (menu[09].valor * menu[09].qnty) + (menu[10].valor * menu[10].qnty) + (menu[11].valor * menu[11].qnty) + (menu[12].valor * menu[12].qnty) + (menu[13].valor * menu[13].qnty) + (menu[14].valor * menu[14].qnty) + (menu[15].valor * menu[15].qnty) + (menu[16].valor * menu[16].qnty) + (menu[17].valor * menu[17].qnty) + (menu[18].valor * menu[18].qnty) + (menu[19].valor * menu[19].qnty) + (menu[20].valor * menu[20].qnty) + (menu[21].valor * menu[21].qnty) + (menu[22].valor * menu[22].qnty));

    //Multiplicando o valor do item pela quantidade solicitada
    console.log(`SubTotal: R$ ${subtotal}`);
