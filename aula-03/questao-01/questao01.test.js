const calcularMedia = require("./questao01");

describe('Teste para a função calcularMedia', () => {

   test('Testar se a função calcular corretamente a média', () => {
      expect(calcularMedia([8, 8, 2])).toBe(6);
   });

   test('Testar se a função null retorna um erro ao receber um array vazio', () => {
      expect(calcularMedia([])).toBeNull();
   });

   test('Testar se o tipo de dado não é um array', () => {
      expect(calcularMedia("Joel")).toThrow('Não é possível realizar o calculo')
   });
})