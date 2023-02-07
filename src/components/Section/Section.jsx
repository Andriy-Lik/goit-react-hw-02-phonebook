import PropTypes from 'prop-types';
import { Container } from './Section.styled';

function Section({ children }) {
    return (
        <Container>
            {children}
        </Container>
    );
}

Section.propTypes = {
    children: PropTypes.node,
};

export default Section;