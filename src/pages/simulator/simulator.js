import { simulationSteps } from "./data/simulationSteps.js";
import { renderAnimatedFlow } from "./components/AnimatedFlow.js";

let currentStep = 0;

export function renderSimulator(container){

    container.innerHTML = `

    <section class="page-header">

        <h1>
            Simulación Blockchain
        </h1>

        <p>
            Sigue el recorrido completo de una transacción desde su creación hasta su incorporación a la blockchain.
        </p>

    </section>

    ${renderAnimatedFlow()}

    <div class="simulation-controls">

        <button id="startSimulation">
            Comenzar recorrido
        </button>

        <button
            id="nextStep"
            style="display:none;">

            Siguiente paso

        </button>

        <button
            id="restartSimulation"
            style="display:none;">

            Reiniciar

        </button>

    </div>

    <div class="simulation-info">

        <h2 id="simulationTitle">
            Esperando simulación
        </h2>

        <div id="simulationText">

            <p>
                Pulsa <strong>«Comenzar recorrido»</strong> para seguir paso a paso el camino que realiza una transacción dentro de una red blockchain.
            </p>

            <p>
                Durante la simulación observarás cómo una operación creada por un usuario es compartida por la red, validada por los nodos, seleccionada por un minero y finalmente incorporada a la blockchain.
            </p>

        </div>

    </div>

    `;

    document
        .getElementById("startSimulation")
        .addEventListener(
            "click",
            startSimulation
        );

    document
        .getElementById("nextStep")
        .addEventListener(
            "click",
            nextStep
        );

    document
        .getElementById("restartSimulation")
        .addEventListener(
            "click",
            restartSimulation
        );

}

function startSimulation(){

    currentStep = 0;

    document
        .getElementById("startSimulation")
        .style.display = "none";

    document
        .getElementById("nextStep")
        .style.display = "inline-block";

    document
        .getElementById("restartSimulation")
        .style.display = "inline-block";

    renderCurrentStep();

}

function nextStep(){

    currentStep++;

    if(currentStep >= simulationSteps.length){

        document
            .getElementById("nextStep")
            .disabled = true;

        document
            .getElementById("nextStep")
            .innerHTML = "Simulación finalizada";

        return;

    }

    renderCurrentStep();

}

function restartSimulation(){

    currentStep = 0;

    document
        .querySelectorAll(".flow-box")
        .forEach(box => {

            box.classList.remove("active-box");

        });

    document
        .getElementById("nextStep")
        .disabled = false;

    document
        .getElementById("nextStep")
        .innerHTML = "Siguiente paso";

    renderCurrentStep();

}

function renderCurrentStep(){

    const step =
        simulationSteps[currentStep];

    const coin =
        document.getElementById("coin");

    const boxes =
        document.querySelectorAll(".flow-box");

    boxes.forEach(box => {

        box.classList.remove(
            "active-box"
        );

    });

    if(boxes[currentStep]){

        boxes[currentStep]
            .classList.add(
                "active-box"
            );

        if(coin){

            coin.style.left =
                boxes[currentStep].offsetLeft +
                (boxes[currentStep].offsetWidth / 2) -
                (coin.offsetWidth / 2)
                + "px";

        }

    }

    document
        .getElementById("simulationTitle")
        .innerHTML =
        step.title;

    document
        .getElementById("simulationText")
        .innerHTML =
        step.text;

}