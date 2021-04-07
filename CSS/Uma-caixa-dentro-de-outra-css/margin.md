## margin

Espaços entre os elementos 

- margin-top | margin-right | margin-bottom | margin-left
- values: `<length>` | `<percentagem>` | auto

```css
div {
    /*shorthand*/
    margin: 12px 16px 10px 4px;
    margin: 12px 16px 0;
    margin: 8px 16px;
    margin: 8px;
}
```

* Cuidado com o margin collapsing (top se junto ao bottom)
    quando a margin-bottom de um elemento que esta a cima se junta com o margin-top de um elemento que está abaixo, não somando os valores de cada margin mas sim pegando o mairo e mantendo para os dois


https://developer.mozilla.org/en-US/docs/Web/CSS/margin