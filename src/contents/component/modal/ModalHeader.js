import React from 'react';
import PropTypes from 'prop-types';

function ModalHeader(props) {
  const { name, id } = props;
  return <div>{name}</div>;
}

ModalHeader.defaultProps = {
  name: '모달명',
};

ModalHeader.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string.isRequired,
};

export default ModalHeader;
