import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CardImage from '../CardImage';

const StyledCard = styled.div`
    background: ${props => props.theme.colors.light };
    display: inline-block;
    position: relative;
    width: 40%;
    margin-bottom: 30px;
    border-radius: 6px;
    color: ${props => props.theme.colors.info };
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
`;

function Card(props){
    const {
        imageUrl,
    } = props;

    return(
        <>
        <StyledCard>
            <CardImage imageUrl = {imageUrl}></CardImage>
        </StyledCard>            
        </>
    );
}

Card.propTypes = {
    imageUrl: PropTypes.string,
};

export default Card;