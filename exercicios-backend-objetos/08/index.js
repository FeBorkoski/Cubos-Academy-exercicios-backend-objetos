const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]
for (let usuario of usuarios) 
{
    let {nome, pets,} = usuario;
    if (pets.length < 1) 
    {
        pets = "não tenho pets";
    } 
    else if (pets.length === 1) 
    {
        pets = "tenho 1 pet";
    } 
    else
    {
        pets = `tenho ${pets.length} pets`;
    }
    console.log(`Sou ${nome} e ${pets}.`)
}