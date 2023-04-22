// Необходимо написать функции, которые бы принимали ссылку на изображение или canvas и применяла бы к нему один из эффектов.
// Например, инверсия цветов или оттенки серого. Для реализации эффектов, необходимо использовать методы Canvas getImageData/putImageData
// и работа с цветами пикселей. Возвращать такая функция может ссылку на Canvas или ImageData.

import { useRef } from "react";
import berserkImg from "./assets/berserk.png";

// const grayscaled = grayscale('/myImage.jpeg');
// const inversed = inverse(grayscaled);

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleInverse = () => {
    if (imgRef.current && canvasRef.current) {
      const ctx = canvasRef.current?.getContext("2d");
      canvasRef.current.width = imgRef.current.clientWidth
      canvasRef.current.height = imgRef.current.clientHeight

      ctx?.drawImage(imgRef.current, 0, 0);
      const imageData = ctx?.getImageData(0, 0, imgRef.current.clientWidth, imgRef.current.clientHeight);

      if (imageData)
        for (let i = 0; i < imageData.data.length; i += 4) {
          imageData.data[i] = 255 - imageData.data[i]; //red
          imageData.data[i + 1] = 255 - imageData.data[i + 1]; //green
          imageData.data[i + 2] = 255 - imageData.data[i + 2]; //blue
        }
      imageData && ctx?.putImageData(imageData, 0, 0);
      console.log(imageData);
    }
  };

  const handleGrayscale = () => {
    if (imgRef.current && canvasRef.current) {
      const ctx = canvasRef.current?.getContext("2d");
      canvasRef.current.width = imgRef.current.clientWidth
      canvasRef.current.height = imgRef.current.clientHeight

      ctx?.drawImage(imgRef.current, 0, 0);
      const imageData = ctx?.getImageData(0, 0, imgRef.current.clientWidth, imgRef.current.clientHeight);

      if (imageData)
        for (let i = 0; i < imageData.data.length; i += 4) {
          const r = imageData.data[i]
          const g = imageData.data[i + 1]
          const b = imageData.data[i + 2]
          const gray = 0.21 * r + 0.72 * g + 0.07 * b
          imageData.data[i] = gray; //red
          imageData.data[i + 1] = gray; //green
          imageData.data[i + 2] = gray; //blue
        }
      imageData && ctx?.putImageData(imageData, 0, 0);
      console.log(imageData);
    }
  };

  return (
    <div className="App">
      <img ref={imgRef} src={berserkImg} />
      <canvas ref={canvasRef} />
      <button onClick={handleInverse}>Inverse</button>
      <button onClick={handleGrayscale}>GrayScale</button>
    </div>
  );
}

export default App;
