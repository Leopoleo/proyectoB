import { router } from "./router.js";
import { createNavbar } from "../components/navbar/navbar.js";
import { createNetworkBackground } from "../components/background/networkBackground.js";

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

            <h1>Plataforma Educativa Blockchain</h1>

            <p>
                Trabajo Fin de Grado desarrollado con fines educativos.
            </p>

            <p>
                Esta plataforma permite comprender de forma visual e interactiva
                los conceptos fundamentales de blockchain y las criptomonedas.
            </p>

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

            <label class="remember-option">
                <input type="checkbox" id="rememberWelcome">
                Recordar mi elección
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

            if (document.getElementById("rememberWelcome").checked) {

                localStorage.setItem("welcomeAccepted", "true");

            }

            location.reload();

        });

}

document.addEventListener("DOMContentLoaded", () => {

    if (
        window.innerWidth < 1024 &&
        localStorage.getItem("welcomeAccepted") !== "true"
    ) {

        alert(
            "Esta plataforma ha sido diseñada para ordenadores de escritorio. Algunas funcionalidades pueden no mostrarse correctamente en dispositivos móviles."
        );

    }

    showWelcomeScreen();

});
