console.log("Este programa conta de 30 até 1");
for (i = 30; i >= 1; i--);
{
  // Marca os números divisíveis por 4 [número]
  if (i % 4 == 0) {
    console.log(`[${i}]`);
  }

  // Se não for divisível por 4 exibe sem []
  else {
    console.log(i);
  }
  console.log("FIM");
}
