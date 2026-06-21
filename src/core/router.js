import { state } from "./state.js";
import { renderHome } from "../pages/home/home.js";
import { renderLearn } from "../pages/learn/learn.js";
import { renderExplorer } from "../pages/explorer/explorer.js";
import { renderSimulator } from "../pages/simulator/simulator.js";
import { renderNetwork } from "../pages/network/network.js";
import { renderMining } from "../pages/mining/mining.js";
import { renderAttacks } from "../pages/attacks/attacks.js";


export function router(page = "home") {

state.currentPage = page;

const container = document.getElementById("page");

if (!container) return;

switch(page){


case "home":
    renderHome(container);
break;

case "learn":
    renderLearn(container);
break;

case "explorer":
    renderExplorer(container);
break;

case "simulator":
    renderSimulator(container);
break;

case "network":
    renderNetwork(container);
break;

case "mining":
    renderMining(container);
break;

case "attacks":
    renderAttacks(container);
break;

default:
    renderHome(container);


}


}
