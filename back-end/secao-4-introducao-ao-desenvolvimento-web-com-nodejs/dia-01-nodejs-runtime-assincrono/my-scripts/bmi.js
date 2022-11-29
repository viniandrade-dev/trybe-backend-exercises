const readline = require('readline-sync')

const bmi = () => {
    const weight = readline.questionFloat('Qual sua massa corporal em quilogramas? ')
    const height = readline.questionFloat('Qual sua altura em metros ')
    const bmi = weight / height**2;
    if (bmi < 18.5) {
        return console.log(`Seu IMC é ${bmi} e você está em situação de magreza`);
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        return console.log(`Seu IMC é ${bmi} e você está em situação de peso normal`);
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        return console.log(`Seu IMC é ${bmi} e você está em situação de sobrepeso`);
    }
    else if (bmi >= 30 && bmi <= 34.9) {
        return console.log(`Seu IMC é ${bmi} e você está em situação de obesidade grau I`);
    }
    else if (bmi >= 35 && bmi <= 39.9) {
        return console.log(`Seu IMC é ${bmi} e você está em situação de obesidade grau II`);
    }
    else {
        return console.log(`Seu IMC é ${bmi} e você está em situação de obesidade grau III`);
    }
}

bmi();

module.exports = { bmi };