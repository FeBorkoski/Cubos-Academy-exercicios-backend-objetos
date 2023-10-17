const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]


usuarios.jovens = [];
usuarios.adultos = [];

i = 0;

for (i = 0; i < usuarios.length; i++) {
    if (usuarios[i].idade > 17) {
        usuarios.adultos.push(usuarios[i].nome);
    }
    else if (usuarios[i].idade <= 17) {
        usuarios.jovens.push(usuarios[i].nome);
    }
}

console.log(usuarios);