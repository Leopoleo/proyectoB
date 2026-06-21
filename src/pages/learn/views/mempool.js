
export const mempoolContent = {

title:"Mempool",

content:`

<div class="info-box">

<h2>¿Qué es la mempool?</h2>

<p>La mempool es una zona temporal donde se almacenan las transacciones que han sido enviadas a la red pero que todavía no han sido incluidas en un bloque.</p>

<p>Podemos imaginar la mempool como una sala de espera en la que las transacciones permanecen mientras esperan ser procesadas.</p>

<p>Cuando un usuario realiza una transacción, esta se propaga a través de la red y es verificada por los nodos participantes.</p>

<p>Si la transacción cumple todas las reglas establecidas por la blockchain, pasa a formar parte de la mempool.</p>

<p>Las transacciones permanecen en esta zona temporal hasta que un minero o validador decide incorporarlas a un nuevo bloque.</p>

<p>Normalmente, las transacciones con comisiones más elevadas suelen tener prioridad, ya que resultan más atractivas para los mineros.</p>

<p>Durante periodos de gran actividad, la mempool puede acumular miles de transacciones pendientes de confirmación.</p>

<p>Esto puede provocar que algunas operaciones tarden más tiempo en ser procesadas y añadidas a la blockchain.</p>

<p>Una vez que una transacción es incluida en un bloque válido, desaparece de la mempool y pasa a formar parte permanente del historial de la red.</p>

<p>La mempool desempeña un papel fundamental en el funcionamiento de la blockchain, ya que actúa como punto intermedio entre la creación de una transacción y su confirmación definitiva.</p>

</div>

<details class="info-box" style="margin-top:20px;">

<summary style="cursor:pointer;font-weight:bold;color:var(--primary);">
Ver explicación más técnica
</summary>

<div style="margin-top:20px;">

<p>La mempool, abreviatura de Memory Pool, es una estructura temporal utilizada por los nodos para almacenar transacciones válidas que todavía no han sido incluidas en un bloque.</p>

<p>Cada nodo mantiene su propia mempool local, por lo que no existe una única mempool compartida por toda la red.</p>

<p>Cuando una transacción es recibida, el nodo verifica aspectos como las firmas criptográficas, la disponibilidad de fondos y el cumplimiento de las reglas del protocolo.</p>

<p>Si todas las comprobaciones son correctas, la transacción es aceptada y almacenada en la mempool del nodo.</p>

<p>Los mineros o validadores consultan periódicamente la mempool para seleccionar las transacciones que incluirán en los siguientes bloques.</p>

<p>En redes basadas en Proof of Work, los mineros suelen priorizar las transacciones que ofrecen mayores comisiones, ya que estas incrementan la recompensa obtenida por la creación del bloque.</p>

<p>Cuando la cantidad de transacciones pendientes supera la capacidad disponible de los bloques, la mempool puede congestionarse y aumentar los tiempos de espera.</p>

<p>Una vez que una transacción es incluida en un bloque aceptado por la red, los nodos la eliminan de sus mempools locales para evitar que vuelva a procesarse.</p>

<p>La mempool actúa como un mecanismo de coordinación que permite gestionar eficientemente las transacciones pendientes antes de su incorporación definitiva a la blockchain.</p>

</div>

</details>

`

};