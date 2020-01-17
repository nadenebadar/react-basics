import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CardImage from '../CardImage';
import Title from '../Title';
import RichText from '../RichText';
import Link from '../Link';

const StyledCard = styled.div`
    background: ${props => props.theme.colors.light };
    display: inline-block;
    position: relative;
    width: 40%;
    margin-bottom: 30px;
    border-radius: 6px;
    padding: 0 20px 20px;
    color: ${props => props.theme.colors.info };
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
`;

const ContentWrapper = styled.div`
    padding: 20px 0;
    font-family: ${props => props.theme.fontfamily.body };
    font-weight: 300;
`;

function Card(props){
    const {
        imageUrl,
        title,
        copy,
        link,
        linkLabel,
    } = props;

    return(
        <>
        <StyledCard>
            <CardImage imageUrl = {imageUrl}></CardImage>
            <ContentWrapper>
                <Title>{title}</Title>
                <RichText content={copy} />
                <Link as='a' href={link} mt={2}>{linkLabel}</Link>
            </ContentWrapper>
        </StyledCard>            
        </>
    );
}

Card.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    copy: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    linkLabel: PropTypes.string.isRequired,
};

export default Card;