import { learnTopics } from "./data/learnContent.js";
import { renderTopic } from "./topicRenderer.js";
export function renderLearn(container){

showGrid();

function showGrid(){

    container.innerHTML = `

        <section class="page-header">

            <h1>
                Blockchain y Criptomonedas
            </h1>

            <p>
                Aprende los conceptos fundamentales.
            </p>

        </section>

        <section class="home-cards">

            ${learnTopics.map(topic => `

                <article
                    class="card topic-card"
                    data-topic="${topic.id}">

                    <h2>
                        ${topic.title}
                    </h2>

                    <p>
                        ${topic.description}
                    </p>

                </article>

            `).join("")}

        </section>

    `;

    document
        .querySelectorAll(".topic-card")
        .forEach(card => {

            card.addEventListener(
                "click",
                () => {

                    showTopic(
                        card.dataset.topic
                    );

                }
            );

        });

}

function showTopic(id){

    const topicOrder = [
    "intro",
    "blockchain",
    "hashes",
    "nodes",
    "transactions",
    "mempool",
    "blocks",
    "mining",
    "pow",
    "pos",
    "crypto"
];

    container.innerHTML =
        renderTopic(id);

    document
        .querySelector(".back-button")
        .addEventListener(
            "click",
            showGrid
        );
    
    document
        .querySelector(".back-button")
        .addEventListener(
            "click",
            showGrid
        );

        const nextButton = document.querySelector(".next-button");

        if(nextButton){

            const currentIndex =
                topicOrder.indexOf(id);

            if(
                currentIndex >= 0 &&
                currentIndex < topicOrder.length - 1
            ){

                nextButton.addEventListener(
                    "click",
                    () => {

                        showTopic(
                            topicOrder[
                                currentIndex + 1
                            ]
                        );

                    }
                );

            }else{

                nextButton.style.display =
                    "none";

            }

        }


    if(id === "hashes"){

        const input =
            document.getElementById(
                "hashInput"
            );

        const output =
            document.getElementById(
                "hashResult"
            );

        input.addEventListener(
            "input",
            () => {

                let hash = 0;

                for(
                    let i=0;
                    i<input.value.length;
                    i++
                ){

                    hash =
                        ((hash<<5)-hash)
                        +
                        input.value.charCodeAt(i);

                    hash |= 0;

                }

                output.innerHTML =
                    hash;

            }
        );

    }


            if(id === "mining"){

    const button =
        document.getElementById(
            "mineButton"
        );

    const counter =
        document.getElementById(
            "nonceCounter"
        );

    button.addEventListener(
        "click",
        () => {

            const steps = [

                `
                📦 <strong>Nuevo bloque candidato creado</strong>

                <br><br>

                Contiene:

                <br><br>

                ✓ Paco → Juan : 10 BTC

                <br>

                ✓ Ana → Luis : 2 BTC

                <br><br>

                Estas transacciones ya han sido verificadas por la red.

                <br><br>

                Ahora los mineros compiten para añadir este bloque a la blockchain.
                `,

                `
                📦 <strong>Nuevo bloque candidato creado</strong>

                <br><br>

                ✓ Paco → Juan : 10 BTC

                <br>

                ✓ Ana → Luis : 2 BTC

                <br><br>

                👨‍💻 Minero A busca una solución válida...

                <br><br>

                👨‍💻 Minero B busca una solución válida...

                <br><br>

                👨‍💻 Minero C busca una solución válida...

                <br><br>

                Ningún minero ha conseguido añadir todavía el bloque.
                `,

                `
                📦 <strong>Competición en curso</strong>

                <br><br>

                👨‍💻 Minero A sigue realizando cálculos...

                <br><br>

                👨‍💻 Minero B sigue realizando cálculos...

                <br><br>

                👨‍💻 Minero C sigue realizando cálculos...

                <br><br>

                La red sigue esperando una solución válida.
                `,

                `
                📦 <strong>Competición en curso</strong>

                <br><br>

                👨‍💻 Minero A continúa buscando...

                <br><br>

                👨‍💻 Minero B continúa buscando...

                <br><br>

                👨‍💻 Minero C continúa buscando...

                <br><br>

                Todavía no existe un ganador.
                `,

                `
                🏆 <strong>¡Minero B encuentra una solución válida!</strong>

                <br><br>

                La red verifica rápidamente el resultado.

                <br><br>

                ✅ Solución aceptada.

                <br><br>

                Minero B obtiene el derecho a añadir el bloque a la blockchain.
                `,

                `
                🎉 <strong>Bloque añadido a la blockchain</strong>

                <br><br>

                Las siguientes transacciones han quedado registradas permanentemente:

                <br><br>

                ✓ Paco → Juan : 10 BTC

                <br>

                ✓ Ana → Luis : 2 BTC

                <br><br>

                💰 Minero B recibe:

                <br><br>

                • 3.125 BTC de recompensa

                <br>

                • Las comisiones de las transacciones incluidas en el bloque

                <br><br>

                Los demás mineros abandonan sus cálculos y comienzan a trabajar en el siguiente bloque.
                `

            ];

            let current = 0;

            counter.innerHTML = steps[0];

            const interval =
                setInterval(()=>{

                    current++;

                    if(current >= steps.length){

                        clearInterval(
                            interval
                        );

                        return;
                    }

                    counter.innerHTML =
                        steps[current];

                },6000);

        }
    );

}


}

}
