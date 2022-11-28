const readline = require('readline-sync')

const bmi = () => {
    const weight = readline.questionFloat('Qual sua massa corporal em quilogramas? ')
    const height = readline.questionFloat('Qual sua altura em metros ')
    const bmi = weight / height**2;
    return console.log(`Your bmi is ${bmi}`);
}

bmi();

module.exports = { bmi };