# <img src="https://assets.dio.me/JdBTHUCmNxrrJUiTJ2Xr3uCb3ERnBFWVbLU0kZlfxpY/f:webp/h:120/q:80/L3RyYWNrcy85NzdkMWI0MS01ODg4LTQ0ZDctOGU0Yy01N2QyMzQ4NzQ4ZGMucG5n" > Formação Lógica de Programação - Dio

Aqui estão os desafios e códigos do curso Formação Lógica de Programação da Dio.

## 🐱‍💻Tecnologias Utilizadas:

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" width="5%"/>   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" width="5%"/>

## Introdução a Lógica de Programação

### Algoritmos e Fluxogramas

- Algoritmos: São uma sequência de passos para resolver um determinado problema ou atingir um objetivo.
- Fluxogramas: É um diagrama visual que representa a sequência de passos do algoritmo.
  
<div align="center">
  <img src="https://www.cristiancechinel.pro.br/my_files/algorithms/bookhtml/fluxograma1.png" width="20%">
</div>

### Estrutura de um Software e seu ambiente de desenvolvimento

#### Input - Process - Output

##### Entendendo os conceitos de Input, Process e Output:

- Input *(entrada)*: São os dados que o sistema recebe para ser processado.
- Process *(processamento)* : Momento em que a lógica de programação entra em ação.É onde a instrução colocada na entrada é alterada com base nas instruções do programa para depois
fornecer uma saída.
- Output *(saída)* : É o resultado final do processamento, onde a informação é enviada para o  mundo exterior.



### Variáveis
- Variáveis: É um espaço de memória de um computador que armazena um dado ou um valor que serão manipulados pelos programas durante uma execução.

Tipos de variáveis

~~~javascript
let nomePokemon = "pikachu" //String
let idade = 30 //Number - Integer
let preco = 19.99 //Number - float
let sexo = "F" // String
let opcao = true //Boolean
~~~

### Vetores e Matrizes

- Vetores: É uma estrutura de dados unidimensional que armazena vários valores de um mesmo tipo de dado, organizados em sequência.

~~~javascript
let doces = [bolo, brigadeiro, chocolate]
~~~~

- Matrizes: É uma estrutura de dados bidimensional ou multidimensional que armazena dados em linhas e colunas.
``` matriz[linha][coluna] ```

~~~javascript
let notasAlunos = [
    ["Ana",10],
    ["João",5]
    ["Maria",8.5]
]
~~~~

### Operadores

#### Operadores Aritméticos
  Utilizado para realizar operações matemáticas com valores ou variáveis.

Nome   | Operador  |  Exemplo
--------- | ------  | ------   
Adição  |  +   | ``` let soma = 1 + 5; ```
Subtração | - | ``` let diminuir = 10 - 5; ```
Multiplicação | * | ``` let multiplicar = 6 * 2; ```
Divisão | / | ``` let dividir = 8 / 4; ```
Módulo (resto da divisão) | % | ``` let resto = 15 % 2; ```

#### Operadores Relacionais
  Utilizados para comparar dois ou mais valores ou expressões pra determinar se existe uma relação entre eles.Seu resultado será dado em valor booleano(```true``` ou ```false```).

  Nome   | Operador  |  Exemplo  | Resultado  |
--------- | ------  | ------   | ---------
Igual a  |  ==  | ``` let comparar = (12 == 12); ```   | ``` true ```
Diferente de | 1= | ``` let comparar = (12 != 12); ``` | ``` false ```
Maior que | > | ``` let comparar = (10 > 5); ```  | ``` true ```
Menor que | < | ``` let comparar = (15 < 9); ```  |  ``` false ```
Maior ou igual a | >= | ``` let comparar = (8 >= 7); ```  |  ``` true ```
Menor ou igual a | <= | ``` let comparar = (10 <= 6); ```  |  ``` false ```

#### Operadores Lógicos
  Utilizados para combinar e avaliar expressões em qual o resultado é um valor booleano(```true``` ou ```false```).

Nome   | Operador  |  Exemplo
--------- | ------  | ------   
AND  |  &&   | ``` if (condicao1 && condicao2) ```
OR | `\|\|` | ``` if (condicao1 `\|\|`  condicao2) ```
NOT | ! | ``` if (!condicao) ```

#### Operadores de Atribuição
  Utilizados para atribuir um valor para uma variável.

Nome   | Operador  |  Exemplo
--------- | ------  | ------   
Atribuição  |  =   | ``` let x = 2; ```
Adição e Atribuição | += | ``` let x = 10; ```<br> ``` x += 5; ```
Subtração e Atribuição | -= | ``` let x = 10; ```<br> ``` x -= 2; ```
Multiplicação e Atribuição | *= | ``` let x = 4; ```<br> ``` x *= 6; ```
Divisão e Atribuição | /= | ``` let x = 20; ```<br> ``` x /= 4; ```
Módulo e Atribuição | %= | ``` let x = 10; ```<br> ``` x -= 3; ```

#### Operadores de Incremento e Decremento
  São operadores que adicionam ou subtraem unitário valor respectivamente.

Nome   | Operador  |  Exemplo
--------- | ------  | ------   
Incremento  |  ++   | ``` let x = 0; ```<br> ``` x++;```
Decremento | -- | ``` let x = 10;```<br> ``` x--; ```

### Estruturas de controle

#### Estruturas Condicionais
  São blocos de códigos de tomadas de decisões, possuem diferentes conjuntos de instruções baseadas na avaliação de uma condição, que pode ser verdadeira ou falsa.
 Exemplo:
 ~~~javascript
let a = 2;
let b = 6;

if(a > b){
  console.log(a+" maior que "+b);
else{
  console.log(a+" menor que "+b);
~~~

#### Estruturas Switch Case
  São diferentes blocos de códigos que são executados dependendo de uma variável ou expressão executada.
 ~~~javascript

let hora = 10;

switch (true) {
  case (hora >= 5 && hora < 12):
    console.log("Bom dia!");
    break;
  case (hora >= 12 && hora < 18):
    console.log("Boa tarde!");
    break;
  case (hora >= 18 && hora <= 23):
    console.log("Boa noite!");
    break;
  case (hora >= 0 && hora < 5):
    console.log("Boa madrugada!");
    break;
    default:
        console.log("Insira um horário!")
}
~~~

#### Estruturas de Repetição
  São laços/loops que permitem executar um bloco de notas diversas vezes até que uma condição seja satisfeita.

  ##### FOR
  Contador utlizado para executar um bloco de código diversas vezes, de acordo com uma condição específica.
 ~~~javascript
for (let i = 0; i < 5; i++) {
  console.log("O valor de i é: " + i);
}
~~~

#### While
  Contador utilizado para executar um bloco de código diversas vezes quando não sabe a quantidade de execuções de uma ação.
   ~~~javascript
let contador = 0;

while (contador < 5) {
  console.log("O contador é: " + contador);
  contador++; 
}
~~~

#### Do While
  Contador que sempre executa pelos menos uma vez o bloco de código dentro do loop.
~~~javascript
let numero;

do {

  numero = prompt("Digite um número entre 1 e 10:");
  
  numero = parseInt(numero);

} while (numero < 1 || numero > 10);

console.log(`O número que você digitou foi ${numero}.`);
}
~~~


### Funções
  É um bloco de código que pode ser reutilizado que realiza uma tarefa específica.
~~~javascript
function saudacao(nome) {
  console.log(`Olá, ${nome}! Seja bem-vindo(a).`);
}

saudacao("Maria");
saudacao("João");
~~~

#### Funções com Parâmetros
  Permite qua a função recebe dados(argumentos) externos para realizar suas operações.
~~~javascript
function calcularArea(largura, altura) {
  const area = largura * altura;
  
  console.log(`A área do retângulo é: ${area}m²`);
}

calcularArea(10, 20);
calcularArea(5, 8);
~~~~

#### Funções com Retorno
  Possui a instrução ```return``` para enviar um valor específico de volta ao local em que ele foi chamado, fazendo com que o programa use esse resultado.
  ~~~javascript
function dobrarNumero(numero) {
  return numero * 2;
}

let resultado1 = dobrarNumero(10);
console.log(resultado1); 

let resultado2 = dobrarNumero(5);
console.log(resultado2);
~~~
