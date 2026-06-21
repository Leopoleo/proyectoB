import { renderBlockCard }
from "./BlockCard.js";

export function renderBlockGrid(blocks){

    return `

        <div class="block-grid">

            ${blocks
                .map(
                    block =>
                    renderBlockCard(block)
                )
                .join("")}

        </div>

    `;

}