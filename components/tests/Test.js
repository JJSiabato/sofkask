import InsertComponent from "../../behavior/InsertComponent.js";
import { ajax } from "../../helpers/ajax.js";
import askApi from "../../helpers/ask-api.js";
import { FormAsk } from "./FormAsk.js";

export function Test(){ 
        let title = "Responde las siguientes preguntas"
        ajax({        
        url:askApi.QUESTION_API_URL,
        callBackSuccess:(elements)=>{
            let data;
            let count = 0
            let ask = elements[0].questions;         
            data = FormAsk(ask[count])
            InsertComponent(data, "section", title)
            document.addEventListener("submit", ()=>{
                if(count < ask.length){
                data = FormAsk(ask[count])
                InsertComponent(data, "section")                
                count = count += 1;}
                else{
                data=`<h1>terminaste...</h1>`
                InsertComponent(data, "section")
            } 
            })
            count = count += 1;      
        }
    }
    
    )}