# Comentários

* Não irá afetar o seu código
* Ajuda a lebrar blocos de códigos
* Deixa dicas para leitura
* Ajusa outros a entenderem
* Nuca esqueça de fechar um comentário aberto

Comentários começam com `/*` e terminam com `*/`

```css
/* Básico */
/*----------------------*/
body {
    font: 1em/150% Helvetica, Arial, sans-serif;
    padding: 1em;
    margin: 0 auto;
    max-width: 33em;
}

@media (min-width: 70em) {
    /* Let's special case the global font size. On large screen or window,
    we increase the front size for better readability. */
    body{
        font-size: 130%;
    }
}

h1 {font-size: 1.5rem;}

/* Elementos específicos */
/*-------------------------------------*/
div p, #id:first-line {
    background-color: red;
    border-radius: 3px;
}

div p {
    margin: 0;
    padding: 1rem;
}

div p + p {
    padding-top: 0;
}
```
* Você poderá usar para desabilitar partes do seu código 
  
```css
/*.special {
    color: red;
}*/

p {
    color:blue;
}
```