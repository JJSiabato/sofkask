//Funcion constructora de header
export function Header(){
    const $header = document.createElement("header");
    $header.id = "header";
    $header.innerHTML = `<h1>Sofkask</h1>
    <em>Aquí podrás realizar test's de diferentes materias</em>`
    return  $header;     
}

