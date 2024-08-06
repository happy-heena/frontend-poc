import React from 'react';
import styled, { css } from 'styled-components';
import palette from '@lib/styles/palette';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const buttonStyle = css`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${palette.gray[8]};
  &:hover {
    background: ${palette.gray[6]};
  }

  ${(props) =>
    props.$fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}

  ${(props) =>
    props.$cyan &&
    css`
      background: ${palette.cyan[5]};
      &:hover {
        background: ${palette.cyan[4]};
      }
    `}
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;

function Button(props) {
  const { to, $cyan } = props;
  return to ? (
    <StyledLink {...props} $cyan={$cyan ? 1 : 0} />
  ) : (
    <StyledButton {...props} />
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  $cyan: PropTypes.bool,
  $fullWidth: PropTypes.bool,
  style: PropTypes.shape({
    marginTop: PropTypes.string,
  }),
  to: PropTypes.string,
};

export default Button;
