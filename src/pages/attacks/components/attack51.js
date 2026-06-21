
export function renderAttack51(container) {

let attackerPower = 30;

container.innerHTML = `

<div class="info-box">

    <h2>Ataque del 51%</h2>

    <p>
        Uno de los ataques más conocidos contra blockchain es el denominado <strong>Ataque del 51%</strong>.
    </p>

    <p>
        En una red basada en Proof of Work, miles de mineros compiten para crear nuevos bloques.
    </p>

    <p>
        La potencia de minado representa la capacidad de generar bloques. Cuanta más potencia tiene un participante, más probabilidades tiene de encontrar nuevos bloques antes que los demás.
    </p>

    <p>
        Si un único actor consigue controlar más del 50% de toda la potencia de minado de la red, podría crear bloques más rápido que el resto de participantes juntos.
    </p>

    <p>
        Esto le permitiría construir una blockchain alternativa y, en determinadas circunstancias, realizar ataques como el doble gasto.
    </p>

    <p>
        Utiliza la simulación para observar qué ocurre cuando el atacante controla diferentes porcentajes de la potencia total de la red.
    </p>

</div>

<div class="info-box">

    <label>

        Potencia del atacante:
        <strong id="powerValue">${attackerPower}%</strong>

    </label>

    <input
        id="powerSlider"
        type="range"
        min="0"
        max="100"
        value="${attackerPower}"
        style="width:100%;margin-top:15px;"
    >

</div>

<div class="info-box">

    <h3>Distribución de potencia de minado</h3>

    <div style="margin-top:20px;">

        <div style="margin-bottom:20px;">

            <strong>
                Red honesta (${100-attackerPower}%)
            </strong>

            <div
                id="honestBar"
                style="
                    height:35px;
                    width:${100-attackerPower}%;
                    background:#3b82f6;
                    border-radius:8px;
                    transition:.5s;
                    margin-top:5px;
                ">
            </div>

        </div>

        <div>

            <strong>
                Atacante (${attackerPower}%)
            </strong>

            <div
                id="attackerBar"
                style="
                    height:35px;
                    width:${attackerPower}%;
                    background:#ef4444;
                    border-radius:8px;
                    transition:.5s;
                    margin-top:5px;
                ">
            </div>

        </div>

    </div>

</div>

<div id="attackStatus" class="info-box"></div>

<div class="info-box">

    <button
        id="startMining"
        class="hero-button">

        Iniciar simulación

    </button>

</div>

<div
    id="simulationArea"
    class="info-box"
    style="display:none;">

    <h3>Competición de minería</h3>

    <div
        style="
            display:grid;
            grid-template-columns:1fr 1fr;
            gap:30px;
            margin-top:20px;
        ">

        <div>

            <h4>Red honesta</h4>

            <div id="honestChain">

                Bloque 100

            </div>

        </div>

        <div>

            <h4>Atacante</h4>

            <div id="attackerChain">

                Bloque 100

            </div>

        </div>

    </div>

</div>

<div
    id="simulationResult"
    class="info-box"
    style="display:none;">
</div>

`;

const slider = document.getElementById("powerSlider");
const powerValue = document.getElementById("powerValue");
const honestBar = document.getElementById("honestBar");
const attackerBar = document.getElementById("attackerBar");
const attackStatus = document.getElementById("attackStatus");
const startMining = document.getElementById("startMining");
const simulationArea = document.getElementById("simulationArea");
const simulationResult = document.getElementById("simulationResult");

function updateStatus() {

    attackerPower = parseInt(slider.value);

    powerValue.textContent = attackerPower + "%";

    honestBar.style.width = (100-attackerPower) + "%";
    attackerBar.style.width = attackerPower + "%";

    if(attackerPower < 50){

        attackStatus.innerHTML = `

            <h3>Interpretación</h3>

            <p>
                ✅ La red honesta mantiene el control.
            </p>

            <p>
                Aunque el atacante intente crear una cadena alternativa, el resto de mineros generará bloques más rápido.
            </p>

            <p>
                El ataque tiene muy pocas posibilidades de éxito.
            </p>

        `;

    }
    else if(attackerPower === 50){

        attackStatus.innerHTML = `

            <h3>Interpretación</h3>

            <p>
                ⚠️ Existe un empate entre el atacante y la red honesta.
            </p>

            <p>
                Ningún grupo tiene una ventaja clara.
            </p>

        `;

    }
    else{

        attackStatus.innerHTML = `

            <h3>Interpretación</h3>

            <p>
                🚨 El atacante controla más potencia que el resto de la red.
            </p>

            <p>
                Puede crear bloques más rápido que todos los demás mineros juntos.
            </p>

            <p>
                Esto abre la puerta a ataques de reorganización y doble gasto.
            </p>

        `;

    }

}

slider.addEventListener("input", updateStatus);

startMining.addEventListener("click", () => {

    simulationArea.style.display = "block";
    simulationResult.style.display = "none";

    const honestChain = document.getElementById("honestChain");
    const attackerChain = document.getElementById("attackerChain");

    let honestBlocks = ["Bloque 100"];
    let attackerBlocks = ["Bloque 100"];

    honestChain.innerHTML = honestBlocks.join("<br>");
    attackerChain.innerHTML = attackerBlocks.join("<br>");

    let honestHeight = 100;
    let attackerHeight = 100;

    let rounds = 0;

    const interval = setInterval(() => {

        rounds++;

        if(Math.random()*100 < (100-attackerPower)){

            honestHeight++;

            honestBlocks.push("⬜ Bloque " + honestHeight);

            honestChain.innerHTML = honestBlocks.join("<br>");

        }

        if(Math.random()*100 < attackerPower){

            attackerHeight++;

            attackerBlocks.push("🟥 Bloque " + attackerHeight);

            attackerChain.innerHTML = attackerBlocks.join("<br>");

        }

        if(rounds >= 10){

            clearInterval(interval);

            simulationResult.style.display = "block";

            if(attackerHeight > honestHeight){

                simulationResult.innerHTML = `

                    <h3>Resultado</h3>

                    <p>
                        🚨 El atacante ha generado más bloques que la red honesta.
                    </p>

                    <p>
                        Su blockchain alternativa es ahora más larga.
                    </p>

                    <p>
                        En una situación real podría intentar publicar esta cadena y sustituir parte del historial reciente.
                    </p>

                    <p>
                        Esto podría permitir ataques de doble gasto y pérdida de confianza en la red.
                    </p>

                `;

            }
            else{

                simulationResult.innerHTML = `

                    <h3>Resultado</h3>

                    <p>
                        ✅ La red honesta ha generado más bloques que el atacante.
                    </p>

                    <p>
                        La cadena principal continúa creciendo normalmente.
                    </p>

                    <p>
                        El atacante no consigue alcanzar al resto de mineros.
                    </p>

                `;

            }

        }

    }, 700);

});

updateStatus();

}