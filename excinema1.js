const temIngresso = true;
const censura = 16;
const idade = 18;

// ingresso e com idade maior ou igual a censura permitido entrar

if (temIngresso === true) {
    if (idade >= censura) {
        console.log("PERMITIDO A ENTRADA");
    } else {
        console.log("Barrada pela Censura");
    }
} else {
    console.log("NÃO TEM INGRESSO")

}