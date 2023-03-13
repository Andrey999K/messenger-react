import React, {FC} from 'react';
import {IMessageWrapper} from "./interface";
import {SystemMessage} from "../SystemMessage";
import dayjs from "dayjs";
import {NewMessage} from "../NewMessage";
import {Message} from "../Message";

export const MessageWrapper: FC<IMessageWrapper> = ({message, newDay, firstMessage}) => {
    return (
        <>
            {newDay ? <SystemMessage text={dayjs(message.created_at * 1000).format('D.MM.YYYY')}/> : ''}
            {message.is_new ? <NewMessage/> : ''}
            {<Message firstMessage={firstMessage} data={message}/>}
        </>
    )
}