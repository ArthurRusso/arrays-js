const arrayNums = [1, 2, 3, 4];

function multiplicaPorDez(num) {
  return num * 10;
}

// Função externa
const arraySomada = arrayNums.map(multiplicaPorDez);

console.log(arraySomada);

// Arrow Function
const arraySomada2 = arrayNums.map((num) => num * 10);

console.log(arraySomada2);
