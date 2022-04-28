// función que inserta componentes  de manera dinámica
// requiere 3 parametros el contenido a insertar(data), el lugar donde se va a insertar(tag), *el título(title)
//*opcional

export default function InsertComponent(data, tag, title){    
    const $tag = document.getElementById(tag);
    $tag.innerHTML = data; 

    if(title){
    $tag.insertAdjacentHTML('beforebegin', `<span class="title">${title}:</span>`);
    }   
}