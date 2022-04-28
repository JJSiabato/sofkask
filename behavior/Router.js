import { GroupCategory } from "../components/categorias/GroupCards.js";
import { Test } from "../components/tests/Test.js";

export function Router(){
    let {hash} = location;
    console.log(hash)

    switch (hash) {
        case "#/" :
            GroupCategory()
            break;
        case "":
            GroupCategory()
            break;   
        case "#/preguntas":
            Test();
            break;   
    
        default:
            break;
    }
}