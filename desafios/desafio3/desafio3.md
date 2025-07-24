# DESAFIO 3

## Escrevendo as classes de um jogo

**O que deve ser utilizado**

- Variáveis
- Operadores
- Laços de Repetição
- Estruturas de Decisão
- Funções 
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo(ex:guerreiro, mago, monge, ninja)

além disso, deve ter um método chamado atacar que deve atender os seguintes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}
- aonde o {tipo} deve ser concatenado o tipo que está na propriedade classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo,seguindo a tabela abaixo:

se mago -> no ataque exibir(usou magia)
se guerreiro -> no ataque exibir(usou espada)
se monge -> no ataque exibir(usou artes maciais)
se ninja -> no ataque exibir(usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:
- "o {tipo} usando {ataque}"
ex: O mago atacou sando magia
o guerreiro atacou usando espada