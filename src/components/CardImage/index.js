import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardImage = styled.div`
    background: url(${props => props.imageUrl })no-repeat center/cover;
    width: 100%;
    height: 0;
    padding-top: 75%;
`;

CardImage.propTypes = {
    imageUrl: PropTypes.string.isRequired,
};

export default CardImage;