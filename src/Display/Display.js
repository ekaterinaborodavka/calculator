import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import './Display.css';

export const Display = () => {
  const result = useSelector((state) => state.result, shallowEqual);
  const number = useSelector((state) => state.number, shallowEqual);
  const type = useSelector((state) => state.type, shallowEqual);
  const equal = useSelector((state) => state.equal, shallowEqual);
  let text = `${type === '' ? '' : result} ${type} ${number}`;

  if (equal) {
    text = result;
  } else if (result === '' && number === '') {
    text = 0;
  }
  return (
    <div className='wrapper_display'>
      <h2 className='display'>{ text }</h2>
      <p className='sub_display'>{ result === '' || !equal ? 0 : result }</p>
    </div>
  );
};
