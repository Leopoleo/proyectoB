export function renderBlockCard(block){

    return `

        <article
            class="block-card"
            data-id="${block.id}">

            <div class="block-card-icon">

                ${block.id === "genesis"
                    ? "⛓️"
                    : "📦"}

            </div>

            <h3>
                ${block.label}
            </h3>

            <p>
                💸 ${block.transactions}
                transacciones
            </p>

            <p>
                🕒 ${block.timestamp}
            </p>

        </article>

    `;

}