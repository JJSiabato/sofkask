import InsertComponent from "../../behavior/InsertComponent.js"
import askApi from "../../helpers/ask-api.js"

export default function Main(){
    let url = askApi.DOMAIN;
    console.log(url)
    let UI = `
<div class="modal">
    <div class="modal-content">
        <h1>Sofkask</h1>
        <p>Aquí podrás medir tus conocimientos con pruebas técnicas, ponte comodo...</P>
        <h4>¿Estás listo?</h4>    
            <form action="${url}/ini" id="formIn" class="formIn" method="post">
                <label for="user">Ingrese su usuario</label>
                <input type="text" name="name" id="user"><br/>
                <input type="submit" value="Empecemos" class="btn-primary">
                <p>*si no tiene un Usuario, escriba uno y memorícelo</p>
            </form>
    </div> 
</div>
    `
InsertComponent(UI, "root")
}