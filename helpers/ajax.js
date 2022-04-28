// conexión genérica a API

export function ajax(props){
    let {url, callBackSuccess} = props;
    fetch(url)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => callBackSuccess(json))
    .catch(err =>{
        let message = err.statusText || "Ha ocurrido un error inesperado, favor actualice la pagina o intente más tarde";
        document.getElementById("root").innerHTML=`<div class="error"><p><span>ERROR</span> ${err.status}:${message}</p></div>`;
    });
}