import { router } from "./router.js";
import { createNavbar } from "../components/navbar/navbar.js";
import { createNetworkBackground } from "../components/background/networkBackground.js";

document.addEventListener("DOMContentLoaded", () => {
createNetworkBackground();
createNavbar();
router("home");

});
