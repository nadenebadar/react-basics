import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledRichText = styled.div`
    font-weight: 300;
    color: ${props => props.theme.primary};
    font-family: ${props => props.theme.fontfamily.body };
`;

function RichText({ content }) {
  return (
      <StyledRichText>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </StyledRichText>  
  );
}

RichText.propTypes = {
  content: PropTypes.string.isRequired,
};

export default RichText;