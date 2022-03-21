import React from 'react';
import { MessageProps } from '../../models/apiModels';
import './message.scss';

const Message: React.FC<MessageProps> = ({message}) => {
    return (
        <section className='message-wrapper'>{message}</section>
    )
}

export default Message;