const fs = require('fs').promises;

const readSimpsons = async () => {
    try {
        const data = await fs.readFile('./simpsons.json');
        const result = JSON.parse(data);
        return result;
    } catch (error) {
        console.error(`${error}`);
    }
}

const printSimpsons = async () => {
    const data = await readSimpsons();
    data.forEach(simpson => {
      console.log(`${simpson.id} - ${simpson.name}`);
    });
}

const showSimpsonById = async (id) => {
    try {
        const data = await readSimpsons();
        const simpsonCharacter = data.filter(simpson => id === Number(simpson.id))[0];
        console.log(`${simpsonCharacter.id} - ${simpsonCharacter.name}`);
    } catch (error) {
        console.error(`Não existe personagem com este id: ${error}`);
    }
}

const readFilteredSimpsons = async () => {
    try {
        const result = await readSimpsons();
        const newArray = result.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
        await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
        console.log(result);
    } catch (error) {
        console.error(`${error}`);
    }
}

const writeSimpsonsFamily = async () => {
    try {
        const result = await readSimpsons();
        const simpsonFamily = result.splice(0,5)
        await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonFamily));
    } catch (error) {
        console.error(`${error}`)
    }
}

const addNelsonMuntz = async () => {
    const NelsonMuntz = {
        "id": "10",
        "name": "Nelson Muntz"
    };
    try {
        const result = await readSimpsons();
        const newSimpson = [...result, NelsonMuntz]
        await fs.writeFile('./simpsons.json', JSON.stringify(newSimpson));
    } catch (error) {
        console.error(`${error}`);
    }
}

addNelsonMuntz();
