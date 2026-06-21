import { router } from "../../core/router.js";

export function createNavbar() {

const navbar = document.getElementById("navbar");

navbar.innerHTML = `

    <div class="navbar-container">

        <div class="logo">
            BLOCKCHAIN Y CRIPTOMONEDAS V.6

        </div>

        <nav>

            <button data-page="home">
                Inicio
            </button>

            <button data-page="learn">
                Blockchain y Criptomonedas
            </button>

            <button data-page="explorer">
                Explorar Blockchain
            </button>

            <button data-page="simulator">
                Iniciar Simulación
            </button>

            <button data-page="network">
                Red Blockchain
            </button>

            <button data-page="mining">
                Minería PoW
            </button>

            <button data-page="attacks">
                Laboratorio de Ataques
            </button>

        </nav>

    </div>

`;

navbar.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        router(button.dataset.page);

    });

});


}
