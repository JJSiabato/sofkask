import InsertComponent from "../../behavior/InsertComponent.js";
import { ajax } from "../../helpers/ajax.js";
import askApi from "../../helpers/ask-api.js";
import Loader from "../Loader.js";
import Results from "../resultado/Results.js";
import { FormAsk } from "./FormAsk.js";

export function Test(){ 
    Loader(true)
        let title = "Responde las siguientes preguntas"
        ajax({        
        url:askApi.QUESTION_API_URL,
        callBackSuccess:(elements)=>{
            
            let UI;
            let count = 0
            let ask = elements[0].questions;         
            UI = FormAsk(ask[count])
            Loader(false)
            InsertComponent(UI, "section", title)
            document.addEventListener("submit", ()=>{
                if(count < ask.length){
                UI = FormAsk(ask[count])
                InsertComponent(UI, "section")                
                count = count += 1;}
                else{
                Results()                
            } 
            })
            count = count += 1;      
        }
    }
    
    )}