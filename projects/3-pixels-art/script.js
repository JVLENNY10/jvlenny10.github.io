function generateColors() {
  const color = document.querySelectorAll('.color');

  color.forEach((items) => {
    const item = items;
    if (item.id === 'black') {
      item.style.backgroundColor = 'black';
    } else {
      const randomColor = Math.floor(Math.random(0, 999999) * 1000000).toString();
      item.style.backgroundColor = `#${randomColor}`;
    }
  });
}

function colorPalette(numberOfColors) {
  const palette = document.querySelector('#color-palette');

  for (let index = 0; index < numberOfColors; index += 1) {
    const div = document.createElement('div');
    if (index === 0) {
      div.id = 'black';
    } else {
      div.id = `color${index}`;
    }
    palette.appendChild(div).classList.add('color');
  }

  generateColors();
}

function pixelBoardGenerator() {
  const boardSize = document.querySelector('#board-size');
  const pixelBoard = document.querySelector('#pixel-board');

  if (boardSize.value < 5) {
    boardSize.value = 5;
  } else if (boardSize.value > 50) {
    boardSize.value = 50;
  }

  const size = boardSize.value * boardSize.value;
  for (let index = 0; index < size; index += 1) {
    const div = document.createElement('div');
    pixelBoard.appendChild(div).classList.add('pixel');
  }

  pixelBoard.style.width = `${boardSize.value * 41}px`;
  boardSize.value = '';
}

function generateBoard(select) {
  const pixel = document.querySelectorAll('.pixel');
  const boardSize = document.querySelector('#board-size');
  const generateButton = document.querySelector('#generate-board');

  if (select.target === generateButton && boardSize.value !== '') {
    // João Spinelli(T16) e Thiago Ximenes(T16) me ajudaram a chegar na lógica do for (Remover pixel por pixel).
    pixel.forEach((item) => {
      item.remove();
    });

    pixelBoardGenerator();
  } else if (select.target === generateButton && boardSize.value === '') {
    boardSize.value = '';
    alert('Board inválido!');
  }
}

function selectedColor(select) {
  const color = document.querySelectorAll('.color');

  if (select.target.classList.contains('color')) {
    color.forEach((item) => {
      item.classList.remove('selected');
    });

    color.forEach((item) => {
      if (select.target === item) {
        item.classList.add('selected');
      }
    });
  }
}

function printBoard(select) {
  const color = document.querySelectorAll('.color');
  const selected = document.querySelector('.selected');

  if (select.target.classList.contains('pixel')) {
    color.forEach((item) => {
      const selectColor = select.target;
      if (selected.id === 'black') {
        selectColor.style.backgroundColor = 'black';
      } else if (selected.id === item.id) {
        selectColor.style.backgroundColor = item.style.backgroundColor;
      }
    });
  }
}

function clearBoard(select) {
  const pixel = document.querySelectorAll('.pixel');
  const clearButton = document.querySelector('#clear-board');

  if (select.target === clearButton) {
    pixel.forEach((items) => {
      const item = items;
      item.style.backgroundColor = 'white';
    });
  }
}

window.onload = function init() {
  colorPalette(4);
  pixelBoardGenerator();
  document.addEventListener('click', clearBoard);
  document.addEventListener('click', printBoard);
  document.addEventListener('click', generateBoard);
  document.addEventListener('click', selectedColor);
  document.querySelector('#black').classList.add('selected');
};
