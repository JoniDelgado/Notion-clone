import { createContext, useState } from 'react';

const ModalEmojiContext = createContext();

const emojiInitialValue = '';

const ModalEmojiProvider = ({ children }) => {
  const [showEmojiPiker, setShowEmojiPiker] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState(emojiInitialValue);

  const handleShowEmojiPiker = () => setShowEmojiPiker(true);

  const onEmojiClick = (e, emojiObject) => {
    setChosenEmoji(emojiObject);
    setShowEmojiPiker(false);
  };

  const data = {
    showEmojiPiker,
    setShowEmojiPiker,
    handleShowEmojiPiker,
    chosenEmoji,
    onEmojiClick,
  };

  return (
    <ModalEmojiContext.Provider value={data}>
      {children}
    </ModalEmojiContext.Provider>
  );
};

export default ModalEmojiContext;
export { ModalEmojiProvider };
