// import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.h2`
    font-weight: 700;
    color: ${props => props.theme.info};
    margin-top: 0;
    font-family: ${props => props.theme.fontfamily.heading };
`;

// Title.propTypes = {
//     title: PropTypes.string.isRequired,
// };

export default Title;