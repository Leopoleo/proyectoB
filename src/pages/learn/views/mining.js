
export const miningContent = {

title:"Minería",

content:`

<div class="info-box">

<h2>¿Qué es la minería?</h2>

<p>La minería es uno de los conceptos más importantes de Bitcoin y también uno de los que más dudas suele generar.</p>

<p>Para comprenderla, resulta útil compararla con el funcionamiento de un banco tradicional.</p>

<p>Imagina que Paco quiere enviar 10 euros a Juan utilizando su banco.</p>

<p>Cuando Paco realiza la transferencia, el banco comprueba que dispone de saldo suficiente, valida la operación y actualiza sus bases de datos. Una vez realizado este proceso, la transferencia queda registrada de forma definitiva.</p>

<p>En este caso existe una entidad central, el banco, que se encarga de comprobar las operaciones y decidir qué movimientos se registran.</p>

<p>Bitcoin funciona de forma diferente.</p>

<p>No existe un banco, una empresa o una autoridad central encargada de controlar las transacciones.</p>

<p>Sin embargo, las personas siguen enviando y recibiendo bitcoins constantemente.</p>

<p>Imagina ahora que Paco quiere enviar 10 bitcoins a Juan.</p>

<p>Al mismo tiempo, miles de usuarios de todo el mundo están realizando otras transacciones.</p>

<p>Antes de incorporarse a la blockchain, todas estas transacciones son comprobadas por los nodos de la red.</p>

<p>Los nodos verifican que las transacciones son correctas, que los usuarios disponen de los fondos necesarios y que nadie está intentando gastar las mismas monedas dos veces.</p>

<p>Las transacciones que superan estas comprobaciones se consideran válidas y quedan a la espera de ser incorporadas a la blockchain.</p>

<p>Podemos imaginar esta situación como una cola de operaciones pendientes de registrar.</p>

<p>En un banco sería la propia entidad quien las incorporaría a su base de datos.</p>

<p>Pero en Bitcoin surge una pregunta importante:</p>

<p><strong>¿Quién decide qué transacciones válidas se incorporan a continuación a la blockchain?</strong></p>

<p>Aquí es donde entran en juego los mineros.</p>

<p>Los mineros son participantes de la red que utilizan equipos informáticos especializados para intentar añadir nuevos bloques a la blockchain.</p>

<p>Su trabajo consiste en recoger transacciones válidas, agruparlas dentro de un bloque candidato e intentar incorporarlo a la cadena de bloques.</p>

<p>Podríamos compararlos con los empleados encargados de registrar operaciones en un banco, aunque en Bitcoin no trabajan para ninguna empresa concreta y compiten entre sí.</p>

<p>Pero existe otro problema.</p>

<p>Si cualquiera pudiera añadir bloques libremente, una persona podría intentar registrar información falsa o reclamar recompensas sin realizar ningún trabajo.</p>

<p>Por este motivo, Bitcoin exige una prueba antes de permitir que un bloque sea añadido a la blockchain.</p>

<p>Esa prueba es lo que conocemos como minería.</p>

<p>La red plantea un desafío matemático que todos los mineros intentan resolver al mismo tiempo.</p>

<p>La pregunta que muchas personas se hacen es: <strong>¿qué tiene que ver resolver un problema matemático con añadir un bloque a la blockchain?</strong></p>

<p>La respuesta es que el problema matemático no sirve para comprobar si las transacciones son correctas. Esa tarea ya ha sido realizada previamente por los nodos de la red.</p>

<p>Lo que intenta demostrar es que el minero realmente ha invertido tiempo, electricidad y potencia de cálculo para ayudar a mantener la red.</p>

<p>Podemos compararlo con una competición.</p>

<p>Imagina que se ofrece un premio de 1.000 euros a la primera persona que complete una prueba especialmente difícil.</p>

<p>Cualquiera podría decir que merece el premio, pero únicamente quien consiga superar la prueba podrá reclamarlo.</p>

<p>En Bitcoin ocurre algo parecido.</p>

<p>Miles de mineros compiten simultáneamente para resolver el mismo problema matemático.</p>

<p>El primero que encuentra una solución válida demuestra que ha realizado el trabajo exigido por la red.</p>

<p>Por ese motivo obtiene el derecho a añadir el bloque a la blockchain.</p>

<p>Los demás participantes verifican rápidamente que la solución es correcta.</p>

<p>Si todo es válido, el bloque se añade a la blockchain y las transacciones que contiene pasan a formar parte permanente del historial de Bitcoin.</p>

<p>Como recompensa por haber realizado este trabajo, el minero ganador recibe nuevos bitcoins y las comisiones asociadas a las transacciones incluidas en el bloque.</p>

<p>Pulsa el botón para observar una simulación simplificada del proceso de minería.</p>

</div>

<button id="mineButton" class="hero-button">

Simular minería

</button>

<div id="nonceCounter" class="nonce-box">

Pulsa "Simular minería" para comenzar.

</div>

<div class="info-box" style="margin-top:20px;">

<h3>¿Qué representa esta simulación?</h3>

<p>La simulación muestra de forma simplificada lo que ocurre cuando varios mineros compiten para añadir un nuevo bloque a la blockchain.</p>

<p>Las transacciones ya han sido verificadas previamente por los nodos de la red.</p>

<p>Ahora los mineros intentan conseguir el derecho a añadir ese bloque y obtener la recompensa correspondiente.</p>

<p>Los primeros intentos no tendrán éxito.</p>

<p>Finalmente uno de los mineros encontrará una solución válida y el bloque será añadido a la blockchain.</p>

</div>
<p></p>

<details class="info-box" style="margin-top:20px;">

<summary style="cursor:pointer;font-weight:bold;color:var(--primary);">
Ver explicación más técnica
</summary>

<div style="margin-top:20px;">

<p>Desde un punto de vista técnico, la minería forma parte del mecanismo de consenso denominado <strong>Proof of Work</strong> o Prueba de Trabajo.</p>

<p>Los mineros construyen un bloque candidato que contiene transacciones válidas y el hash del bloque anterior.</p>

<p>Posteriormente modifican continuamente un valor denominado <strong>nonce</strong>.</p>

<p>Cada vez que cambia el nonce se calcula un nuevo hash para el bloque.</p>

<p>La red exige que dicho hash cumpla determinadas condiciones para ser considerado válido.</p>

<p>En Bitcoin no existe una fórmula que permita calcular directamente la solución correcta.</p>

<p>Por ello los mineros deben realizar millones o incluso miles de millones de intentos por segundo hasta encontrar un hash válido.</p>

<p>Cuando un minero encuentra una solución, el resto de nodos puede verificarla rápidamente.</p>

<p>Si la solución es correcta, el bloque se incorpora a la blockchain y el minero recibe la recompensa correspondiente.</p>

<p>La dificultad del problema se ajusta automáticamente para que, de media, se genere aproximadamente un nuevo bloque cada diez minutos.</p>

<p>Gracias a este mecanismo resulta extremadamente costoso intentar modificar bloques antiguos o alterar el historial de transacciones de la red.</p>

</div>

</details>

`

};