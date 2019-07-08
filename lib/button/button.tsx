import React, { ButtonHTMLAttributes } from 'react';
import classes from '../helpers/classes';
import './button.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  level?: 'important' | 'danger' | 'normal'
}

const Button: React.FunctionComponent<Props> = (props) => {
  const { className, children, level, ...rest } = props;
  return (
    <button 
      className={ classes('ab-button', `ab-button-${level}`, className) }
      { ...rest }
    >
      { children }
    </button>
  )
}

Button.defaultProps = {
  level: 'normal'
};

export default Button;