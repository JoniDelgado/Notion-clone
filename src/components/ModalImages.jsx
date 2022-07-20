import React, { useState, useEffect } from 'react';
import './ModalImages.css';

const api_key = '563492ad6f9170000100000166f6d951fc6e4c60ab104a1bce2ed8c7';
const api_url = 'https://api.pexels.com/v1/curated?page=100&per_page=20';

const ModalImages = ({ handleClickImg, closeModalImage, clearHeroImg }) => {
  const [images, setImages] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const image = await fetch(api_url, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: api_key,
          },
        });
        const res = await image.json();
        if (!image.ok) throw new Error('Ha ocurrido un error');
        setImages(res.photos);
      } catch (ex) {
        console.log(ex, ex.message);
      }
    };

    fetchImages();
  }, []);
  return (
    <section className='module' onClick={closeModalImage}>
      <div className='module-wrapper'>
        <div className='module-header'>
          <h4>Elige una Imagen de cover</h4>
          <button onClick={clearHeroImg}>Quitar</button>
        </div>
        <div className='img-container'>
          {images &&
            images.map((img) => {
              return (
                <div
                  onClick={() => handleClickImg(img)}
                  key={img.id}
                  className='img'
                >
                  <img src={img.src.small} alt={img.src.alt} />
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default ModalImages;
