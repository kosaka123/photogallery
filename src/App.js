import React, { useState } from "react";
import "./App.css";
import ImageShow from "./ImageShow";
import Modal from "./Modal";
import Title from "./Title";
import Uploads from "./Uploads";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <Uploads />
      <ImageShow setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
