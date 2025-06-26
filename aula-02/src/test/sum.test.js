const sum = require('../modules/sum');  // importaçao do arquivo/modulo

describe('Testes básicos da função soma', () => {

   test('Verificar a soma de números positivos', () => {
      expect(sum(8,8)).toBe(16);  // espera que a soma (8,8) seja 16
   });
   
   test('Verificar a soma de números negativos', () => {
      expect(sum(-8,8)).toBe(0);  
   });

   test('Verificar a soma de números com texto', () => {
      expect(sum(-8,"8")).toBe("Erro não é possível realizar a soma."); 
   });
})
