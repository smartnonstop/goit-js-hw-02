'use strict';

const promptLabel = 'Введите число!';
let input;
const numbers = [];
let total = 0;

do {
  input = prompt(promptLabel);
  if (input !== null && Number.isNaN(Number(input))) {
    alert('Было введено не число, попробуйте еще раз');
  }else {
    numbers.push(Number(input));
  }
} while (input !== null);

const checkSum = function (array) {
  let totalNum = 0;

  for (const arrItem of array) {
    totalNum += arrItem;
  }

  return totalNum;
}

total = checkSum(numbers);

console.log(`Общая сумма чисел равна ${total}`);
