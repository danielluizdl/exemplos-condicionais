const temIngresso = true;
const censura = 16;
const idade = 10;
const estaComOsPais = false;

//  Ter ingresso e ser maior ou igual a censura ou se for menor que a censura estar com os pais.

if (temIngresso === true) {
    if (idade >= censura || estaComOsPais === true) {
        console.log(`PERMITIDO ENTRAR`)
    } else {
        console.log(`PROIBIDO PELA CENSURA`)
    }
} else {
    console.log("BARRADO")
}