export function renderDoubleSpend(container) {

let currentStep = 0;

container.innerHTML = `

<div class="info-box">

    <h2>Ataque de Doble Gasto</h2>

    <p>
        Imagina que Paco tiene exactamente 10 BTC.
    </p>

    <p>
        Paco intenta gastar esos mismos 10 BTC dos veces.
    </p>

    <p>
        Primero intenta enviarlos a Juan y después intenta enviarlos también a María.
    </p>

    <p>
        Utiliza la simulación para descubrir cómo blockchain detecta este problema.
    </p>

</div>

<div class="info-box">

    <h3>Saldo inicial</h3>

    <p>
        Paco: <strong>10 BTC</strong>
    </p>

</div>

<div class="info-box">

    <h3>Estado de la red</h3>

    <div id="networkState">

        La red está esperando transacciones.

    </div>

</div>

<div class="info-box">

    <h3>Mempool</h3>

    <div id="mempoolView">

        No hay transacciones pendientes.

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
const networkState = document.getElementById("networkState");
const mempoolView = document.getElementById("mempoolView");

nextStep.addEventListener("click", () => {

    currentStep++;

    switch(currentStep){

        case 1:

            networkState.innerHTML = `

                Paco decide enviar 10 BTC a Juan.

            `;

            mempoolView.innerHTML = `

                📨 Paco → Juan (10 BTC)

            `;

            break;

        case 2:

            networkState.innerHTML = `

                Los nodos reciben la transacción y verifican que Paco dispone de saldo suficiente.

            `;

            mempoolView.innerHTML = `

                ✅ Paco → Juan (10 BTC)

            `;

            break;

        case 3:

            networkState.innerHTML = `

                Mientras la primera transacción todavía está siendo procesada,
                Paco intenta gastar los mismos 10 BTC enviándolos también a María.

            `;

            mempoolView.innerHTML = `

                ✅ Paco → Juan (10 BTC)
                <br><br>
                📨 Paco → María (10 BTC)

            `;

            break;

        case 4:

            networkState.innerHTML = `

                Los nodos detectan que ambas transacciones intentan utilizar exactamente los mismos fondos.

            `;

            mempoolView.innerHTML = `

                ✅ Paco → Juan (10 BTC)
                <br><br>
                ⚠️ Paco → María (10 BTC)

            `;

            break;

        case 5:

            networkState.innerHTML = `

                La red debe decidir cuál de las dos transacciones es válida.

            `;

            mempoolView.innerHTML = `

                ✅ Paco → Juan (10 BTC)
                <br><br>
                ❌ Paco → María (10 BTC)

            `;

            break;

        case 6:

            networkState.innerHTML = `

                Los fondos ya han sido utilizados en la primera transacción.

                La segunda transacción queda rechazada.

            `;

            break;

        case 7:

            networkState.innerHTML = `

                🎉 Simulación finalizada.

                Blockchain ha evitado que Paco utilice el mismo dinero dos veces.

            `;

            mempoolView.innerHTML = `

                <strong>Resultado final</strong>

                <br><br>

                Juan recibe 10 BTC ✅

                <br><br>

                María recibe 0 BTC ❌

            `;

            break;

        case 8:

            networkState.innerHTML = `

                <h3>¿Qué ocurriría sin blockchain?</h3>

                <p>
                    Si no existiera un mecanismo de validación,
                    Paco podría intentar gastar el mismo dinero varias veces.
                </p>

                <p>
                    Blockchain mantiene un registro compartido por toda la red
                    para impedir este comportamiento.
                </p>

            `;

            nextStep.disabled = true;
            nextStep.textContent = "Simulación finalizada";

            break;
    }

});

}