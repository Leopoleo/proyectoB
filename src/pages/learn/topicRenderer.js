import { introductionContent } from "./views/introduction.js";
import { blockchainContent } from "./views/blockchain.js";
import { hashesContent } from "./views/hashes.js";
import { miningContent } from "./views/mining.js";
import { cryptocurrenciesContent } from "./views/cryptocurrencies.js";
import { blocksContent } from "./views/blocks.js";
import { nodesContent } from "./views/nodes.js";
import { transactionsContent } from "./views/transactions.js";
import { mempoolContent } from "./views/mempool.js";
import { proofOfWorkContent } from "./views/proofOfWork.js";
import { proofOfStakeContent } from "./views/proofOfStake.js";

export function renderTopic(id){


let topic;

switch(id){

    case "intro":
        topic = introductionContent;
        break;

    case "blockchain":
        topic = blockchainContent;
        break;

    case "hashes":
        topic = hashesContent;
        break;

    case "mining":
        topic = miningContent;
        break;

    case "crypto":
        topic = cryptocurrenciesContent;
        break;

    case "blocks":
        topic = blocksContent;
        break;

    case "nodes":
        topic = nodesContent;
        break;

    case "transactions":
        topic = transactionsContent;
        break;

    case "mempool":
        topic = mempoolContent;
        break;

    case "pow":
        topic = proofOfWorkContent;
        break;

    case "pos":
        topic = proofOfStakeContent;
        break;

    default:
        return "<h1>Tema no encontrado</h1>";

}

return `

    <section class="topic-view">

        <div class="topic-navigation">

            <button class="nav-button back-button">
                ← Volver
            </button>

            <button class="nav-button next-button">
                Siguiente →
            </button>

        </div>

        <h1>
            ${topic.title}
        </h1>

        ${topic.content}

    </section>

`;


}
