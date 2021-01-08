import React, { useRef, useEffect } from 'react';

function Canvas(props) {

  const canvasRef = useRef(null);

  const draw = (ctx, frameCount, mode) => {

    const title = "Things Fall Apart";
    const author = "Chinua Achebe";
    const publisher = "aws";

    let red = "#A11101";
    let orange = "#DF8208";

    switch (mode) {

      case "colourBlock":
        ctx.fillStyle = red;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        ctx.fillStyle = "#ffffff";

        ctx.save();

        ctx.translate(ctx.canvas.width * 0.5, ctx.canvas.height * 0.5);
        ctx.rotate((Math.PI / 180) * 90);
        ctx.textBaseline = "middle";
        ctx.textAlign = "left";
        ctx.font = "16px serif";
        ctx.fillText(title, -ctx.canvas.height * 0.5 + 20, 0);
        ctx.textAlign = "right";
        ctx.font = "12px serif";
        ctx.fillText(author, ctx.canvas.height * 0.5 - 40, 0);
        ctx.restore();

        ctx.textAlign = "center";
        ctx.font = "11px serif";
        ctx.fillText(publisher, ctx.canvas.width * 0.5, ctx.canvas.height - 20);
        break;

      case "colourGradient":
        let grad = ctx.createLinearGradient(0, 0, ctx.canvas.width, ctx.canvas.height);
        grad.addColorStop(0, red);
        grad.addColorStop(1, orange);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        ctx.fillStyle = "#ffffff";

        ctx.save();

        ctx.translate(ctx.canvas.width * 0.5, ctx.canvas.height * 0.5);
        ctx.rotate((Math.PI / 180) * 90);
        ctx.textBaseline = "middle";
        ctx.textAlign = "left";
        ctx.font = "16px serif";
        ctx.fillText(title, -ctx.canvas.height * 0.5 + 20, 0);
        ctx.textAlign = "right";
        ctx.font = "12px serif";
        ctx.fillText(author, ctx.canvas.height * 0.5 - 40, 0);
        ctx.restore();

        ctx.textAlign = "center";
        ctx.font = "11px serif";
        ctx.fillText(publisher, ctx.canvas.width * 0.5, ctx.canvas.height - 20);    
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let frameCount = 0;
    let animationFrameId;

    const render = () => {
      frameCount++;
      draw(context, frameCount, props.mode);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    }
  }, [draw]);

  return (
    <canvas ref={canvasRef} {...props}></canvas>
  );
}

export default Canvas;