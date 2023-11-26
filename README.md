# Desafio - Escribo

### Descrição do problema

O programa deve receber como entrada um número inteiro positivo e retornar o somatório dos números inteiros positivos divisíveis por 3 ou 5 que sejam menores que a entrada.

### Algorítmo da solução

Se analisarmos os múltiplos de 3 ou 5, temos a seguinte sequência:

- 3, 5, 6, 9, 10, 12, 15, 18, 20, 21, 24, 25, 27, 30, 33, 35, 36, 39, 40, ...

Se pegarmos agora a sequência de subtrações entre um divisor e o divisor anterior a este, ou seja, a sequência 5-3, 6-5, 9-6, 10-9, ..., obtemos a seguinte sequência:

- 2, 1, 3, 1, 2, 3, 3, 2, 1, 3, 1, 2, 3, 3, 2, 1, 3, 1, ...

Perceba que esta sequência nada mais é do que a repetição da sequência `A=[2, 1, 3, 1, 2, 3, 3]`. Em outras palavras, podemos saber quem é o próximo múltiplo de 2 ou 3 sem necessariamente testar os próximos números até encontrar algum divisível por 2 ou 3. Basta que somemos o divisor atual pela elemento correspondendo de `A`.

### Rodando o código

Rode o arquivo `desafio.js` usando o comando `node`:

```bash
node desafio.js N
```

Onde `N` é a entrada do problema.
