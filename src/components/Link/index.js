import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, space } from 'styled-system';

const Link = styled.button`  
  ${color}
  ${space}

    border: none;
    border-radius: 3px;
    position: relative;
    padding: 12px 30px;
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0;
    will-change: box-shadow, transform;
    transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    display:inline-block;
    text-decoration: none;
    font-family: inherit;
`;

Link.defaultProps = {
  bg: 'info',
  color: 'white',
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Link;
