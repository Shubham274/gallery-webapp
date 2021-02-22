import React from 'react';
import { useGlobalContext } from '../context';
export const Modal = ({ selectedImg, setSelectedImg }) => {
  console.log(selectedImg);
  const { images } = useGlobalContext();
  const handleClick = () => {
    setSelectedImg(null);
  };

  let newData;
  {
    images.find((image) => {
      const check = image.urls.thumb === selectedImg;
      if (check === true) {
        return (newData = [
          {
            id: image.id,
            name: image.user.name,
            likes: image.likes,
            url: image.user.portfolio_url,
            image: image.user.profile_image.medium,
          },
        ]);
      }
    });
  }

  return (
    <div>
      <div className="backdrop" onClick={handleClick}>
        {newData.map((item) => {
          return (
            <div key={item.id} className="modal_image">
              <img src={selectedImg} alt="pic" class="backdrop_img" />
              <div className="photo-info">
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.likes} likes</p>
                </div>
                <a href={item.url} target="_blank" rel="noreferrer">
                  <img src={item.image} alt={item.name} className="user-img" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
