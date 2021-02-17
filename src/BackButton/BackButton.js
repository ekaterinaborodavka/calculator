import React from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';

import './BackButton.css';
import * as actions from '../Store/actions/actions';

export const BackButton = () => {
  const number = useSelector((state) => state.number, shallowEqual);
  const dispatch = useDispatch();

  const onBack = () => {
    if (number !== '') {
      const backNum = number.slice(0, number.length - 1);
      dispatch(actions.backNumber(backNum));
    }
  };

  return (
    <button type='button' onClick={ () => onBack() }>
      &#10006;
    </button>
  );
};
