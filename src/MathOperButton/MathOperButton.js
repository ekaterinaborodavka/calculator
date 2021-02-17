import React, { useCallback } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

import './MathOperButton.css';
import * as actions from '../Store/actions/actions';

export const MathOperButton = ({ oper }) => {
  const number = useSelector((state) => state.number, shallowEqual);
  const dispatch = useDispatch();

  const onFuncCalc = useCallback(
      (oper) => {
        switch (oper) {
          case '+':
            dispatch(actions.plusFunc(number));
            break;
          case '-':
            dispatch(actions.minusFunc(number));
            break;
          case '/':
            dispatch(actions.divFunc(number));
            break;
          case '*':
            dispatch(actions.multiplFunc(number));
            break;
          default:
            break;
        }
      }, [dispatch, number],
  );

  return (
    <button type='button' onClick={ () => onFuncCalc(oper) }>
      { oper }
    </button>
  );
};
