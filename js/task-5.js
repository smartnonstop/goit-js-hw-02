'use strict';

const checkForSpam = function(message) {
  
  let containsSpam = false;
  message = message.toLowerCase();

  if (message.includes('spam') || message.includes('sale')) {
    containsSpam = true;
  }

  return containsSpam;
}


/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sAle offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

