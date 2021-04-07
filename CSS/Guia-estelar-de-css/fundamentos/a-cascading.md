# A Cascata (cascading)

A escolha do browser de qual regra aplicar, caso haja muitas regras para o mesmo elemento.

* Seu estilo é lido de cima para baixo
  
É levado em consideração 3 fatores

1. Origem do estilo
2. Especidade
3. Importância

### Origem do estilo

inline > tag style > tag link 

### Especidade

É um cálculo matemático, onde, cada tipo de seletor e origem do estilo, possuem valores a serem considerados.

0. Universal seletor, combinators e nagation pseudo-class(:not{})
1. Element type selector e pseudo-elements(::before, ::after)
10. Classes e attribute selectors ([type="radio"])
100. ID selector
1000. Inline
      
### A regra !important 

* cuidado, evite o uso
* não considerado uma boa prática
* quebra o fluxo natural da cascata
* geralmente usada quando você está usando um biblioteca css que não foi você quem fez e por 
  algum motivo não consegue acessar algum estilo