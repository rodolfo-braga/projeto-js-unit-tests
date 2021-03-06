const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    const output = productDetails('Alcool gel', 'Máscara');
    assert.strictEqual(typeof output, 'object');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(output.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof output[0] && typeof output[1], 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(output[0], output[1]);
    // Teste que os dois productIds terminam com 123.
    const firstProductId = output[0].details.productId;
    const secondProductId = output[1].details.productId;
    assert.strictEqual(firstProductId.slice(firstProductId.length - 3), '123');
    assert.strictEqual(secondProductId.slice(secondProductId.length - 3), '123');
  });
});

/*
Utilizei o método slice() para extrair uma parte de uma string
https://www.w3schools.com/js/js_string_methods.asp
*/