

Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:

возвращала первое число от start до end, которое делится на divisor без остатка
не использовала оператор break
не использовала переменную number


function findNumber(start, end, divisor) {
  // Change code below this line
  let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      number = i;
      break;
    }
  }

  return number;
  // Change code above this line
}



function findNumber(start, end, divisor) {
  // Change code below this line
  //let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      return i;
    }
  }

  //return number;
  // Change code above this line
}
