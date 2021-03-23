import React from 'react';
import './index.css';
import { IButton } from './types';

Button.defaultProps = {
  color: 'numbers',
  type: 'calculator',
  disabled: false,
};

function Button({
  title, color, onClick, type, disabled,
} : IButton) {
  return (
    <div className="button-container">
      <button
        onClick={onClick}
        className={`
        button 
        ${type === 'calculator' ? 'calc-button' : 'default'}
        ${color === 'functions' && 'button-functions'}
        ${color === 'numbers' && 'button-number'}
        ${color === 'operations' && 'button-operations'}
        `}
        type="button"
        disabled={disabled}
      >
        {title}
      </button>
    </div>
  );
}

export default Button;
