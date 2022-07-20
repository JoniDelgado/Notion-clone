import React, { useContext } from 'react';
import ModalEmojiContext from '../context/ModalEmojiContext';
import ModalImg from '../context/ModalImgContext';
import EmojiModal from './EmojiModal';
import ModalImages from './ModalImages';
import HeroTodo from './HeroTodo';
import TitleTodo from './TitleTodo';
import BodyTodo from './BodyTodo';
import './HomeTodo.css';

const HomeTodo = () => {
  const { showModalImg, closeModalImage, handleClickImg } =
    useContext(ModalImg);

  const { showEmojiPiker, handleShowEmojiPiker } =
    useContext(ModalEmojiContext);

  return (
    <>
      {showEmojiPiker && <EmojiModal />}
      {showModalImg && (
        <ModalImages
          closeModuleImage={closeModalImage}
          handleClickImg={handleClickImg}
        />
      )}
      <main className='todo-wrapper'>
        <HeroTodo />
        <TitleTodo handleShowEmojiPiker={handleShowEmojiPiker} />
        <BodyTodo />
      </main>
    </>
  );
};

export default HomeTodo;
