import React, { useState } from 'react';
import ImageGrid from './Comps/ImageGrid';
import Modal from './Comps/Modal';
import Title from './Comps/Title';
import UploadForm from './Comps/UploadForm';



function App() {
  const [selectedImg, setselectedimg] = useState(null);

  return (
    <div className="App">

      <Title />
      <UploadForm />
      <ImageGrid setselectedimg={setselectedimg} />
      {selectedImg && <Modal selectedimg={selectedImg} setselectedimg={setselectedimg} />}
    </div>
  );
}

export default App;
