import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ResponsiveBlock = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 1024px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 768px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

function Responsive({ children, ...rest }) {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
}

Responsive.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Responsive;
