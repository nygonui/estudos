## border (e outline)

As bordas da caixa

- value: `<border-style>` | `<border-width>` | `<border-color>`
    - syle: solid | dotted | dashed | double | goove | ridge | inset | outset
    - width: `<length>`
    - color: `<color>`

```css
div {
    /*shorthand*/
    border-top: solid 2px; /*top | hight | bottom | left*/

    /*super-shorthand*/
    /*style*/
    border: solid; 

    /*width <length> | style*/
    border: 2px dotted;

    /*style | color*/
    border: outset #f33;

    /*width | style | color*/
    border: 2px solid green;
}
```

### E outline?

- difere em 4 sentidos:
  - não modifica o tamanho da caixa, pois não é parte do Box Model
  - Poderá ser diferente de retangular
  - Não permite ajuste individuais
  - Mais usado pelo user agent para acessibilidade

https://developer.mozilla.org/en-US/docs/Web/CSS/border