// clientes
const patricia = { nome: "Patricia", carrinho: [] }
const carlos = { nome: "Carlos", carrinho: [] }
const renato = { nome: "Renato", carrinho: [] }
const jose = { nome: "José", carrinho: [] }
const roberto = { nome: "Roberto", carrinho: [] }

// produtos
const tv = { nome: "TV Samsung 4K", valorEmCentavos: 129900 }
const notebook = { nome: "Notebook Dell", valorEmCentavos: 399990 }
const mouse = { nome: "Mouse MX Master 3", valorEmCentavos: 23000 }
const teclado = { nome: "Teclado Keychron K8", valorEmCentavos: 50000 }
const caboUsb = { nome: "Cabo USB 2 Metros", valorEmCentavos: 1990 }
const carregador = { nome: "Carregador portátil", valorEmCentavos: 4590 }
const webcam = { nome: "Webcam C920s", valorEmCentavos: 80000 }
const monitor = { nome: "Monitor LG 29 FHD", valorEmCentavos: 129900 }

jose.carrinho = [
    {
        item: { nome, valorEmCentavos } = tv,
        quantidade: 1
    }, {
        item: { nome, valorEmCentavos } = caboUsb,
        quantidade: 2
    }, {
        item: { nome, valorEmCentavos } = webcam,
        quantidade: 1
    }
];
patricia.carrinho = [
    {
        item: { nome, valorEmCentavos } = teclado,
        quantidade: 1
    }, {
        item: { nome, valorEmCentavos } = caboUsb,
        quantidade: 2
    }, {
        item: { nome, valorEmCentavos } = carregador,
        quantidade: 1
    }, {
        item: { nome, valorEmCentavos } = monitor,
        quantidade: 1
    }, {
        item: { nome, valorEmCentavos } = mouse,
        quantidade: 1
    }
];
carlos.carrinho = [
    {
        item: { nome, valorEmCentavos } = notebook,
        quantidade: 2
    }
];
renato.carrinho = [
    {
        item: { nome, valorEmCentavos } = webcam,
        quantidade: 5
    }
];
roberto.carrinho = [
    {
        item: { nome, valorEmCentavos } = webcam,
        quantidade: 1
    }, {
        item: { nome, valorEmCentavos } = caboUsb,
        quantidade: 2
    }, {
        item: { nome, valorEmCentavos } = monitor,
        quantidade: 1
    }
];

console.log("Jose Carrinho de compras:", jose.carrinho);
console.log("Carlos Carrinho de Compras:", carlos.carrinho);
console.log("Patricia Carrinho de Compras:", patricia.carrinho);
console.log("Renato Carrinho de Compras:", renato.carrinho);
console.log("Roberto Carrinho de Compras:", roberto.carrinho);