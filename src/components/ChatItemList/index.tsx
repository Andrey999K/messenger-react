import React, {FC} from "react";
import {IChatItemList} from "./interface";
import "./chatItemList.scss";
import {Time} from "../Time";

export const ChatItemList: FC<IChatItemList> = (props) => {

    const {chats, showMessages} = props;
    // https://api.lenzaos.com/test/message.get?chat_id=d24c89c8-9bea-4b6f-815e-b5ad2767d9df&offset=0&limit=20
    const selectChat = (event: React.MouseEvent<HTMLElement>, chatId: string) => {
        showMessages(chatId);
    }

    return (
        <div className="chats">
            <div className="chats__header">
                <span>All chats</span>
            </div>
            <div className="chats__list">
                {chats.map(chat =>
                    <div key={chat.id} className="chats__chat chat" onClick={event => selectChat(event, chat.id)}>
                        <div className="chat__avatar">
                            <img src={chat.avatar} alt="" className="chat__avatar-image"/>
                        </div>
                        <div className="chat__info">
                            <div className="chat__info-top">
                                <span className="chat__info-name">{chat.title}</span>
                                <Time time={chat.last_message.created_at} />
                            </div>
                            <div className="chat__info-bottom">
                                <span className="chat__info-last-message">{chat.last_message.message}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}