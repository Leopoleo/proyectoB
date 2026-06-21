export function renderTransactionList(txs){

    return `

        <div class="transactions-list">

            ${txs.map(tx => `

                <div class="transaction-card">

                    <div>

                        <strong>

                            ${tx.from}

                        </strong>

                        →

                        <strong>

                            ${tx.to}

                        </strong>

                    </div>

                    <span>

                        ${tx.amount}

                    </span>

                </div>

            `).join("")}

        </div>

    `;

}