// conexión genérica a API

import InsertComponent from "../behavior/InsertComponent.js";

export function ajax(props){
    let {url, callBackSuccess} = props;
    fetch(url)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => callBackSuccess(json))
    .catch(err =>{
        let message = err.statusText || `¡Oh! no... Ha ocurrido un error inesperado, favor actualice la pagina o intente de nuevo más tarde...`;
        let error = `<div class="error">${message}</div>`
        InsertComponent(error, "section")
    });
}