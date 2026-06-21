import { blockchainData } from "./data/blockchainData.js";
import { renderBlockGrid } from "./components/BlockGrid.js";
import { renderBlockPanel } from "./components/BlockPanel.js";

export function renderExplorer(container){

    container.innerHTML = `

        <section class="page-header">

            <h1>
                Explorador Blockchain
            </h1>

            <p>
                Explora bloques reales de forma visual.
            </p>

        </section>

        <section class="explorer-dashboard">

            <div>

                ${renderBlockGrid(blockchainData)}

                <div id="blockExplanation">

                    <div class="explainer-box">

                        <h2 id="explainerTitle">

                            ${blockchainData[0].label}

                        </h2>

                        <p id="explainerText">

                            ${blockchainData[0].educationalText}

                        </p>

                    </div>

                </div>

            </div>

            <div id="blockPanel">

                ${renderBlockPanel(blockchainData[0])}

            </div>

        </section>

    `;

    document
        .querySelectorAll(".block-card")
        .forEach(card => {

            card.addEventListener("click", () => {

                const block =
                    blockchainData.find(
                        b => b.id === card.dataset.id
                    );

                document
                    .getElementById("blockPanel")
                    .innerHTML =
                    renderBlockPanel(block);

                document
                    .getElementById("explainerTitle")
                    .innerHTML =
                    block.label;

                document
                    .getElementById("explainerText")
                    .innerHTML =
                    block.educationalText;

            });

        });

}