## display: block vs display: inline

- Como as caizas se comportam em relação às outras caixas
- Comportamento externo das caixas 

**block**                           
- Ocupas toda a linha, colocando o próximo elemento abaixo desse
**inline**
- Elemento ao lado do outro

**block** 
- width e height são respeitados
**inline**
- width e height não funcionam

**block**
- padding, margin, border irão funcionar normalmente
**inline**
- Somente valores horizontais de margin, padding e border

exemplos
block: `<p> <div> <section>`, todos os headings `<h1><h2>...`
inline: `<a> <strong> <span> <em>` 