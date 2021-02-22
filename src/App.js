import React from 'react';
import './index.css';
import SearchImage from './components/SearchImage';
import { Heading } from './components/Heading';
import ImagesList from './components/ImagesList';
import { Modal } from './components/Modal';

const App = () => {
  const [selectedImg, setSelectedImg] = React.useState(null);
  return (
    <div>
      <Heading />
      <SearchImage />
      <ImagesList setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
};

export default App;
