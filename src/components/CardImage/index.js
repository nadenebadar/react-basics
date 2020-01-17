import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardImage = styled.div`
    background: url(${props => props.imageUrl })no-repeat center/cover;
    width: 100%;
    height: 0;
    padding-top: 75%;
    overflow: hidden;
    border-radius: 6px;
    margin-top: -30px;
    box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
`;

CardImage.propTypes = {
    imageUrl: PropTypes.string.isRequired,
};

export default CardImage;