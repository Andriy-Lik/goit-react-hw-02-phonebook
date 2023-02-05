import PropTypes from 'prop-types';
import { Container, Title } from './Section.styled';

function Section({ title, children }) {
    return (
        <Container>
            <Title>{title}</Title>
            {children}
        </Container>
    );
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};

export default Section;