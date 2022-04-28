import { Router } from "./behavior/Router.js"
import Footer from "./components/Footer.js"
import { GroupCategory } from "./components/categorias/GroupCards.js"
import { Header } from "./components/Header.js"
import { Section } from "./components/Section.js"

export function App(){
    const $root = document.getElementById("root")
    $root.appendChild(Header())
    $root.appendChild(Section())
    $root.appendChild(Footer())
    Router()
    
}