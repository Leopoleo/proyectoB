export const miningSteps = [

{
    nonce:0,
    hash:"a82fd93c12",
    valid:false,
    title:"Paso 1. Recepción de transacciones",
    text:`
    Las transacciones realizadas por los usuarios no se incorporan directamente a la blockchain.

    <p>

    Antes de formar parte de un bloque, todas las operaciones pendientes se almacenan temporalmente en una zona denominada mempool.

    <p>

    La mempool funciona como una sala de espera donde permanecen las transacciones hasta que un minero decide seleccionarlas.

    <p>

    En este ejemplo el minero observa varias transacciones pendientes y se prepara para construir un nuevo bloque.
    `
},

{
    nonce:0,
    hash:"a82fd93c12",
    valid:false,
    title:"Paso 2. Construcción del bloque candidato",
    text:`
    El minero selecciona varias transacciones de la mempool.

    <p>

    Con ellas crea un bloque candidato.

    <p>

    Este bloque contiene las transacciones, el hash del bloque anterior, una marca temporal y otros datos necesarios para la red.

    <p>

    Sin embargo, todavía no es un bloque válido. Antes deberá superar la prueba de trabajo o Proof of Work.
    `
},

{
    nonce:0,
    hash:"a82fd93c12",
    valid:false,
    title:"Paso 3. Primer cálculo del hash",
    text:`
    Una vez construido el bloque, el minero calcula su hash.

    <p>

    Un hash es una huella digital matemática generada a partir de toda la información del bloque.

    <p>

    Si se modifica cualquier dato, aunque sea una sola letra o un solo número, el hash cambia completamente.

    <p>

    El hash obtenido actualmente es:

    <p>

    a82fd93c12

    <p>

    Este resultado todavía no cumple las condiciones exigidas por la red.
    `
},

{
    nonce:0,
    hash:"a82fd93c12",
    valid:false,
    title:"Paso 4. Hash inválido",
    text:`
    La red blockchain exige que el hash generado comience por varios ceros.

    <p>

    Esta condición recibe el nombre de dificultad.

    <p>

    El hash actual no comienza por ceros suficientes, por lo que el bloque es rechazado.

    <p>

    El minero deberá seguir realizando pruebas hasta encontrar una combinación válida.
    `
},

{
    nonce:1,
    hash:"b91ae72fd1",
    valid:false,
    title:"Paso 5. Modificación del nonce",
    text:`
    Para generar nuevos hashes el minero modifica el nonce.

    <p>

    El nonce es un número especial incluido dentro del bloque cuyo único objetivo es producir resultados diferentes al calcular el hash.

    <p>

    Aunque únicamente cambia un número, el nuevo hash generado es completamente distinto.

    <p>

    Esto permite realizar miles o millones de intentos hasta encontrar una solución válida.
    `
},

{
    nonce:5000,
    hash:"f12ac8de44",
    valid:false,
    title:"Paso 6. Proof of Work",
    text:`
    El minero continúa modificando el nonce una y otra vez.

    <p>

    Cada intento genera un nuevo hash.

    <p>

    En una blockchain real pueden realizarse millones o incluso billones de cálculos antes de encontrar una solución.

    <p>

    Este esfuerzo computacional es precisamente lo que da nombre al mecanismo Proof of Work o Prueba de Trabajo.

    <p>

    Cuanto mayor es la dificultad, más trabajo deberá realizar el minero.
    `
},

{
    nonce:12455,
    hash:"0000af32b8",
    valid:true,
    title:"Paso 7. Hash válido encontrado",
    text:`
    Finalmente el minero encuentra un hash que cumple la dificultad exigida por la red.

    <p>

    El hash comienza por varios ceros:

    <p>

    0000af32b8

    <p>

    Esto demuestra que el minero ha realizado el trabajo computacional necesario.

    <p>

    Ahora el bloque puede proponerse al resto de nodos para que sea verificado.
    `
},

{
    nonce:12455,
    hash:"0000af32b8",
    valid:true,
    title:"Paso 8. Bloque añadido a la blockchain",
    text:`
    Los nodos de la red verifican que el bloque es correcto.
    <p>
    Si la validación es satisfactoria, el bloque se añade al final de la blockchain.
    <p>
    Las transacciones pasan a formar parte del historial permanente de la red y ya no pueden modificarse sin alterar toda la cadena.
    <p>
    Como recompensa por el trabajo realizado, el minero recibe nuevas criptomonedas y las comisiones asociadas a las transacciones incluidas en el bloque.
    <p>
    El proceso de minería ha finalizado con éxito.
    `
}

];