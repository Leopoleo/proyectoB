
export function renderForkAttack(container) {

let currentStep = 0;

container.innerHTML = `

<div class="info-box">

    <h2>Fork temporal</h2>

    <p>
        Un fork temporal ocurre cuando dos mineros encuentran un bloque válido prácticamente al mismo tiempo.
    </p>

    <p>
        Esto no significa que la blockchain esté rota ni que exista un ataque.
    </p>

    <p>
        De hecho, es una situación normal que puede ocurrir ocasionalmente en redes como Bitcoin.
    </p>

    <p>
        Utiliza la simulación paso a paso para observar cómo se crea y cómo se resuelve automáticamente.
    </p>

</div>

<div class="info-box">

    <h3>Situación inicial</h3>

    <p>
        Imagina que toda la red conoce el Bloque 100.
    </p>

    <div id="chainView" style="font-family:monospace;line-height:2;padding:15px;">

        🟦 Bloque 100

    </div>

</div>

<div class="info-box">

    <h3>Explicación</h3>

    <div id="stepExplanation">

        Todos los nodos de la red comparten exactamente la misma blockchain.

    </div>

</div>

<div class="info-box">

    <button
        id="nextStep"
        class="hero-button">

        Siguiente paso

    </button>

</div>

`;

const nextStep = document.getElementById("nextStep");
const chainView = document.getElementById("chainView");
const stepExplanation = document.getElementById("stepExplanation");

nextStep.addEventListener("click", () => {

    currentStep++;

    switch(currentStep){

        case 1:

            chainView.innerHTML = `
                🟦 Bloque 100
                <br><br>
                ⛏️ Minero A intentando crear Bloque 101
                <br>
                ⛏️ Minero B intentando crear Bloque 101
            `;

            stepExplanation.innerHTML = `
                Dos mineros están compitiendo para crear el siguiente bloque.
            `;

            break;

        case 2:

            chainView.innerHTML = `
                🟦 Bloque 100
                <br>
                ├── 🟩 Bloque 101A
                <br>
                └── 🟨 Bloque 101B
            `;

            stepExplanation.innerHTML = `
                Los dos mineros encuentran una solución válida prácticamente al mismo tiempo.
                Ahora existen dos bloques válidos distintos.
            `;

            break;

        case 3:

            chainView.innerHTML = `
                🟦 Bloque 100
                <br>
                ├── 🟩 Bloque 101A
                <br>
                └── 🟨 Bloque 101B
            `;

            stepExplanation.innerHTML = `
                Algunos nodos reciben primero el bloque 101A y otros reciben primero el 101B.
                Temporalmente la red tiene dos versiones válidas de la blockchain.
            `;

            break;

        case 4:

            chainView.innerHTML = `
                🟦 Bloque 100
                <br>
                ├── 🟩 Bloque 101A
                <br>
                │
                └── 🟨 Bloque 101B
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🟨 Bloque 102B
            `;

            stepExplanation.innerHTML = `
                Un minero añade un nuevo bloque sobre la rama B.
                Ahora esa rama es más larga que la rama A.
            `;

            break;

        case 5:

            chainView.innerHTML = `
                🟦 Bloque 100
                <br>
                └── 🟨 Bloque 101B
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;└── 🟨 Bloque 102B
            `;

            stepExplanation.innerHTML = `
                Los nodos adoptan la cadena más larga.
                La rama A queda abandonada y toda la red vuelve a compartir una única blockchain.
            `;

            break;

        case 6:

            chainView.innerHTML = `
                🟦 Bloque 100
                <br>
                └── 🟨 Bloque 101B
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;└── 🟨 Bloque 102B
            `;

            stepExplanation.innerHTML = `
                ✅ Fork resuelto correctamente.
                La blockchain continúa funcionando con normalidad.
                Los forks temporales son una consecuencia natural de una red distribuida y normalmente se resuelven automáticamente.
            `;

            nextStep.disabled = true;
            nextStep.textContent = "Simulación finalizada";

            break;
    }

});

}