
export function renderCongestionAttack(container) {

let txRate = 100;

container.innerHTML = `

<div class="info-box">

    <h2>Congestión de Red</h2>

    <p>
        Una blockchain solo puede procesar una cantidad limitada de transacciones en cada bloque.
    </p>

    <p>
        Cuando llegan más transacciones de las que la red puede procesar, estas se acumulan temporalmente en la mempool.
    </p>

    <p>
        Podemos imaginar la mempool como una sala de espera donde las transacciones permanecen hasta que un minero o validador las incorpora a un bloque.
    </p>

    <p>
        Utiliza esta simulación para aumentar el tráfico de la red y observar cómo afecta a la mempool, a los tiempos de espera y a las comisiones.
    </p>

</div>

<div class="info-box">

    <label>

        Transacciones por minuto:
        <strong id="txRateValue">${txRate}</strong>

    </label>

    <input
        id="txSlider"
        type="range"
        min="50"
        max="1000"
        value="${txRate}"
        style="width:100%;margin-top:15px;"
    >

</div>

<div class="info-box">

    <h3>Actividad de la red</h3>

    <p>
        Cuantas más transacciones lleguen, más difícil será para la red procesarlas rápidamente.
    </p>

    <div
        style="
            width:100%;
            height:40px;
            background:#1f2937;
            border-radius:10px;
            overflow:hidden;
            margin-top:15px;
        ">

        <div
            id="mempoolBar"
            style="
                height:100%;
                width:10%;
                background:#22c55e;
                transition:.5s;
            ">
        </div>

    </div>

    <p id="mempoolInfo" style="margin-top:15px;"></p>

</div>

<div class="info-box">

    <h3>Estado de la red</h3>

    <div id="networkStatus"></div>

</div>

<div class="info-box">

    <h3>Tiempo estimado de confirmación</h3>

    <div id="confirmationTime"></div>

</div>

<div class="info-box">

    <button
        id="startSimulation"
        class="hero-button">

        Simular actividad

    </button>

</div>

<div
    id="simulationResult"
    class="info-box"
    style="display:none;">
</div>

`;

const slider = document.getElementById("txSlider");
const txRateValue = document.getElementById("txRateValue");
const mempoolBar = document.getElementById("mempoolBar");
const mempoolInfo = document.getElementById("mempoolInfo");
const networkStatus = document.getElementById("networkStatus");
const confirmationTime = document.getElementById("confirmationTime");
const simulationResult = document.getElementById("simulationResult");
const startSimulation = document.getElementById("startSimulation");

function updateView() {

    txRate = parseInt(slider.value);

    txRateValue.textContent = txRate;

    let occupancy;
    let pendingTransactions;
    let waitTime;

    if(txRate < 250){

        occupancy = 20;
        pendingTransactions = 150;
        waitTime = "1-2 minutos";

        mempoolBar.style.background = "#22c55e";

        networkStatus.innerHTML = `
            <p>
                ✅ La red funciona con normalidad.
            </p>

            <p>
                Los bloques tienen espacio suficiente para procesar la mayoría de transacciones.
            </p>
        `;

    }
    else if(txRate < 500){

        occupancy = 45;
        pendingTransactions = 1200;
        waitTime = "5-10 minutos";

        mempoolBar.style.background = "#f59e0b";

        networkStatus.innerHTML = `
            <p>
                ⚠️ La actividad está aumentando.
            </p>

            <p>
                Algunas transacciones comienzan a acumularse en la mempool.
            </p>
        `;

    }
    else if(txRate < 800){

        occupancy = 75;
        pendingTransactions = 6500;
        waitTime = "20-40 minutos";

        mempoolBar.style.background = "#fb923c";

        networkStatus.innerHTML = `
            <p>
                ⚠️ La red está congestionada.
            </p>

            <p>
                Llegan más transacciones de las que los bloques pueden procesar.
            </p>
        `;

    }
    else{

        occupancy = 95;
        pendingTransactions = 25000;
        waitTime = "Más de 1 hora";

        mempoolBar.style.background = "#ef4444";

        networkStatus.innerHTML = `
            <p>
                🚨 La mempool está saturada.
            </p>

            <p>
                Las transacciones se acumulan rápidamente y los retrasos aumentan.
            </p>
        `;

    }

    mempoolBar.style.width = occupancy + "%";

    mempoolInfo.innerHTML = `
        <strong>Transacciones pendientes:</strong>
        ${pendingTransactions.toLocaleString()}
    `;

    confirmationTime.innerHTML = `
        <strong>${waitTime}</strong>
    `;

}

slider.addEventListener("input", updateView);

startSimulation.addEventListener("click", () => {

    simulationResult.style.display = "block";

    if(txRate < 250){

        simulationResult.innerHTML = `

            <h3>Resultado de la simulación</h3>

            <p>
                La cantidad de transacciones es inferior a la capacidad de procesamiento de la red.
            </p>

            <p>
                Los usuarios reciben confirmaciones rápidas y las comisiones suelen mantenerse bajas.
            </p>

            <hr>

            <h3>¿Es necesario hacer algo?</h3>

            <p>
                No. La red dispone de capacidad suficiente para funcionar correctamente.
            </p>

        `;

    }
    else if(txRate < 500){

        simulationResult.innerHTML = `

            <h3>Resultado de la simulación</h3>

            <p>
                La mempool comienza a llenarse y aparecen pequeños retrasos.
            </p>

            <p>
                Los mineros empiezan a priorizar algunas transacciones frente a otras.
            </p>

            <hr>

            <h3>¿Cómo puede solucionarse?</h3>

            <ul>
                <li>Aumentando la capacidad de los bloques.</li>
                <li>Optimizando el protocolo.</li>
                <li>Utilizando soluciones de segunda capa.</li>
            </ul>

        `;

    }
    else if(txRate < 800){

        simulationResult.innerHTML = `

            <h3>Resultado de la simulación</h3>

            <p>
                La blockchain recibe más transacciones de las que puede procesar.
            </p>

            <p>
                Muchas operaciones permanecen esperando varios bloques antes de ser confirmadas.
            </p>

            <p>
                Las comisiones aumentan porque los usuarios compiten por entrar en los siguientes bloques.
            </p>

            <hr>

            <h3>¿Cómo se reduce la congestión?</h3>

            <ul>
                <li>Redes de segunda capa como Lightning Network.</li>
                <li>Mayor capacidad de procesamiento.</li>
                <li>Mejoras del protocolo blockchain.</li>
                <li>Agrupación y optimización de transacciones.</li>
            </ul>

        `;

    }
    else{

        simulationResult.innerHTML = `

            <h3>🚨 Congestión extrema</h3>

            <p>
                La mempool contiene miles de transacciones pendientes.
            </p>

            <p>
                Los bloques no tienen capacidad suficiente para absorber toda la actividad de la red.
            </p>

            <p>
                Las comisiones aumentan considerablemente y algunas transacciones pueden tardar horas en confirmarse.
            </p>

            <hr>

            <h3>¿Cómo intenta blockchain solucionar este problema?</h3>

            <ul>
                <li>Uso de soluciones Layer 2 como Lightning Network.</li>
                <li>Incremento de la capacidad de los bloques.</li>
                <li>Optimización del protocolo.</li>
                <li>Blockchains capaces de procesar más transacciones por segundo.</li>
            </ul>

            <hr>

            <h3>El trilema blockchain</h3>

            <p>
                Mejorar la velocidad no siempre es sencillo.
            </p>

            <p>
                Las blockchains deben buscar un equilibrio entre:
            </p>

            <ul>
                <li>🔒 Seguridad</li>
                <li>🌍 Descentralización</li>
                <li>🚀 Escalabilidad</li>
            </ul>

            <p>
                Mejorar uno de estos aspectos suele implicar sacrificar parcialmente alguno de los otros.
            </p>

        `;

    }

});

updateView();

}