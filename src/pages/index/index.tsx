import React, {FC, useEffect, useState} from "react";
import {IPage} from "../../interface/page";
import {Input} from "../../components/Input";
import {ChatItemList} from "../../components/ChatItemList";
import {Header} from "../../components/Header";
import sprite from "../../img/sprite.svg";
import {IMessage} from "../../components/ChatItemList/interface";
import axios from "axios";
import dayjs from "dayjs";
import {MessageWrapper} from "../../components/messageWrapper";
import {IMessageWrapper} from "../../components/messageWrapper/interface";

export const PageIndex: FC<IPage> = (props: IPage) => {
    const { title } = props;
    const [chats, setChats] = useState([]);
    const [messageText, setMessageText] = useState("");
    const [messages, setMessages] = useState<IMessageWrapper[]>([]);

    const changeStructureMessages = (data: IMessage[]) => {
        let massMessages = sortMessages(data);
        let dataMessages = [];
        for (let i = 0; i < massMessages.length; i++) {

            if (i > 0) {
                dataMessages.push(
                    {
                        message: massMessages[i],
                        newDay: dayjs(massMessages[i].created_at * 1000).format('D.MM.YYYY') !==
                            dayjs(massMessages[i - 1].created_at * 1000).format('D.MM.YYYY'),
                        firstMessage: massMessages[i].user.id !== massMessages[i - 1].user.id
                    }
                );
            } else {
                dataMessages.push(
                    {
                        message: massMessages[i],
                        newDay: true,
                        firstMessage: true
                    }
                );
            }
        }
        setMessages(dataMessages);
    }

    const sortMessages = (messagesMass: IMessage[]) => {
        return messagesMass.sort((a:IMessage, b:IMessage) => a.created_at - b.created_at);
    }

    const getMessages = (chatId: string) => {
        axios
            .get(`https://api.lenzaos.com/test/message.get?chat_id=${chatId}&offset=0&limit=20`)
            .then(data => {
                changeStructureMessages(data.data.response);
            })
            .catch(error => {
                axios
                    .get(`data/messages/${chatId}.json`)
                    .then(data => {
                        changeStructureMessages(data.data.response);
                    });
            });
    }

    useEffect(() => {
        let statusCode;
        axios
            .get("https://api.lenzaos.com/test/chat.get?offset=1&limit=20")
            .then(data => {
                statusCode = data.status;
                if (data.status === 200) {
                    setChats(data.data.response);
                }
            });
        if (statusCode !== 200) {
            axios
                .get("data/chat.json")
                .then(data => {
                    setChats(data.data.response);
                });
        }
    }, [])

    const [inputValue, setInputValue] = useState("");

    return (
        <div className="page">
            <ChatItemList chats={chats} showMessages={getMessages}/>
            <div className="wrapper">
                <Header icon={sprite + "#icon-header"} text="Great Project"/>
                <div className="dialog">
                    {messages.map((message) =>
                        <MessageWrapper
                            message={message.message}
                            newDay={message.newDay}
                            firstMessage={message.firstMessage}
                        />
                    )}
                </div>
                <Input
                    value={messageText}
                    iconAttach={sprite + "#attach"}
                    iconSend={sprite + "#send"}
                    onChange={event => setMessageText(event.target.value)}
                />
            </div>
        </div>
    )
}