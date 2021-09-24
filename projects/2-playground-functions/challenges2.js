// Desafio 10
function techList(technology, yourName) {
  // seu código aqui
  let techs = 'Vazio!';

  if (Array.isArray(technology) && technology.length > 0) {
    techs = [];
    for (let item of technology.sort()) {
      techs.push({ tech: item, name: yourName });
    }
  } else if (!Array.isArray(technology)) {
    techs = { tech: technology, name: yourName };
  }

  return techs;
}

// Desafio 11
function checkingTheListOfNumbers(listOfNumbers) {
  let isRunning = true;

  listOfNumbers.forEach(function (number) {
    let count = 0;
    listOfNumbers.forEach(function (numberCount) {
      if (numberCount === number) {
        count += 1;
      }
    });
    if (number < 0 || number > 9 || count >= 3) {
      isRunning = false;
      return isRunning;
    }
  });

  return isRunning;
}

function generatePhoneNumber(numbers) {
  // seu código aqui
  let result = 'Array com tamanho incorreto.';

  if (numbers.length === 11) {
    result = '';
    if (checkingTheListOfNumbers(numbers)) {
      numbers.forEach(function (number) {
        result += number;
      });
      result = `(${result.slice(0, 2)}) ${result.slice(2, 7)}-${result.slice(7)}`;
    } else {
      result = 'não é possível gerar um número de telefone com esses valores';
    }
  }

  return result;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  return lineA < lineB + lineC && lineA > Math.abs(lineB - lineC);
}

// Desafio 13
function hydrate(drinks) {
  // seu código aqui
  let water = 0;

  for (let number of drinks) {
    if (number.match(/\d/) != null) {
      water += parseInt(number, drinks);
    }
  }

  if (water === 1) {
    water = `${water} copo de água`;
  } else {
    water = `${water} copos de água`;
  }

  return water;
}
