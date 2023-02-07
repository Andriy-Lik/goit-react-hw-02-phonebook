import PropTypes from 'prop-types';
import { MessageDiv, MessageP } from './Message.styled';

function Message({ text }) {
    return (
        <MessageDiv>
            <MessageP>{text}</MessageP>
        </MessageDiv>
    );
}

Message.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Message;