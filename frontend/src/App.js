import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Iframe component that loads our static HTML site
const CraftedCodeJoy = () => {
  return (
    <div className="crafted-code-joy">
      <iframe 
        src="/index.html" 
        title="craftedcodejoy website" 
        style={{
          width: '100%',
          height: '100vh',
          border: 'none',
          overflow: 'hidden'
        }}
      />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CraftedCodeJoy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
