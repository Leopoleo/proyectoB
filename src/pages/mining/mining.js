import { miningSteps } from "./data/miningSteps.js";
import { renderMiningVisualizer } from "./components/MiningVisualizer.js";
import { renderMiningPanel } from "./components/MiningPanel.js";

let currentStep = 0;

export function renderMining(container){

    container.innerHTML = `

        <section class="page-header">

            <h1>
                Minería
            </h1>

            <p>
                Aprende cómo funciona la minería y conviértete en minero por unos minutos.
            </p>

        </section>

        ${renderMiningVisualizer()}

        <div class="simulation-controls">

            <button id="startMining">
                Comenzar explicación
            </button>

            <button
                id="nextStep"
                style="display:none;">

                Siguiente

            </button>

        </div>

        ${renderMiningPanel()}

        <div class="mining-info">

            <h2>
                Laboratorio de minería
            </h2>

            <p>
                Ahora es tu turno.
            </p>

            <p>
                En una blockchain real los mineros realizan millones de intentos hasta encontrar un hash válido.
            </p>

            <p>
                En esta simulación utilizaremos una versión simplificada para entender el concepto.
            </p>

            <p>
                Introduce un nonce e intenta encontrar un hash que cumpla la dificultad establecida.
            </p>

            <div style="margin-top:20px;">

                <label>
                    Dificultad
                </label>

                <select id="difficultySelect">

                    <option value="00">
                        Fácil (empieza por 00)
                    </option>

                    <option value="000" selected>
                        Media (empieza por 000)
                    </option>

                    <option value="0000">
                        Difícil (empieza por 0000)
                    </option>

                </select>

            </div>

            <div style="margin-top:20px;">

                <input
                    type="number"
                    id="nonceInput"
                    placeholder="Introduce un nonce"
                >

                <button
                    id="mineButton"
                    class="hero-button">

                    Minar

                </button>

                <button
                    id="autoMineButton"
                    class="hero-button">

                    Minería automática

                </button>

            </div>

            <div
                id="miningLabResult"
                class="info-box"
                style="margin-top:20px;">

                Esperando intento...

            </div>

        </div>

    `;

    document
        .getElementById("startMining")
        .addEventListener(
            "click",
            startMining
        );

    document
        .getElementById("nextStep")
        .addEventListener(
            "click",
            () => {

                currentStep++;

                if(
                    currentStep <
                    miningSteps.length
                ){

                    renderStep();

                }else{

                    document
                    .getElementById("nextStep")
                    .innerHTML =
                    "Finalizado";

                    document
                    .getElementById("nextStep")
                    .disabled = true;

                }

            }
        );

    initMiningLab();

}

function startMining(){

    currentStep = 0;

    document
        .getElementById("startMining")
        .style.display = "none";

    document
        .getElementById("nextStep")
        .style.display = "inline-block";

    renderStep();

}

function renderStep(){

    const step =
        miningSteps[currentStep];

    document
        .getElementById("nonceValue")
        .innerHTML =
        step.nonce;

    document
        .getElementById("hashValue")
        .innerHTML =
        step.hash;

    document
        .getElementById("miningTitle")
        .innerHTML =
        step.title;

    document
        .getElementById("miningText")
        .innerHTML =
        step.text;

    const result =
        document.getElementById(
            "hashResult"
        );

    if(step.valid){

        result.innerHTML =
            "✅ Hash válido";

        document
            .getElementById("generatedBlock")
            .innerHTML = `

            <div class="block-preview success-block">

                <h3>
                    📦 Bloque generado
                </h3>

                <p>
                    Hash:
                    ${step.hash}
                </p>

                <p>
                    Nonce:
                    ${step.nonce}
                </p>

                <p>
                    Transacciones:
                    4
                </p>

                <p>
                    Recompensa:
                    6.25 BTC
                </p>

            </div>

        `;

    }else{

        result.innerHTML =
            "❌ Hash inválido";

    }

}

function initMiningLab(){

    document
        .getElementById("mineButton")
        .addEventListener(
            "click",
            tryMining
        );

    document
        .getElementById("autoMineButton")
        .addEventListener(
            "click",
            autoMining
        );

}

function tryMining(){

    const nonce =
        parseInt(
            document
                .getElementById("nonceInput")
                .value || 0
        );

    const difficulty =
        document
            .getElementById("difficultySelect")
            .value;

    const result =
        document
            .getElementById("miningLabResult");

    const hash =
        generateHash(nonce);

    const valid =
        hash.startsWith(difficulty);

    if(valid){

        result.innerHTML = `

            <h3>
                🎉 ¡Bloque minado!
            </h3>

            <p>
                Nonce: ${nonce}
            </p>

            <p>
                Hash: ${hash}
            </p>

            <p>
                El hash cumple la dificultad.
            </p>

            <p>
                Recompensa:
                6.25 BTC
            </p>

        `;

    }else{

        result.innerHTML = `

            <h3>
                Intento fallido
            </h3>

            <p>
                Nonce: ${nonce}
            </p>

            <p>
                Hash: ${hash}
            </p>

            <p>
                El hash no cumple la dificultad.
            </p>

            <p>
                Sigue probando otros valores.
            </p>

        `;

    }

}

function autoMining(){

    const difficulty =
        document
            .getElementById("difficultySelect")
            .value;

    const result =
        document
            .getElementById("miningLabResult");

    let nonce = 0;

    result.innerHTML =
        "⛏️ Iniciando minería automática...";

    const interval = setInterval(() => {

        nonce++;

        const hash =
            generateHash(nonce);

        result.innerHTML = `

            <p>
                Probando nonce:
                ${nonce}
            </p>

            <p>
                Hash:
                ${hash}
            </p>

        `;

        if(
            hash.startsWith(
                difficulty
            )
        ){

            clearInterval(interval);

            result.innerHTML = `

                <h3>
                    🎉 ¡Hash válido encontrado!
                </h3>

                <p>
                    Nonce:
                    ${nonce}
                </p>

                <p>
                    Hash:
                    ${hash}
                </p>

                <p>
                    Este es exactamente el trabajo que realizan los mineros:
                    probar una enorme cantidad de valores hasta encontrar uno válido.
                </p>

            `;

        }

    }, 100);

}

function generateHash(nonce){

    const value =
        (nonce * 7919 + 12345)
        .toString(16);

    return value
        .padStart(8,"0");

}