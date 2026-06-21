import { renderNetworkGraph } from "./components/NetworkGraph.js";
import { renderNetworkExplanation } from "./components/NetworkExplanation.js";
export function renderNetwork(container){

    container.innerHTML = `

        <section class="page-header">

            <h1>
                Red Blockchain
            </h1>
            <p>
                Aprende cómo se propaga una transacción.
            </p>

        </section>

        ${renderNetworkGraph()}

        <div class="simulation-controls">
            <button id="startNetwork">
                Iniciar propagación
            </button>
        </div>

        ${renderNetworkExplanation()}

    `;

    document
        .getElementById("startNetwork")
        .addEventListener(
            "click",
            startPropagation
        );

}

function startPropagation(){

    const steps = [

        {
            nodes:["nodeA"],

            title:"Paso 1 / 4",

            text:`
                Paco quiere enviar 2 BTC a Juan.

                La transacción llega al Nodo A.

                En blockchain no existe un servidor central.

                La información puede entrar por cualquier nodo.
            `
        },

        {
            nodes:["nodeA","nodeB"],

            title:"Paso 2 / 4",

            text:`
                Nodo A recibe la transacción.

                Después la comparte con sus vecinos.

                Nodo B ya dispone de una copia. 
                El nodo comprueba:

                    • Firma digital
                    • Formato
                    • Fondos disponibles
            `
        },

        {
            nodes:["nodeA","nodeB","nodeC"],

            title:"Paso 3 / 4",

            text:`
                La propagación continúa.

                Nodo C recibe una copia idéntica.

                Cada nodo almacena la misma información.
                La transacción se comparte
                con el resto de nodos vecinos.
            `
        },

        {
            nodes:[
                "nodeA",
                "nodeB",
                "nodeC",
                "nodeD"
            ],

            title:"Paso 4 / 4",

            text:`
                La transacción ya ha llegado a todos los nodos.

                Cada nodo dispone de una copia idéntica y puede
                comprobar que los datos son correctos.

                Gracias a esta propagación distribuida, la red
                no depende de un servidor central y puede seguir
                funcionando incluso si algunos nodos fallan.

                La transacción queda lista para ser incluida
                en un futuro bloque.
            `
        }

    ];

    let current = 0;
    const tx = document.getElementById("networkTx");
    const timer = setInterval(() => {

        document
            .querySelectorAll(".network-node")
            .forEach(node => {node.classList.remove("network-active");
            });

        steps[current].nodes.forEach(id => {
            const node = document.getElementById(id);

            if(node){node.classList.add("network-active");
                if(tx){
                    tx.style.left =(node.offsetLeft + 40) + "px";
                    tx.style.top = (node.offsetTop - 50) + "px";
                }
            }
        });

        updateNodeCounters(steps[current].nodes);

        document.getElementById("networkTitle").innerHTML = steps[current].title;
        document.getElementById("networkText").innerHTML = steps[current].text;
        current++;
        if(current >= steps.length){
            clearInterval(timer);

        }

    },3000);

}

function updateNodeCounters(nodes){

    document
        .querySelectorAll(".tx-counter")
        .forEach(counter => {

            counter.innerHTML =
                "Sin transacción";

        });

    nodes.forEach(nodeId => {

        const counter =
            document.getElementById(
                nodeId + "-counter"
            );

        if(counter){

            counter.innerHTML =
                "Transacción recibida";

        }

    });

}