export const networkNodes = [

{
    id:"nodeA",
    label:"Nodo A",
    x:300,
    y:120
},

{
    id:"nodeB",
    label:"Nodo B",
    x:120,
    y:280
},

{
    id:"nodeC",
    label:"Nodo C",
    x:500,
    y:280
},

{
    id:"nodeD",
    label:"Nodo D",
    x:300,
    y:450
}

];

export const networkConnections = [

["nodeA","nodeB"],
["nodeA","nodeC"],
["nodeB","nodeC"],
["nodeB","nodeD"],
["nodeC","nodeD"]

];