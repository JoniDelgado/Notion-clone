import React from 'react';
import { Outlet } from 'react-router-dom';
import { ModalEmojiProvider } from '../context/ModalEmojiContext';
import { ModalImgProvider } from '../context/ModalImgContext';

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <h5>Nav Bar</h5>
        </nav>
      </header>
      <ModalEmojiProvider>
        <ModalImgProvider>
          <Outlet />
        </ModalImgProvider>
      </ModalEmojiProvider>
    </>
  );
};

export default Layout;
