

export const hashesContent = {

title:"Hashes",

content:`

<div class="info-box">

<h2>¿Qué es un hash?</h2>

<p>Un hash es el resultado de aplicar una función matemática a un conjunto de datos.</p>

<p>Aunque pueda parecer un concepto complejo, podemos imaginarlo como una especie de huella digital de la información.</p>

<p>Al igual que dos personas no suelen tener la misma huella dactilar, dos conjuntos de datos diferentes generan hashes diferentes.</p>

<p>Por ejemplo, un mensaje como "Paco paga 10 monedas a Juan" puede transformarse en una cadena de caracteres aparentemente aleatoria.</p>

<p>Lo más importante es que un pequeño cambio en los datos provoca un resultado completamente distinto.</p>

<p>Si modificamos el mensaje anterior y escribimos "Paco paga 11 monedas a Juan", aunque solo haya cambiado un número, el hash generado será totalmente diferente.</p>

<p>Esta propiedad permite detectar rápidamente si una información ha sido modificada o manipulada.</p>

<p>En blockchain, los hashes se utilizan para identificar bloques y conectar unos bloques con otros formando una cadena.</p>

<p>Cada bloque almacena el hash del bloque anterior. Gracias a esta relación, cualquier modificación realizada sobre un bloque afecta automáticamente a todos los bloques posteriores.</p>

<p>Por este motivo, los hashes desempeñan un papel fundamental en la seguridad y la integridad de una blockchain.</p>

<p>Prueba a escribir un texto en el siguiente cuadro y observa cómo cambia el hash. Después modifica una sola letra y compara el resultado obtenido.</p>

</div>

<input
id="hashInput"
class="hash-input"
placeholder="Escribe un texto"
/>

<div
id="hashResult"
class="hash-result">

Resultado del hash

</div>

<details class="info-box" style="margin-top:20px;">

<summary style="cursor:pointer;font-weight:bold;color:var(--primary);">
Ver explicación más técnica
</summary>

<div style="margin-top:20px;">

<p>Desde un punto de vista técnico, un hash es el resultado generado por una función criptográfica aplicada a una entrada de datos de cualquier tamaño.</p>

<p>La función transforma la información original en una secuencia de caracteres de longitud fija que actúa como identificador único del contenido procesado.</p>

<p>En Bitcoin se utiliza principalmente el algoritmo SHA-256, que genera hashes de 256 bits independientemente del tamaño de los datos de entrada.</p>

<p>Una característica fundamental de las funciones hash es que son unidireccionales. Esto significa que resulta sencillo calcular el hash a partir de unos datos, pero extremadamente difícil reconstruir los datos originales a partir del hash.</p>

<p>Otra propiedad importante es el denominado efecto avalancha. Un cambio mínimo en la información original produce un resultado completamente diferente en el hash generado.</p>

<p>Gracias a esta característica, los hashes permiten detectar modificaciones accidentales o intentos de manipulación de forma inmediata.</p>

<p>En una blockchain, los hashes se utilizan para identificar bloques, verificar la integridad de la información y establecer vínculos entre bloques consecutivos.</p>

<p>Cada bloque incorpora el hash del bloque anterior. Como consecuencia, cualquier modificación realizada sobre un bloque alteraría automáticamente todos los hashes posteriores de la cadena.</p>

<p>Esta dependencia matemática es uno de los mecanismos que proporcionan inmutabilidad y seguridad a la blockchain.</p>

<p>Además, los hashes también desempeñan un papel fundamental en procesos como la minería, el cálculo de la prueba de trabajo y la validación de bloques dentro de la red.</p>

</div>

</details>

`

};