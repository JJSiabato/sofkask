// Función que une los datos recibidos y la UI del construtor para enviarlos al DOM

import InsertComponent from "../../behavior/InsertComponent.js";
import BuilderResult from "./BuilderResult.js";

export default function Results(){
    let UI;
    UI=BuilderResult()
    InsertComponent(UI, "section")

}