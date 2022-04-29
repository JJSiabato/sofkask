import { GroupCategory } from "../components/categorias/GroupCards.js";
import Main from "../components/otras/main.js";
import { Test } from "../components/tests/Test.js";

export function Router(){
    let {hash} = location;

    switch (hash) {
        case "#/" :
            Main()
            break;
        case "" :
            Main()
            break;
        case "#/categories":
            GroupCategory()
            break;   
        case "#/questions":
            Test();
            break;   
    
        default:
            break;
    }
}