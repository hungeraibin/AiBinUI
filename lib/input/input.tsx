import React, { InputHTMLAttributes } from 'react';
import classes from '../helpers/classes';
import './input.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FunctionComponent<Props> = (props) => {
  const { className, ...reset } = props;
  return (
    <input className={classes('ab-input', className)} 
           {...reset} />
  );
};

export default Input;