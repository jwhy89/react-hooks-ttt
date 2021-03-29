import React from 'react';
import CSS from 'csstype';

const styles: CSS.Properties = {
  background: 'lightblue',
  border: '2px solid darkblue',
  fontSize: '30px',
  fontWeight: 'normal',
  cursor: 'pointer',
  outline: 'none',
};

const Square = ({ value, onClick }) => (
  <button type='button' style={styles} onClick={onClick}>
    {value}
  </button>
);

export default Square;