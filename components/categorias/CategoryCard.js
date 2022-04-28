//clase de tarjetas de categorias

export function CategoryCard(props){
let {category, title, url} = props;

return`
    <article class="cards">
        <img src="${url}" alt="${title}"/>
        <div class="container-cards">
        <h4><b>${title}</b></h4>
        <p>${category}</p>
        </div>
    </article>
`
} 