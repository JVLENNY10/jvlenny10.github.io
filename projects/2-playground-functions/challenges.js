// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(strings) {
  // seu código aqui
  return strings.split(' ');
}

// Desafio 4
function concatName(names) {
  // seu código aqui
  return `${names[names.length - 1]}, ${names[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let count = 0;
  let maxNumber = numbers[0];

  for (let number of numbers) {
    if (maxNumber < number) {
      count = 0;
      maxNumber = number;
    } if (maxNumber === number) {
      count += 1;
    }
  }

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let result = '';

  if (cat1 === cat2 || cat1 + cat2 === cat2 - cat1 || cat1 - cat2 === cat2 + cat1) {
    result = 'os gatos trombam e o rato foge';
  } else if (cat1 < cat2) {
    result = 'cat1';
  } else {
    result = 'cat2';
  }

  return result;
}

// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui
  let listFizzBuzz = [];

  numbers.forEach(function (number) {
    if (number % 15 === 0) {
      listFizzBuzz.push('fizzBuzz');
    } else if (number % 3 === 0) {
      listFizzBuzz.push('fizz');
    } else if (number % 5 === 0) {
      listFizzBuzz.push('buzz');
    } else {
      listFizzBuzz.push('bug!');
    }
  });

  return listFizzBuzz;
}

// Desafio 9
function encode(phrase) {
  // seu código aqui
  for (let index = 0; index < phrase.length; index += 1) {
    phrase = phrase.replace('a', '1');
    phrase = phrase.replace('e', '2');
    phrase = phrase.replace('i', '3');
    phrase = phrase.replace('o', '4');
    phrase = phrase.replace('u', '5');
  }

  return phrase;
}

function decode(phrase) {
  // seu código aqui
  for (let index = 0; index < phrase.length; index += 1) {
    phrase = phrase.replace('1', 'a');
    phrase = phrase.replace('2', 'e');
    phrase = phrase.replace('3', 'i');
    phrase = phrase.replace('4', 'o');
    phrase = phrase.replace('5', 'u');
  }

  return phrase;
}
