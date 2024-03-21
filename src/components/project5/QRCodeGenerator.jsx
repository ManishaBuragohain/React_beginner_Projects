import React, { useState } from "react";
import QRCode from "react-qr-code";

const QRCodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const handleGenerateQrCode = () => {
    setQrCode(input);
  };
  return (
    <div>
      <h1> QR CODE GENERATOR </h1>
      <div style={{ marginBottom: "2rem" }}>
        <input
          type="text"
          name="qr-code"
          placeholder="entre your 
        value here"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
        >
          generate
        </button>
      </div>

      <QRCode id="qr-code-value" value={qrCode} bgColor="#ffff" />
    </div>
  );
};

export default QRCodeGenerator;
