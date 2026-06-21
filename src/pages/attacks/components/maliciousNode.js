
export function renderMaliciousNode(container) {

let maliciousPercent = 20;

container.innerHTML = `

<div class="info-box">

    <h2>Nodo malicioso</h2>

    <p>
        En una blockchain los nodos intercambian constantemente información sobre transacciones y bloques.
    </p>

    <p>
        Un nodo malicioso es un participante que intenta engañar al resto enviando información falsa.
    </p>

    <p>
        Por ejemplo, podría intentar propagar un bloque inválido o una transacción fraudulenta.
    </p>

    <p>
        Utiliza la simulación para comprobar cómo reacciona la red cuando aparece un nodo malicioso.
    </p>

</div>

<div class="info-box">

    <label>

        Nodos maliciosos:
        <strong id="percentValue">${maliciousPercent}%</strong>

    </label>

    <input
        id="percentSlider"
        type="range"
        min="0"
        max="100"
        value="${maliciousPercent}"
        style="width:100%;margin-top:15px;"
    >

</div>

<div class="info-box">

    <h3>Red blockchain</h3>

    <div id="networkView"
        style="
            display:grid;
            grid-template-columns:repeat(5,1fr);
            gap:15px;
            margin-top:20px;
            text-align:center;
        ">
    </div>

</div>

<div class="info-box">

    <button
        id="sendFakeBlock"
        class="hero-button">

        Enviar bloque falso

    </button>

</div>

<div
    id="statusBox"
    class="info-box">

</div>

`;

const slider = document.getElementById("percentSlider");
const percentValue = document.getElementById("percentValue");
const networkView = document.getElementById("networkView");
const statusBox = document.getElementById("statusBox");
const sendFakeBlock = document.getElementById("sendFakeBlock");

function renderNetwork() {

    networkView.innerHTML = "";

    const maliciousNodes = Math.round((maliciousPercent / 100) * 10);

    for(let i=0;i<10;i++){

        const node = document.createElement("div");

        node.style.padding = "15px";
        node.style.borderRadius = "10px";
        node.style.border = "1px solid var(--border)";

        if(i < maliciousNodes){

            node.innerHTML = `
                😈<br>
                Nodo ${i+1}
            `;

        }else{

            node.innerHTML = `
                😊<br>
                Nodo ${i+1}
            `;

        }

        networkView.appendChild(node);

    }

    if(maliciousPercent < 50){

        statusBox.innerHTML = `

            <h3>Estado de la red</h3>

            <p>
                ✅ La mayoría de nodos son honestos.
            </p>

            <p>
                La red puede detectar fácilmente información fraudulenta.
            </p>

        `;

    }else{

        statusBox.innerHTML = `

            <h3>Estado de la red</h3>

            <p>
                🚨 Los nodos maliciosos son mayoría.
            </p>

            <p>
                El consenso de la red podría verse comprometido.
            </p>

        `;

    }

}

slider.addEventListener("input", () => {

    maliciousPercent = parseInt(slider.value);

    percentValue.textContent = maliciousPercent + "%";

    renderNetwork();

});

sendFakeBlock.addEventListener("click", () => {

    const maliciousNodes = Math.round((maliciousPercent / 100) * 10);
    const honestNodes = 10 - maliciousNodes;

    if(honestNodes > maliciousNodes){

        statusBox.innerHTML = `

            <h3>Simulación</h3>

            <p>
                Un nodo malicioso intenta enviar un bloque falso.
            </p>

            <p>
                Los nodos honestos revisan las reglas del protocolo.
            </p>

            <p>
                Detectan que el bloque es inválido.
            </p>

            <p>
                ❌ El bloque es rechazado.
            </p>

            <p>
                ✅ La blockchain continúa funcionando correctamente.
            </p>

        `;


        }else{

            statusBox.innerHTML = `

                <h3>🚨 Situación crítica</h3>

                <p>
                    Los nodos maliciosos representan actualmente la mayoría de la red.
                </p>

                <p>
                    En esta simulación, los participantes honestos ya no tienen suficiente influencia para bloquear completamente la propagación de información fraudulenta.
                </p>

                <p>
                    Un bloque falso ha sido enviado a la red y una parte importante de los nodos lo considera válido.
                </p>

                <p>
                    Esto puede provocar que algunos participantes acepten información incorrecta, generando discrepancias y reduciendo la confianza en la blockchain.
                </p>

                <hr style="margin:20px 0;opacity:.2;">

                <h3>¿Significa esto que la blockchain deja de funcionar?</h3>

                <p>
                    No necesariamente.
                </p>

                <p>
                    La red puede seguir produciendo bloques y procesando transacciones, pero ya no existe la garantía de que las decisiones representen el comportamiento de participantes honestos.
                </p>

                <hr style="margin:20px 0;opacity:.2;">

                <h3>¿Cómo se evita esta situación?</h3>

                <p>
                    Las blockchains modernas intentan impedir que una única entidad controle una parte excesiva de la red.
                </p>

                <p>
                    Para ello fomentan la participación de miles de usuarios independientes distribuidos por todo el mundo.
                </p>

                <p>
                    Cuanto más descentralizada está una blockchain, más difícil resulta que un grupo consiga controlar la mayoría de las decisiones.
                </p>

                <p>
                    ⚠️ La mejor protección no es una solución técnica automática, sino evitar que una única entidad acumule demasiado poder dentro de la red.
                </p>

            `;

        }


});

renderNetwork();

}