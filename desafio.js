function sumMultiples3Or5(input) {
  let sumDivisors = 0;
  let currentDivisor = 3;
  const incrementArr = [2, 1, 3, 1, 2, 3, 3];
  let i = 0;
  while (currentDivisor < input) {
    sumDivisors += currentDivisor;
    currentDivisor += incrementArr[i];
    i = (i + 1) % 7; // 7 -> incrementArr.length
  }

  return sumDivisors;
}

function main() {
  const args = process.argv;
  if (args.length === 2) {
    console.error("Nenhuma entrada recebida");
    return;
  }

  const input = Number(args[2]);
  if (isNaN(input) || !Number.isInteger(input) || input <= 0) {
    console.error(
      "Entrada inválida. A entrada deve ser um valor inteiro positivo"
    );
    return;
  }

  const sum = sumMultiples3Or5(input);
  console.log(`Soma: ${sum}`);
}

main();
