export function renderMiningVisualizer(){

return `

<div class="mining-layout">

    <div class="mempool-box">

        <h3>Mempool</h3>

        <div class="tx-item">
            Paco → Juan 2 BTC
        </div>

        <div class="tx-item">
            Ana → Luis 1 BTC
        </div>

        <div class="tx-item">
            Marta → Pedro 0.5 BTC
        </div>

        <div class="tx-item">
            Eva → Carlos 3 BTC
        </div>

    </div>

    <div class="miner-box">

        <div class="miner-icon">

            ⛏️

        </div>

        <h2>

            Minero

        </h2>

    </div>

    <div class="mining-status">

        <h3>

            Nonce

        </h3>

        <div id="nonceValue">

            Todavía no calculado

        </div>

        <h3>

            Hash

        </h3>

        <div id="hashValue">

            Todavía no calculado

        </div>

        <div id="hashResult">

            Esperando inicio de la minería
        </div>
        <div id="difficultyInfo">

            Objetivo:
            Encontrar un hash que empiece por 0000

        </div>

    </div>

</div>

<div id="generatedBlock">

    <div class="block-preview">
        <h3>
            Bloque pendiente
        </h3>

        <p>
            Bloque pendiente<p>

            Todavía no se ha creado ningún bloque.<p>

            Las transacciones siguen esperando en la mempool.<p>

            Cuando el minero encuentre un hash válido,
            podrá construir un nuevo bloque y enviarlo
            a la red blockchain para su validación..<p>
            <p>
            Mempool → Minero → Bloque válido<p>
        </p>

    </div>

</div>


`;

}