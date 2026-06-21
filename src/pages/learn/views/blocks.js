
export const blocksContent = {

title:"Bloques",

content:`

<div class="info-box">

<h2>¿Qué es un bloque?</h2>

<p>Los bloques son las estructuras fundamentales que forman una blockchain. Cada bloque almacena información que ha sido validada por la red.</p>

<p>Puedes imaginar un bloque como una página de un gran libro de registros compartido por todos los participantes de la blockchain.</p>

<p>Cada vez que se realizan nuevas transacciones, estas se agrupan dentro de un bloque antes de incorporarse definitivamente a la cadena.</p>

<p>Además de las transacciones, cada bloque contiene información adicional que permite identificarlo y relacionarlo con el resto de bloques de la red.</p>

<p>Uno de los elementos más importantes es el hash del bloque, una especie de huella digital única generada a partir de toda la información que contiene.</p>

<p>Los bloques también almacenan una referencia al bloque anterior. Gracias a esta conexión, todos los bloques quedan enlazados formando una cadena ordenada cronológicamente.</p>

<p>Cuando un nuevo bloque es añadido a la blockchain, pasa a formar parte permanente del historial compartido por todos los participantes de la red.</p>

<p>Si alguien intentara modificar la información de un bloque antiguo, su hash cambiaría automáticamente y la cadena dejaría de ser coherente, permitiendo detectar la manipulación.</p>

<p>Por este motivo, los bloques no solo sirven para almacenar información, sino también para proteger la integridad de toda la blockchain.</p>

<p>En las siguientes secciones aprenderás cómo se crean los bloques, cómo se verifican las transacciones que contienen y cómo se añaden a la cadena mediante los mecanismos de consenso.</p>

</div>

<details class="info-box" style="margin-top:20px;">

<summary style="cursor:pointer;font-weight:bold;color:var(--primary);">
Ver explicación más técnica
</summary>

<div style="margin-top:20px;">

<p>Desde un punto de vista técnico, un bloque es una estructura de datos que agrupa un conjunto de transacciones validadas junto con la información necesaria para garantizar la integridad de la blockchain.</p>

<p>Entre los datos almacenados en un bloque se encuentran las transacciones registradas, una marca temporal, su propio hash y el hash correspondiente al bloque anterior.</p>

<p>El hash se obtiene aplicando una función criptográfica al contenido completo del bloque. El resultado es un identificador único que actúa como una huella digital de toda la información almacenada.</p>

<p>La inclusión del hash del bloque anterior permite enlazar matemáticamente todos los bloques de la cadena. Como consecuencia, cualquier modificación realizada sobre un bloque alteraría automáticamente su hash.</p>

<p>Al cambiar el hash de un bloque, las referencias almacenadas en los bloques posteriores dejarían de coincidir, rompiendo la continuidad de la cadena y revelando la manipulación.</p>

<p>Esta dependencia entre bloques proporciona una elevada resistencia frente a modificaciones no autorizadas y contribuye a la inmutabilidad del historial de transacciones.</p>

<p>En redes como Bitcoin, los bloques incluyen además información utilizada durante el proceso de consenso, como el nonce, la dificultad de minado y otros metadatos necesarios para la validación del bloque.</p>

<p>Gracias a esta arquitectura, los bloques permiten almacenar información de forma distribuida, verificable y resistente a alteraciones, constituyendo la base sobre la que se construye toda blockchain.</p>

</div>

</details>

`

};