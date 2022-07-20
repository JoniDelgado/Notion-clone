import React, { useContext } from 'react';
import ModalEmojiContext from '../context/ModalEmojiContext';
import ModalImg from '../context/ModalImgContext';
import './HeroTodo.css';

const HeroTodo = () => {
  const { heroImage } = useContext(ModalImg);
  const { chosenEmoji } = useContext(ModalEmojiContext);

  return (
    <div className='hero-container'>
      <div className='hero-img'>
        <img src={heroImage ? heroImage : undefined} alt='' />
      </div>
      <div className='emoji-section'>
        <span role='img'>{chosenEmoji.emoji}</span>
      </div>
    </div>
  );
};

export default HeroTodo;
