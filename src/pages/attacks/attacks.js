
import { renderAttack51 } from "./components/attack51.js";
import { renderDoubleSpend } from "./components/doubleSpend.js";
import { renderForkAttack } from "./components/forkAttack.js";
import { renderMaliciousNode } from "./components/maliciousNode.js";
import { renderCongestionAttack } from "./components/congestionAttack.js";

export function renderAttacks(container) {

    container.innerHTML = `

    <section class="page-header">

        <h1>Laboratorio de Ataques</h1>

        <p>
            Descubre los principales riesgos de una red blockchain.
        </p>

    </section>

    <section class="attack-grid">

        <div class="attack-card" id="attack51Card">
            <h2>Ataque 51%</h2>
            <p>Un actor controla la mayoría del poder de minado.</p>
        </div>

        <div class="attack-card" id="forkCard">
            <h2>Fork</h2>
            <p>Dos bloques válidos aparecen simultáneamente.</p>
        </div>

        <div class="attack-card" id="maliciousCard">
            <h2>Nodo malicioso</h2>
            <p>Propaga información falsa o fraudulenta.</p>
        </div>

        <div class="attack-card" id="congestionCard">
            <h2>Congestión</h2>
            <p>Exceso de transacciones pendientes.</p>
        </div>

        <div class="attack-card" id="doubleSpendCard">
            <h2>Doble gasto</h2>
            <p>Intento de reutilizar los mismos fondos.</p>
        </div>

    </section>

    `;

    document.getElementById("attack51Card")
        .addEventListener("click", () => renderAttack51(container));

    document.getElementById("forkCard")
        .addEventListener("click", () => renderForkAttack(container));

    document.getElementById("maliciousCard")
        .addEventListener("click", () => renderMaliciousNode(container));

    document.getElementById("congestionCard")
        .addEventListener("click", () => renderCongestionAttack(container));

    document.getElementById("doubleSpendCard")
        .addEventListener("click", () => renderDoubleSpend(container));

}