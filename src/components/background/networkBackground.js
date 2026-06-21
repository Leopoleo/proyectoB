export function createNetworkBackground() {

const canvas =
    document.createElement("canvas");

canvas.id = "networkCanvas";
document.body.appendChild(canvas);

const ctx =
    canvas.getContext("2d");

let width =
    window.innerWidth;

let height =
    window.innerHeight;

canvas.width = width;
canvas.height = height;

const particles = [];

for(let i=0;i<60;i++){

    particles.push({

        x:Math.random()*width,
        y:Math.random()*height,

        vx:(Math.random()-0.5)*0.4,
        vy:(Math.random()-0.5)*0.4

    });

}

function animate(){

    ctx.clearRect(
        0,
        0,
        width,
        height
    );

    particles.forEach(p=>{

        p.x += p.vx;
        p.y += p.vy;

        if(p.x<0 || p.x>width)
            p.vx*=-1;

        if(p.y<0 || p.y>height)
            p.vy*=-1;

        ctx.beginPath();

        ctx.arc(
            p.x,
            p.y,
            2,
            0,
            Math.PI*2
        );

        ctx.fillStyle =
            "#06b6d4";

        ctx.fill();

    });

    requestAnimationFrame(
        animate
    );

}

animate();

}