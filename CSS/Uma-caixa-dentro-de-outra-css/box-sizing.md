## box-sizing

Como será calculado o tamanho total da caixa?

- content-box|border-box

```css
div {
    box-sizing: border-box;
}
```
* se não definirmos que o tamanho da caixa (box-sizing) relativo ao tamanho das bordas (border-box) e não ao conteúdo (content-box) a caixa fica alterando o valor de seu tamanho de acordo com o tamanho do conteúdo dela.