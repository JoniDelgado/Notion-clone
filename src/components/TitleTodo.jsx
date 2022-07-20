import React, { useState, useContext } from 'react';
import { Icon } from 'semantic-ui-react';
import ModalImg from '../context/ModalImgContext';
import ModalEmojiContext from '../context/ModalEmojiContext';
import './TitleTodo.css';

const TitleTodo = () => {
  const { handleShowModal, heroImage } = useContext(ModalImg);
  const { handleShowEmojiPiker } = useContext(ModalEmojiContext);

  const [title, setTitle] = useState('');
  const handleTitleChange = (e) => setTitle(e.target.value);

  return (
    <>
      <section className='title-section'>
        <div className='title-buttons'>
          <button className='cover-btn btn-show' onClick={handleShowEmojiPiker}>
            {<Icon name='smile' />} Add Icon
          </button>
          <button onClick={handleShowModal} className='cover-btn btn-show'>
            {<Icon name='image' />}
            {heroImage ? 'Change Cover' : 'Add Cover'}
          </button>
        </div>
        <div className='title-section'>
          <input
            id='title'
            type='text'
            value={title}
            onChange={handleTitleChange}
            placeholder='Untitled'
          />
        </div>
      </section>
    </>
  );
};

export default TitleTodo;
