// funcion constructora de UI que muestra los resultados de la prueba

export default function BuilderResult(){


    return`
    <div class="result">
        <h4>Has terminado tu prueba</h4>
        <div class="score">
            <p>Tu puntaje es:</p>
            <strong>23/25</strong>
        </div>
        <div class="container-button">
            <button class="btn-primary">Realizar otra prueba</button>
            <button class="btn-primary">Salir</button>
        </div>
    </div>
    `
}