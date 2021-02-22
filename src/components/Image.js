import React from 'react';

export const Image = ({ url, user, likes, setSelectedImg }) => {
  return (
    <article className="image-card" onClick={() => setSelectedImg(url)}>
      <img src={url} alt="" className="images" />
      <div className="text-content">
        <h3>{user}</h3>
        <h4 className="like">Likes: {likes}</h4>
      </div>
    </article>
  );
};
