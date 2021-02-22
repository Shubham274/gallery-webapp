import React from 'react';
import { useGlobalContext } from '../context';
import { Image } from './Image';
import { Loader } from './Loader';

const ImagesList = ({ setSelectedImg }) => {
  const { images, loading, error } = useGlobalContext();

  if (loading) {
    return <Loader />;
  }

  if (images.length < 1) {
    return (
      <h2 className="section-title">no images matched your search criteria</h2>
    );
  }

  if (error) {
    return <h2 className="section-title">{error}</h2>;
  }

  return (
    <div className="wrapper-image">
      {images.map((image) => {
        return (
          <Image
            key={image.id}
            url={image.urls.thumb}
            user={image.user.name}
            likes={image.likes}
            setSelectedImg={setSelectedImg}
          />
        );
      })}
    </div>
  );
};

export default ImagesList;
