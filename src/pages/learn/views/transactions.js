
export const transactionsContent = {

title:"Transacciones",

content:`

<div class="info-box">

<h2>¿Qué es una transacción?</h2>

<p>Una transacción es una operación mediante la cual un usuario envía activos digitales a otro usuario dentro de una blockchain.</p>

<p>Las transacciones son el principal tipo de información que se registra en una blockchain y representan el movimiento de valor entre los participantes de la red.</p>

<p>Por ejemplo, cuando una persona envía Bitcoin a otra, se genera una transacción que indica quién envía los fondos, quién los recibe y qué cantidad se está transfiriendo.</p>

<p>Antes de que una transacción pueda registrarse permanentemente, debe ser comprobada por la red para verificar que cumple todas las reglas establecidas.</p>

<p>Estas comprobaciones ayudan a evitar errores y garantizan que un usuario no pueda gastar fondos que no posee o utilizar el mismo dinero varias veces.</p>

<p>Una vez que la transacción ha sido validada, queda pendiente de ser incluida dentro de un bloque junto con otras operaciones realizadas por diferentes usuarios.</p>

<p>Cuando el bloque es añadido a la blockchain, la transacción pasa a formar parte permanente del historial compartido por toda la red.</p>

<p>Gracias a este proceso, cualquier participante puede verificar posteriormente que la operación se realizó y fue aceptada correctamente.</p>

<p>Las transacciones constituyen la base del funcionamiento de las criptomonedas y permiten que los usuarios intercambien valor sin necesidad de una entidad central que gestione las operaciones.</p>

<p>En las siguientes secciones aprenderás cómo las transacciones se propagan por la red, cómo son almacenadas temporalmente en la mempool y cómo terminan siendo incorporadas a nuevos bloques.</p>

</div>

<details class="info-box" style="margin-top:20px;">

<summary style="cursor:pointer;font-weight:bold;color:var(--primary);">
Ver explicación más técnica
</summary>

<div style="margin-top:20px;">

<p>Desde un punto de vista técnico, una transacción es una estructura de datos que contiene toda la información necesaria para transferir activos digitales entre direcciones de una blockchain.</p>

<p>Cada transacción incluye datos como las direcciones de origen y destino, la cantidad transferida, las firmas criptográficas y otros metadatos definidos por el protocolo de la red.</p>

<p>Las firmas criptográficas permiten demostrar que la transacción ha sido autorizada por el propietario legítimo de los fondos sin necesidad de revelar información privada.</p>

<p>Cuando una transacción es creada, se transmite a los nodos de la red mediante el sistema peer-to-peer para que pueda ser verificada por los participantes.</p>

<p>Los nodos comprueban aspectos como la validez de las firmas, la disponibilidad de fondos y el cumplimiento de las reglas establecidas por el protocolo.</p>

<p>Las transacciones válidas son almacenadas temporalmente en una zona denominada mempool, donde permanecen a la espera de ser incluidas en un bloque.</p>

<p>Posteriormente, los mineros o validadores seleccionan transacciones de la mempool y las incorporan a nuevos bloques que serán añadidos a la blockchain.</p>

<p>Una vez confirmada dentro de un bloque aceptado por la red, la transacción pasa a formar parte permanente del historial distribuido de la blockchain.</p>

<p>Este proceso permite mantener un registro verificable, transparente y resistente a manipulaciones de todas las transferencias realizadas entre los participantes.</p>

</div>

</details>

`

};