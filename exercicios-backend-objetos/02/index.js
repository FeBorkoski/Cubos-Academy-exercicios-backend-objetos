const carros = [
    {
        marca: "Volkswagen",
        modelo: "Gol",
        ano: 2022,
        cor: "vermelho",
        quantidade_portas: 4,
        automatico: false
    },
    {
        marca: "Toyota",
        modelo: "Corolla",
        ano: 2023,
        cor: "branco",
        quantidade_portas: 4,
        automatico: true
    },
    {
        marca: "Ford",
        modelo: "Focus",
        ano: 2021,
        cor: "preto",
        quantidade_portas: 5,
        automatico: true
    }
];

for (let i = 0; i < carros.length; i++) {
    const carro = carros[i];
    
    console.log(`Marca: ${carro.marca}`);
    console.log(`Modelo: ${carro.modelo}`);
    console.log(`Ano: ${carro.ano}`);
    console.log(`Cor: ${carro.cor}`);
    console.log(`Quantidade de Portas: ${carro.quantidade_portas}`);
    
    if (carro.automatico) {
        console.log("Automático: Sim");
    } else {
        console.log("Automático: Não");
    }
    
    console.log("......................");
}

