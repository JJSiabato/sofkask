export function FormAsk(props){

let {question, nivel, options} = props;
let levelNote = "";

switch (nivel){
    case 1 :
        levelNote = "Estamos calentando";
    break;
    case 2:
        levelNote = "Esto ya esta que quema";
    break;
    case 3:
        levelNote = "awww... ya esta muy difícil";
    break;
    default:
        levelNote = ""
}
   
return`
    <form id="formAsk" class="container-form">
    <span>Nivel ${nivel}: ${levelNote}</span>
    <p>${question}</p>
    <div>
        <input type="radio" id="pregunta" name="answer" value="1"><label for="pregunta">${options.res1}</label><br/>
        <input type="radio" id="pregunta2" name="answer" value="2"><label for="pregunta2">${options.res2}</label><br/>
        <input type="radio" id="pregunta3" name="answer" value="3"><label for="pregunta3">${options.res3}</label><br/>
        <input type="radio" id="pregunta4" name="answer" value="4"><label for="pregunta4">${options.res4}</label>
        <br/>
        <div class="container-button"><input type="submit" id="btnSubmit" value="Siguiente pregunta"></div>
    </div>
    </form>
`
}

