import React, { useCallback } from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';

import './NumberButton.css';
import * as actions from '../Store/actions/actions';

export const NumberButton = ({ value }) => {
  const equal = useSelector((state) => state.equal, shallowEqual);
  const number = useSelector((state) => state.number, shallowEqual);
  const dispatch = useDispatch();

  const onNumber = useCallback(
      (value) => {
        if (equal) {
          dispatch(actions.clearResult());
        }
        if ((!number.includes('.') || value !== '.') && number.length < 8) {
          dispatch(actions.setNumber(`${(number + value)}`));
        }
      }, [dispatch, equal, number],
  );

  return (
    <button type='button' onClick={ () => onNumber(value) }>
      { value }
    </button>
  );
};
