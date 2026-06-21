import { router } from "./router.js";
import { createNavbar } from "../components/navbar/navbar.js";
import { createNetworkBackground } from "../components/background/networkBackground.js";

const ACCESS_PASSWORD = "TFG2026";

function loadApplication() {

    createNetworkBackground();
    createNavbar();
    router("home");

}

function showWelcomeScreen() {

    if (localStorage.getItem("welcomeAccepted") === "true") {

        loadApplication();
        return;

    }

    document.body.innerHTML = `

    <div class="welcome-screen">

        <div class="welcome-card">

            <h1>Blockchain y Criptomonedas</h1>

            <p>
                Trabajo Fin de Grado desarrollado con fines educativos por LPC.
            </p>

            <p>  </p>

            <p>
                La aplicación ha sido diseñada principalmente para su utilización
                en ordenadores de escritorio.
            </p>

            <p>
                Actualmente no se encuentra optimizada para dispositivos móviles.
            </p>

            <p>
                Resolución recomendada: 1366 × 768 píxeles o superior.
            </p>

            <input
                type="password"
                id="accessPassword"
                placeholder="Introduzca la contraseña de acceso">

            <label class="remember-option">
                <input type="checkbox" id="rememberWelcome">
                Recordar mi acceso
            </label>

            <button id="enterPlatform">
                Acceder a la plataforma
            </button>

        </div>

    </div>

    `;

    document
        .getElementById("enterPlatform")
        .addEventListener("click", () => {

            const password =
                document.getElementById("accessPassword").value;

            if (password !== ACCESS_PASSWORD) {

                alert("Contraseña incorrecta");
                return;

            }

            if (document.getElementById("rememberWelcome").checked) {

                localStorage.setItem("welcomeAccepted", "true");

            }

            document.body.innerHTML = `
                <div id="app">
                    <header id="navbar"></header>
                    <main id="page"></main>
                </div>
            `;

            loadApplication();

        });

}

document.addEventListener("DOMContentLoaded", () => {

    showWelcomeScreen();

});