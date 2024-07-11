import React from 'react';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';

function Buttons(props) {
  const { onClick } = props;
  const buttons = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '+',
    '-',
    '*',
    '=',
  ];

  return (
    <>
      {buttons.map((text) => (
        <button type="button" key={uuid()} onClick={onClick}>
          {text}
        </button>
      ))}
    </>
  );
}

Buttons.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Buttons;
