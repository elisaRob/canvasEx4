window.onload=function(){
    const canvas=document.querySelector("canvas");
    if(canvas && canvas.getContext){
        let ctx=canvas.getContext("2d");
        if(ctx){
            ctx.strokeStyle="yellow";
            ctx.fillStyle="blue";
            ctx.lineWidth="5"
            ctx.fillRect(50,50,100,100);
            ctx.strokeRect(50,50,100,100);
            ctx.save();

            ctx.fillStyle="red";
            ctx.fillRect(150,150,100,100);

            ctx.restore();
            ctx.fillRect(150,300,100,100);
            
        }
    }
}