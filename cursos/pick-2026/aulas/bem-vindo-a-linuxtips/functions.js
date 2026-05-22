// Escreva suas funções e adicione testes inline!
// Formato: // TEST: nomeFuncao(args) === resultadoEsperado

function soma(a, b) {
  return a + b;
}
// TEST: soma(1, 2) === 3
// TEST: soma(0, 0) === 0
// TEST: soma(-1, 1) === 0

function fatorial(n) {
  if (n <= 1) return 1;
  return n * fatorial(n - 1);
}
// TEST: fatorial(5) === 120
// TEST: fatorial(0) === 1
// TEST: fatorial(1) === 1
