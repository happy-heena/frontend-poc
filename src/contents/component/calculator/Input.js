import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const { value, setValue } = props;

  return <input value={value} onChange={setValue} />;
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default Input;
