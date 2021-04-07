# At-rules

* Está relacionando ao comportamento do CSS
* começa com o sinal de `@` seguido do identificador e valor
  
## Exemplo comuns 

- @import       /* incluir um CSS externo */
- @media        /* regras condicionais para dispositvos */
- @font-face    /* fontes externas */
- @keyframes    /* Animation */

```css
@import url("http://local.com/style.css");

@media (min-width:500px) {
    /* rules here */
}

@font-face {
    /* rules here */
}

@keyframes nameofanimation {
    /* rules here */
}