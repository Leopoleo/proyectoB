export const blockchainContent = {

title:"¿Qué es Blockchain?",

content:`

<div class="info-box">

<h2>¿Qué es Blockchain? explicación facil</h2>


<p>Imagina que quieres enviar dinero a un amigo.</p>

<p>En un banco tradicional, existe una entidad central que controla todo el proceso. El banco comprueba que tienes saldo suficiente, registra la operación y actualiza las cuentas de los usuarios.</p>

<p>Todos "confíamos" en nuestro banco. El banco mantiene la información correcta de cada persona y evita que alguien, por ejemplo, pueda gastar el mismo dinero dos veces o utilizar dinero que pertenece a otra persona.</p>

<p>Blockchain busca conseguir el mismo resultado, pero sin depender de una única organización, sin depender de un banco.</p>

<p>En lugar de que una sola entidad controle el registro, la información se comparte entre miles de ordenadores repartidos por todo el mundo.</p>

<p>Cuando se realiza una operación, estos ordenadores colaboran para comprobar que es válida. Una vez verificada, la operación se registra junto con otras dentro de un bloque.</p>

<p>Cada nuevo bloque se conecta con el bloque anterior, formando una cadena de registros ordenados cronológicamente.</p>

<p>Es como si, en lugar de que un único banco guardara el libro de cuentas, miles de personas tuvieran una copia idéntica y estuvieran comprobando constantemente que nadie modifica los datos de forma fraudulenta.</p>

<p>Gracias a este sistema, la información resulta muy difícil de alterar una vez registrada y todos los participantes pueden verificar las operaciones de manera transparente.</p>

<p>Por este motivo se utiliza el nombre Blockchain, que significa literalmente «cadena de bloques».</p>

<p>En resumen, un banco tradicional es un sistema centralizado, ya que una única entidad controla el dinero y valida todas las operaciones. Por el contrario, blockchain es un sistema descentralizado, donde la información y la validación de las operaciones se distribuyen entre muchos participantes de la red, evitando depender de una única organización.</p>

<p>Puede que no siempre estemos de acuerdo con las comisiones o condiciones de nuestro banco, pero aun así confiamos en él. Entonces, ¿por qué deberíamos confiar en blockchain?</p>

<p>Cuando utilizamos un banco, confiamos en una entidad concreta porque está regulada, tiene empleados, oficinas, sistemas de seguridad y responde legalmente ante posibles problemas.</p>

<p>En blockchain el modelo de confianza es diferente. No se basa en confiar en una única organización, sino en confiar en las reglas del sistema y en que miles de participantes verifican conjuntamente las operaciones.</p>

<p>Cada operación es comprobada por numerosos participantes de la red y queda registrada de forma pública y permanente. Si alguien intentara modificar la información de manera fraudulenta, tendría que alterar simultáneamente una gran cantidad de copias distribuidas por todo el mundo, algo extremadamente difícil.</p>

<p>Por tanto, mientras que en un banco confiamos en una institución, en blockchain confiamos en un sistema distribuido donde muchos participantes supervisan y validan las operaciones de forma conjunta.</p>

<p><strong>Pero...</strong> blockchain no es algo que se compre o se venda.</p>

<p>Blockchain es la tecnología que permite registrar y verificar información de forma segura y distribuida. Lo que las personas compran, venden o utilizan para realizar transacciones son criptomonedas que funcionan sobre ella, como Bitcoin o Ethereum.</p>

<p>Pero antes tienes que conocer otros conceptos fundamentales que te ayudarán a comprender cómo funciona realmente una blockchain.</p>




</div>

<details class="info-box" style="margin-top:20px;">

<summary style="cursor:pointer;font-weight:bold;color:var(--primary);">
Ver explicación más técnica
</summary>

<div style="margin-top:20px;">

<p>Una blockchain, o cadena de bloques, es una base de datos distribuida que permite almacenar información de forma compartida entre numerosos ordenadores conectados a una red.</p>

<p>A diferencia de una base de datos tradicional, donde una única organización controla toda la información, en una blockchain cada participante mantiene una copia actualizada del registro completo de operaciones.</p>

<p>La información se almacena dentro de estructuras denominadas bloques. Cada bloque contiene un conjunto de transacciones validadas, una marca temporal y una referencia al bloque anterior.</p>

<p>Esta referencia se realiza mediante un valor denominado <strong>hash</strong>, una huella digital única generada a partir del contenido del bloque.</p>

<p>Gracias a los hashes, todos los bloques quedan enlazados formando una cadena cronológica. Cada bloque depende matemáticamente del anterior, creando una relación que permite preservar la integridad de toda la información almacenada.</p>

<p>Cuando un nuevo bloque es añadido a la cadena, pasa a formar parte permanente del historial de la red. Todos los participantes actualizan sus copias para reflejar el nuevo estado de la blockchain.</p>

<p>Si un atacante intentara modificar una transacción registrada en un bloque antiguo, cambiaría automáticamente el hash de dicho bloque. Como consecuencia, dejarían de coincidir las referencias utilizadas por los bloques posteriores, haciendo evidente la manipulación.</p>

<p>Además, al existir múltiples copias distribuidas entre numerosos participantes, una modificación fraudulenta tendría que realizarse simultáneamente en gran parte de la red, algo extremadamente complejo.</p>

<p>Esta combinación de distribución, verificación colectiva y encadenamiento mediante hashes permite que la blockchain proporcione elevados niveles de transparencia, trazabilidad e integridad de la información.</p>

<p>En las siguientes secciones aprenderás cómo funcionan los hashes, las transacciones, los nodos y los mecanismos que permiten a la red validar y añadir nuevos bloques a la cadena.</p>


</div>

</details>

`

};