import { renderTransactionList } from "./TransactionList.js";
export function renderBlockPanel(block){

    return `

        <div class="block-panel">

            <h2>
                ${block.label}
            </h2>

            <hr>
            <p>
                🔗 ${block.hash}
            </p>

            <p>
                📌 ${block.previous}
            </p>

            <p>
                ⛏️ ${block.nonce}
            </p>

            <p>
                🕒 ${block.timestamp}
            </p>

            <br>

            <h3>
                ¿Qué significa?
            </h3>

            <p>
                ${block.explanation}
            </p>

            <br>

            <h3>
                Transacciones
            </h3>

            ${renderTransactionList(block.txs)}

            <ul>

                ${block.txs
                    .map(
                        tx =>
                        `<li>${tx}</li>`
                    )
                    .join("")}

            </ul>

        </div>

    `;

}