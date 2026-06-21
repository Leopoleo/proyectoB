export function renderMiningLab(){

return `

<div class="mining-info">

    <h2>
        Laboratorio de minería
    </h2>

    <p>
        Ahora es tu turno.
    </p>

    <p>
        En una blockchain real los mineros prueban millones de valores hasta encontrar un hash válido.
    </p>

    <p>
        En esta simulación utilizaremos una versión simplificada para comprender el proceso.
    </p>

    <p>
        Introduce un nonce e intenta encontrar un hash que comience por tres ceros.
    </p>

    <div style="margin-top:20px;">

        <label>

            Dificultad

        </label>

        <select id="difficultySelect">

            <option value="00">
                Fácil (00)
            </option>

            <option value="000" selected>
                Media (000)
            </option>

            <option value="0000">
                Difícil (0000)
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

    </div>

    <div
        id="miningLabResult"
        class="info-box"
        style="margin-top:20px;">

        Esperando intento...

    </div>

</div>

`;

}