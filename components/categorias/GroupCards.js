import { ajax } from "../../helpers/ajax.js";
import askApi from "../../helpers/ask-api.js";
import { CategoryCard } from "./CategoryCard.js";
import InsertComponent from "../../behavior/InsertComponent.js";

export function GroupCategory(){
    let title = "Categorías"
    ajax({
        url: askApi.PHOTOS_API_URL,
        callBackSuccess: (categories) =>{
            let groupCards = ""
            categories = categories.slice(0, 10)
            categories.forEach(category =>( groupCards += CategoryCard(category)));
            InsertComponent(groupCards, "section")
        }
    })
    document.getElementById("section").classList.add("grid-fluid");
}