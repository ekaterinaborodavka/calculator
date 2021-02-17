import {
  PLUS,
  MINUS,
  MULTIPLICATION,
  DIVISION,
  PERCENT,
  SET_NUMBER,
  SHOW_RESULT,
  CLEAR_VALUE,
  CLEAR_RESULT,
  BACK,
} from '../types/types';

export const plusFunc = (num) => {
  return {
    type: PLUS,
    num,
  };
};

export const minusFunc = (num) => {
  return {
    type: MINUS,
    num,
  };
};

export const multiplFunc = (num) => {
  return {
    type: MULTIPLICATION,
    num,
  };
};

export const divFunc = (num) => {
  return {
    type: DIVISION,
    num,
  };
};

export const percentFunc = (res) => {
  return {
    type: PERCENT,
    res,
  };
};

export const setNumber = (val) => {
  return {
    type: SET_NUMBER,
    val,
  };
};

export const showResult = () => {
  return {
    type: SHOW_RESULT,
  };
};

export const clearValue = () => {
  return {
    type: CLEAR_VALUE,
  };
};

export const clearResult = () => {
  return {
    type: CLEAR_RESULT,
  };
};

export const backNumber = (num) => {
  return {
    type: BACK,
    num,
  };
};
