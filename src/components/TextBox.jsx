import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react';
import './TextBox.css';

const TextBox = () => {
  const [isDone, setIsDone] = useState(false);

  const checkIsDone = (e) => {
    const checked = e.target.checked;
    return checked ? setIsDone(true) : setIsDone(false);
  };

  console.log(isDone);

  return (
    <div className='text-box-content'>
      <div className='add-delete-btn show-btn'>
        <Icon name='plus' />
      </div>
      <div className='add-delete-btn show-btn'>
        <Icon id='delete-icon' name='delete' />
      </div>
      <div className='text-box'>
        <input type='checkbox' onChange={checkIsDone} />
        <div
          className='input'
          contentEditable={true}
          placeholder='Escriba aqui su texto'
        ></div>
      </div>
    </div>
  );
};

export default TextBox;
