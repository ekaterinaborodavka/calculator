import React from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';

import './PercentButton.css';
import * as actions from '../Store/actions/actions';

export const PercentButton = () => {
  const number = useSelector((state) => state.number, shallowEqual);
  const result = useSelector((state) => state.result, shallowEqual);
  const type = useSelector((state) => state.type, shallowEqual);
  const dispatch = useDispatch();

  const percentFunc = () => {
    let res;
    if (result === '' || type === '') {
      res = number/100;
    } else {
      const subRes = (result * number)/100;
      switch (type) {
        case '+':
          res = Number(result) + Number(subRes);
          break;
        case '-':
          res = Number(result) - Number(subRes);
          break;
        case '/':
          res = Number(result) / Number(subRes);
          break;
        case '*':
          res = Number(result) * Number(subRes);
          break;
        default:
          res = '';
          break;
      }
    }
    dispatch(actions.percentFunc(res));
  };

  return (
    <button type='button' onClick={ () => percentFunc() }>
      %
    </button>
  );
};
