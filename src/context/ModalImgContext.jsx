import { createContext, useState } from 'react';

const ModalImg = createContext();

const initialImg = undefined;

const ModalImgProvider = ({ children }) => {
  const [heroImage, setHeroImage] = useState(initialImg);
  const [showModalImg, setShowModalImg] = useState(false);

  const closeModuleImage = (e) => {
    console.log(e);
    e.stopPropagation();
    e.cancelbuble = true;
    setShowModalImg(false);
  };

  const clearHeroImg = () => {
    heroImage(initialImg);
  };

  const handleShowModal = () => setShowModalImg(true);

  const handleClickImg = (img) => {
    setHeroImage(img.src.landscape);
    setShowModalImg(false);
  };

  const data = {
    heroImage,
    showModalImg,
    closeModuleImage,
    handleShowModal,
    handleClickImg,
    clearHeroImg,
  };

  return <ModalImg.Provider value={data}>{children}</ModalImg.Provider>;
};

export default ModalImg;
export { ModalImgProvider };
