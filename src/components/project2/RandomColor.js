import React, { useEffect, useState } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  const generateRandomHexColor = () => {
    const hexValues = "0123456789ABCDEF";
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hexValues.charAt(Math.floor(Math.random() * 16));
    }
    return hexColor;
  };

  const generateRandomRgbColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };
  const handleCreateRandomColor = () => {
    const newColor =
      typeOfColor === "hex"
        ? generateRandomHexColor()
        : generateRandomRgbColor();
    setColor(newColor);
  };

  useEffect(() => {
    handleCreateRandomColor();
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>create a hex color</button>
      <button onClick={() => setTypeOfColor("rgb")}>create rgb color</button>
      <button onClick={handleCreateRandomColor}>generate random color</button>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "0px",
          fontSize: "60px",
          color: "fff",
          flexDirection: "column",
        }}
      >
        {" "}
        <h1>{typeOfColor === "rgb" ? "RGB COLOR" : "HEX COLOR"}</h1>
        <h3>{color}</h3>
      </div>
    </div>
  );
};

export default RandomColor;
