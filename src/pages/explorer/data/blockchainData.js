export const blockchainData = [

{
    id:"genesis",

    label:"Genesis",

    transactions:1,

    hash:"000000a1f2c3",

    previous:"-",

    nonce:0,

    timestamp:"03/01/2009",

    explanation:
        "El bloque Génesis es el primer bloque de toda la blockchain.",

    educationalText:`

        El bloque Génesis es el primer bloque de toda la blockchain.

        A diferencia del resto de bloques, no tiene un bloque anterior.

        Todos los bloques posteriores estarán enlazados directa o indirectamente con él.

        Por este motivo se considera el punto de partida de toda la red blockchain.

    `,

    txs:[
        "Creación de la red"
    ]

},

{
    id:"block1",

    label:"Bloque 1",

    transactions:3,

    hash:"000000b2d3e4",

    previous:"000000a1f2c3",

    nonce:4587,

    timestamp:"04/01/2009",

    explanation:
        "Primer bloque añadido tras el Génesis.",

    educationalText:`

        Este bloque contiene las primeras transacciones verificadas por la red.

        Los nodos comprobaron que las operaciones eran válidas.

        Una vez verificadas, fueron agrupadas dentro de este bloque y añadidas a la cadena.

        Desde este momento la información queda registrada de forma permanente.

    `,

    txs:[

        {
            from:"Paco",
            to:"Juan",
            amount:"2 BTC"
        },

        {
            from:"Ana",
            to:"Luis",
            amount:"0.5 BTC"
        },

        {
            from:"Bob",
            to:"Marta",
            amount:"1 BTC"
        }

        ]

},

{
    id:"block2",

    label:"Bloque 2",

    transactions:5,

    hash:"000000c3e4f5",

    previous:"000000b2d3e4",

    nonce:9852,

    timestamp:"05/01/2009",

    explanation:
        "Bloque enlazado criptográficamente con el anterior.",

    educationalText:`

        Cada bloque almacena el hash del bloque anterior.

        Gracias a ello todos los bloques quedan conectados.

        Si alguien modificara una sola transacción, el hash cambiaría y la cadena dejaría de ser válida.

        Este mecanismo proporciona integridad e inmutabilidad a la blockchain.

    `,

    txs:[

        {
            from:"Paco",
            to:"Juan",
            amount:"2 BTC"
        },

        {
            from:"Ana",
            to:"Luis",
            amount:"0.5 BTC"
        },

        {
            from:"Bob",
            to:"Marta",
            amount:"1 BTC"
        }

        ]

},

{
    id:"block3",

    label:"Bloque 3",

    transactions:2,

    hash:"000000d4f5g6",

    previous:"000000c3e4f5",

    nonce:12455,

    timestamp:"06/01/2009",

    explanation:
        "Bloque validado y añadido a la cadena.",

    educationalText:`

        Los mineros o validadores son los encargados de proponer nuevos bloques.

        Una vez validado, el bloque se añade al final de la cadena.

        Cuantos más bloques se construyen encima, más difícil resulta modificar la información histórica.

        Por ello las confirmaciones aumentan la seguridad de las transacciones.

    `,

    txs:[

        {
            from:"Paco",
            to:"Juan",
            amount:"2 BTC"
        },

        {
            from:"Ana",
            to:"Luis",
            amount:"0.5 BTC"
        },

        {
            from:"Bob",
            to:"Marta",
            amount:"1 BTC"
        }

        ]

}

];