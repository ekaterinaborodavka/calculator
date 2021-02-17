import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import './EqualButton.css';
import * as actions from '../Store/actions/actions';

export const EqualButton = () => {
  const dispatch = useDispatch();

  const onEqual = useCallback(
      () => {
        dispatch(actions.showResult());
      }, [dispatch],
  );

  return (
    <button className='plus_button' type='button' onClick={ () => onEqual() }>
            =
    </button>
  );
};
