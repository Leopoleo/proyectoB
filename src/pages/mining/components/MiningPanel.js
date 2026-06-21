export function renderMiningPanel(){

return `

<div class="mining-info">
    <h2>
    ¿Qué está ocurriendo?
    </h2>
    <p>
    En la parte izquierda de la pantalla se muestran varias transacciones realizadas por distintos usuarios de la red blockchain.
    </p>
    <p>
    Paco quiere enviar 2 BTC a Juan, Ana desea transferir 1 BTC a Luis, Marta realiza un pago de 0.5 BTC a Pedro y Eva envía 3 BTC a Carlos.
    </p>
    <p>
    Estas operaciones todavía no forman parte de la blockchain. Antes deben esperar en una zona temporal denominada <strong>Mempool</strong>, que actúa como una sala de espera para todas las transacciones pendientes de confirmar.
    </p>
    <p>
    En el centro de la pantalla aparece el <strong>Minero</strong>. Su función consiste en recoger varias transacciones de la mempool y agruparlas dentro de un nuevo bloque.
    </p>
    <p>
    A continuación, el minero intentará resolver un problema matemático mediante el mecanismo <strong>Proof of Work (PoW)</strong>. Para ello calculará miles de hashes diferentes modificando un valor denominado <strong>Nonce</strong>.
    </p>
    <p>
    En la parte derecha se muestran precisamente esos valores. El <strong>Hash</strong> es una huella digital matemática generada a partir del contenido del bloque, mientras que el <strong>Nonce</strong> es un número que el minero modifica continuamente para producir nuevos hashes.
    </p>
    <p>
    El objetivo de la minería es encontrar un hash que cumpla la dificultad exigida por la red. En esta simulación la condición será que el hash comience por varios ceros (<strong>0000</strong>).
    </p>
    <p>
    Cuando el minero encuentre un hash válido, podrá crear un nuevo bloque y proponerlo al resto de nodos de la red para que sea verificado y añadido a la blockchain.
    </p>
    <p>
    Pulsa <strong>«Comenzar explicación»</strong> para seguir paso a paso todo el proceso de minería y comprender cómo una transacción termina formando parte de la blockchain.
    </p>

    <hr>

    <h2>
    Laboratorio práctico
    </h2>

    <p>
    Hasta ahora has visto cómo funciona la minería paso a paso.
    </p>

    <p>
    Ahora podrás convertirte en minero e intentar encontrar tú mismo un hash válido.
    </p>

    <p>
    En una blockchain real los mineros realizan millones de intentos modificando el nonce hasta encontrar una combinación que cumpla la dificultad exigida por la red.
    </p>

    <p>
    En la simulación utilizaremos una versión simplificada para que puedas experimentar el proceso de minería sin necesidad de realizar cálculos complejos.
    </p>

    <p>
    Prueba diferentes valores, observa cómo cambia el hash generado y comprueba por qué encontrar una solución válida requiere numerosos intentos.
    </p>

    </div>

`;

}