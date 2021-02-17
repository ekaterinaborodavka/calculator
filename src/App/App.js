import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { BackButton } from '../BackButton/BackButton';
import { Display } from '../Display/Display';
import { EqualButton } from '../EqualButton/EqualButton';
import { MathOperButton } from '../MathOperButton/MathOperButton';
import { NumberButton } from '../NumberButton/NumberButton';

import './App.css';
import * as actions from '../Store/actions/actions';
import { PercentButton } from '../PercentButton/PercentButton';

export default function App() {
  const dispatch = useDispatch();

  const onClearValue = useCallback(
      () => {
        dispatch(actions.clearValue());
      }, [dispatch],
  );

  return (
    <div className='wrapper'>
      <Display />
      <div className='wrapper_buttons_row'>
        <button className='ac' onClick={ () => onClearValue() } > AC </button>
        <BackButton />
        <PercentButton />
        <MathOperButton oper='/' />
      </div>
      <div className='wrapper_buttons_row'>
        <NumberButton value={ 7 } />
        <NumberButton value={ 8 } />
        <NumberButton value={ 9 } />
        <MathOperButton oper='*' />
      </div>
      <div className='wrapper_buttons_row'>
        <NumberButton value={ 4 } />
        <NumberButton value={ 5 } />
        <NumberButton value={ 6 } />
        <MathOperButton oper='-' />
      </div>
      <div className='wrapper_buttons_row'>
        <NumberButton value={ 1 } />
        <NumberButton value={ 2 } />
        <NumberButton value={ 3 } />
        <MathOperButton oper='+' />
      </div>
      <div className='wrapper_buttons_row'>
        <div className='wrapper_buttons_last_row'>
          <NumberButton value='.' />
          <NumberButton value={ 0 } />
        </div>
        <div className='wrapper_buttons_last_row'>
          <EqualButton />
        </div>
      </div>
    </div>
  );
}
