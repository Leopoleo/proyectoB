import {networkNodes,networkConnections} from "../data/networkNodes.js";
export function renderNetworkGraph(){

    return `

        <div class="network-container">

            <svg
                class="network-lines"
                width="700"
                height="550">

                ${networkConnections.map(connection => {

                    const from =
                        networkNodes.find(
                            n => n.id === connection[0]
                        );

                    const to =
                        networkNodes.find(
                            n => n.id === connection[1]
                        );

                    return `

                        <line
                            x1="${from.x}"
                            y1="${from.y}"
                            x2="${to.x}"
                            y2="${to.y}"
                            class="network-line"
                            stroke="#64748b"
                            stroke-width="3"
                        />

                    `;

                }).join("")}

            </svg>

            ${networkNodes.map(node => `

                <div
                    class="network-node"
                    id="${node.id}"
                    style="
                        left:${node.x - 60}px;
                        top:${node.y - 60}px;
                    "

                >

                    🖥️

                    <span>

                    ${node.label}

                </span>

                <div
                    class="tx-counter"
                    id="${node.id}-counter">

                    TX: 0

                </div>

                </div>

            `).join("")}

            <div id="networkTx">

                💰

            </div>

        </div>

    `;

}