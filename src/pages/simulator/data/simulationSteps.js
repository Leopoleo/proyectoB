export const simulationSteps = [

{
    title:"Transacción creada",

    text:`

        Paco quiere enviar 2 BTC a Juan.

        <p>

        Para ello crea una transacción indicando quién envía el dinero, quién lo recibe y la cantidad que desea transferir.

        <p>

        Antes de enviarla a la red, la transacción se firma digitalmente utilizando la clave privada de Paco.

        <p>

        Esta firma permite demostrar que realmente ha sido Paco quien ha autorizado la operación y evita que otras personas puedan hacerse pasar por él.

        <p>

        En este momento la transacción existe, pero todavía no forma parte de la blockchain.

    `
},

{
    title:"Propagación por la red",

    text:`

        Una vez creada, la transacción se envía a la red blockchain.

        <p>

        El primer nodo que la recibe la comparte con otros nodos conectados y estos hacen lo mismo con sus vecinos.

        <p>

        En cuestión de segundos la información se propaga por toda la red.

        <p>

        Este mecanismo permite que miles de participantes conozcan rápidamente la existencia de la nueva transacción sin depender de un servidor central.

        <p>

        Cuantos más nodos reciban la información, más difícil será ocultarla o manipularla.

    `
},

{
    title:"Entrada en la mempool",

    text:`

        La transacción todavía no puede añadirse directamente a la blockchain.

        <p>

        Antes debe esperar en una zona temporal denominada mempool.

        <p>

        La mempool funciona como una sala de espera donde se almacenan todas las transacciones pendientes de ser procesadas.

        <p>

        En ella pueden coexistir miles de operaciones realizadas por usuarios de todo el mundo.

        <p>

        Los mineros y validadores consultan constantemente esta mempool para seleccionar qué transacciones incluirán en los próximos bloques.

    `
},

{
    title:"Validación por los nodos",

    text:`

        Antes de aceptar la transacción, los nodos realizan varias comprobaciones.

        <p>

        Verifican que la firma digital es válida, que el formato de la transacción es correcto y que Paco dispone realmente de los fondos que intenta gastar.

        <p>

        También comprueban que esos mismos fondos no hayan sido utilizados previamente en otra operación.

        <p>

        Si alguna de estas verificaciones falla, la transacción será rechazada.

        <p>

        Gracias a estas comprobaciones la red puede detectar errores o intentos de fraude sin necesidad de confiar en una única entidad central.

    `
},

{
    title:"Selección para minería",

    text:`

        Un minero decide incluir la transacción dentro de un nuevo bloque.

        <p>

        Para ello selecciona varias transacciones pendientes de la mempool y las agrupa.

        <p>

        El nuevo bloque también contiene información adicional, como el hash del bloque anterior, una marca temporal y otros datos necesarios para la red.

        <p>

        Sin embargo, el bloque todavía no es válido.

        <p>

        Antes debe superar el proceso de minería mediante el mecanismo conocido como Proof of Work.

    `
},

{
    title:"Proceso de minería",

    text:`

        El minero intenta encontrar una solución matemática válida para el bloque.

        <p>

        Para ello modifica repetidamente un valor denominado nonce y calcula nuevos hashes una y otra vez.

        <p>

        Cada pequeño cambio produce un resultado completamente diferente.

        <p>

        El objetivo es encontrar un hash que cumpla la dificultad exigida por la red.

        <p>

        En una blockchain real pueden realizarse millones o incluso billones de intentos antes de encontrar una solución válida.

        <p>

        Este esfuerzo computacional es precisamente lo que proporciona seguridad al sistema.

    `
},

{
    title:"Bloque minado",

    text:`

        Finalmente el minero encuentra un hash válido.

        <p>

        Esto demuestra que ha realizado el trabajo computacional exigido por la red.

        <p>

        El bloque ya puede proponerse al resto de participantes para su verificación.

        <p>

        Los nodos revisan que todas las transacciones son correctas y que el bloque cumple las reglas del protocolo.

        <p>

        Si la validación es satisfactoria, el bloque será aceptado por consenso.

    `
},

{
    title:"Confirmación",

    text:`

        El bloque se añade a la blockchain.

        <p>

        La transacción de Paco a Juan pasa a formar parte del historial permanente de la red.

        <p>

        A partir de este momento cualquier participante puede verificar que la operación se realizó correctamente.

        <p>

        Cuantos más bloques se añadan después de este, más difícil resultará modificar o revertir la transacción.

        <p>

        Por este motivo se suele esperar varias confirmaciones antes de considerar una operación completamente segura.

        <p>

        🎉 La transferencia ha finalizado con éxito y Juan recibe los 2 BTC enviados por Paco.

    `
}

];