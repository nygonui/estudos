# Trablhando com fontes

Tipografia transmite mensagem

    - negrito
    - tamanho
    - estilo

--------------------------------------------------------------

## Basic Font Properties

* font-family
* font-weight
* font-style
* font-size

--------------------------------------------------------------

## Font family

* Tipo de fonte de um elemento
* Lista de fontes e ordem de prioridade
* inclui *fallback* font 

```css
p {
    font-family: "Times New Roman", Times, serif;
}
```

- serif
- sans-serif

* o após o 1º valor atribuido a propriedade font-family, são os valores fallback, que funcionarão caso a font que você desejese não tenha em determinado local
* fonts serif são aquelas fontes que as estremidades das letras tem um traço e as sans-serif elas são lisas, até aonde pude perceber usa-se mais as sans-serif.

--------------------------------------------------------------

## Font Weight

* Peso da font

```css
p {
    font-weight: bold;
}
```
https://www.w3.org/TR/css-font-3/

- Dependendo da font ela não terá todos os valores disponíveis para a atribuição do peso (font-weight)

--------------------------------------------------------------

## Font Style

* O estilo da fonte

```css
span {
    font-style: italic;
}
```
https://www.w3.org/TR/css-font-3/

- Dependendo da font-family o font-style não terá todos os valores diponíveis.

--------------------------------------------------------------

## Font Size

* O tamanho da font

```css
p {
    font-size: 18px;
}
```

--------------------------------------------------------------

## Web Fonts

- fontes do sistema x fonte da web
- como usar fontes para web?

    * @font-face
    * @import
    * link

### Referências 
https://www.w3.org/TR/css-fonts-3/
https://css-tricks.com/snippets/css/using-font-face/