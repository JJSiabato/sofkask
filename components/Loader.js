//funcion constructora de spinner para UX en carga de datos

import InsertComponent from "../behavior/InsertComponent.js";

export default function Loader(state){
    let loader = `<div class="loading"><img src="./assets/img/spinner.png"/></div>`
    console.log(state)
    return(state ? InsertComponent(loader, "section"):"")
   
}