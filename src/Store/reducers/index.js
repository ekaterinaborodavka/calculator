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

const initialState = {
  number: '',
  type: '',
  result: '',
  equal: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PLUS: {
      return {
        ...state,
        type: '+',
        result: action.num,
        number: '',
        equal: false,
      };
    }
    case MINUS: {
      return {
        ...state,
        type: '-',
        result: action.num,
        number: '',
        equal: false,
      };
    }
    case MULTIPLICATION: {
      return {
        ...state,
        type: '*',
        result: action.num,
        number: '',
        equal: false,
      };
    }
    case DIVISION: {
      return {
        ...state,
        type: '/',
        result: action.num,
        number: '',
        equal: false,
      };
    }
    case PERCENT: {
      return {
        ...state,
        result: String(action.res),
        number: String(action.res),
        equal: true,
      };
    }
    case SET_NUMBER: {
      return {
        ...state,
        number: action.val,
        equal: false,
      };
    }
    case SHOW_RESULT: {
      let newRes;
      switch (state.type) {
        case '+':
          newRes = Number(state.result) + Number(state.number);
          break;
        case '-':
          newRes = Number(state.result) - Number(state.number);
          break;
        case '/':
          newRes = Number(state.result) / Number(state.number);
          break;
        case '*':
          newRes = Number(state.result) * Number(state.number);
          break;
        default:
          newRes = '';
          break;
      }
      return {
        ...state,
        number: String(newRes),
        result: String(newRes),
        type: '',
        equal: true,
      };
    }
    case CLEAR_VALUE: {
      return {
        ...state,
        number: '',
        result: '',
        type: '',
        equal: false,
      };
    }
    case CLEAR_RESULT: {
      return {
        ...state,
        result: '',
        type: '',
        equal: false,
      };
    }
    case BACK: {
      return {
        ...state,
        number: action.num,
        result: '',
        type: '',
        equal: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
