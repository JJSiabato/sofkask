// Funcion constructora de footer, solo se ejecuta en pantallas mayores a 600px

export default function Footer(){
    const $footer = document.createElement("footer");
    $footer.id = "footer";
    
    $footer.innerHTML = `
    <nav class="footer">
        <p>Contacta al desarrollador &#128077</p>
        <ul>
            <a href="https://github.com/JJSiabato" target="_blank" rel="noopener">GitHub</a>
            <a href="https://www.linkedin.com/in/johnsiabato/" target="_blank" rel="noopener">Linkedin</a>
            <a href="https://sofkau.com/" target="_blank" rel="noopener">Sofka U</a>
        </ul>
    </nav>
    `
    return $footer
}

