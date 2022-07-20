import React, { useContext } from 'react';
import ModalEmojiContext from '../context/ModalEmojiContext';
import Picker from 'emoji-picker-react';
import './EmojiModal.css';

const EmojiModal = () => {
  const { onEmojiClick } = useContext(ModalEmojiContext);
  return (
    <div className='emoji-picker-container'>
      <Picker onEmojiClick={onEmojiClick} disableSearchBar='true' />
    </div>
  );
};

export default EmojiModal;
