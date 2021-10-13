canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle=grey;
ctx.lineWidth=1;
ctx.rect(150,143,430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=Blue;
ctx.lineWidth=5;
ctx.arc(250,210,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=Black;
ctx.lineWidth=5;
ctx.rect(350,210,40,0,2);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=red;
ctx.lineWidth=5;
ctx.rect(450,210,40,0,2);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=yellow;
ctx.lineWidth=5;
ctx.rect(300,250,40,0,2);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=Green;
ctx.lineWidth=5;
ctx.rect(400,250,40,0,2);
ctx.stroke();

function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}