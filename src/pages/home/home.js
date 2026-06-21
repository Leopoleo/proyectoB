import { router } from "../../core/router.js";

export function renderHome(container) {

container.innerHTML = `

    <section class="hero">


<div class="hero-content">

    <span class="hero-badge">
        Plataforma Educativa Interactiva
    </span>

    <h1>
        BLOCKCHAIN
        <br>
        Y
        CRIPTOMONEDAS
    </h1>

    <p>
        Aprende visualmente cómo funcionan las redes blockchain,
        las criptomonedas y los mecanismos de consenso modernos.
    </p>

    <div class="hero-buttons">

        <button
            id="btnComenzar"
            class="hero-button">

            Comenzar

        </button>

        <button
            class="hero-button-secondary">
            Ver demostración
        </button>
    </div>
</div>

<div class="hero-glow"></div>

</section>


    <section class="home-cards">

        <article class="card" data-page="learn">

            <div class="card-icon">⛓️</div>
            <h2>Blockchain y Criptomonedas</h2>
            <p>
                Aprende los conceptos fundamentales mediante ejemplos visuales.
            </p>

        </article>

        <article class="card" data-page="explorer">

            <div class="card-icon">🔍</div>
            <h2>Explorar Blockchain</h2>
            <p>
                Analiza bloques, hashes y transacciones de forma interactiva.
            </p>

        </article>

        <article class="card" data-page="simulator">

            <div class="card-icon">⚙️</div>
            <h2>Iniciar Simulación</h2>
            <p>
                Visualiza cómo se propagan y validan las transacciones.
            </p>

        </article>

        <article class="card" data-page="attacks">

            <div class="card-icon">⚠️</div>

            <h2>Laboratorio de Ataques</h2>

            <p>
                Descubre cómo funcionan los ataques más conocidos.
            </p>

        </article>

    </section>

`;

document
    .getElementById("btnComenzar")
    .addEventListener("click", () => {

        console.log(
            "CLICK COMENZAR"
        );

        router("learn");

    });

document
    .querySelectorAll(".card")
    .forEach(card => {

        card.addEventListener("click", () => {

            console.log(
                "CLICK CARD",
                card.dataset.page
            );

            router(card.dataset.page);

        });

    });

}
