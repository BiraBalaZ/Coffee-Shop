//Imprimeindo a logo 'Coffe Shop' no começo da aplicação.
console.log(" _____        __  __             _____ _                        ");
console.log("/ ____|      / _|/ _|           / ____| |                       ");
console.log("| |     ___ | |_| |_ ___  ___  | (___ | |__   ___  _ __         ");
console.log("| |    / _ \\|  _|  _/ _ \\/ _ \\  \\___ \\|  _ \\ / _ \\|  _ \\");
console.log("| |___| (_) | | | ||  __/  __/  ____) | | | | (_) | |_) |       ");
console.log("\\______\\___/|_| |_| \\___|\\___| |_____/|_| |_|\\___/| .__/   ");
console.log("                                                  | |           ");
console.log("   [Horário de funcionamento: 08h às 22h]         |_|     \n\n\n");
    
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
    item12 = {nome:'X-Burger            ', valor:'25.00', qnty: 0},
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
    item23 = {nome:'Pão de queijo (100g)', valor:'02.50', qnty: 0},
    item23 = {nome:'Brownie             ', valor:'07.00', qnty: 0}
];

//#region: Imprimindo o cardápio
    console.log('                        Dê uma olhada no nosso carápio!\n');
    j=1
    for (i = 0; i < menu.length; i += 2) {
        console.log(`[${i+1}] ${menu[i].nome} | R$ ${menu[i].valor}   -   [${j+1}] ${menu[j].nome} | R$ ${menu[j].valor}`);
        j+=2
    }

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

const subtotal = ((menu[00].valor * menu[00].qnty) + (menu[01].valor * menu[01].qnty) + (menu[02].valor * menu[02].qnty) + (menu[03].valor * menu[03].qnty) + (menu[04].valor * menu[04].qnty) + (menu[05].valor * menu[05].qnty) + (menu[06].valor * menu[06].qnty) + (menu[07].valor * menu[07].qnty) + (menu[08].valor * menu[08].qnty) + (menu[09].valor * menu[09].qnty) + (menu[10].valor * menu[10].qnty) + (menu[11].valor * menu[11].qnty) + (menu[12].valor * menu[12].qnty) + (menu[13].valor * menu[13].qnty) + (menu[14].valor * menu[14].qnty) + (menu[15].valor * menu[15].qnty) + (menu[16].valor * menu[16].qnty) + (menu[17].valor * menu[17].qnty) + (menu[18].valor * menu[18].qnty) + (menu[19].valor * menu[19].qnty) + (menu[20].valor * menu[20].qnty) + (menu[21].valor * menu[21].qnty) + (menu[22].valor * menu[22].qnty) + (menu[23].valor * menu[23].qnty));

//Multiplicando o valor do item pela quantidade solicitada
console.log(`SubTotal: R$ ${subtotal}`);
