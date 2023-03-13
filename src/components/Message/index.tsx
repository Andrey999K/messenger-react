import React, {FC} from "react";
import "./message.scss";
import {IMessageElement} from "./interface";
import {Time} from "../Time";

export const Message: FC<IMessageElement> = (props) => {
    const {firstMessage, data} = props;
    return (
        <div className={"message" + (data.user.you ? " you" : "") + (!firstMessage ? " no-first" : "")}>
            <div className="message__content">
                {(!data.user.you) ?
                    <div className={"message__avatar" + (!firstMessage ? " hidden" : "")}>
                        <img src={data.user.avatar} alt=""/>
                    </div>
                    : ''
                }
                <div className="message__wrapper">
                    {(!data.user.you) ?
                        <div className={"message__user-name" + (!firstMessage ? " hidden" : "")}>{data.user.name + " " + data.user.surname}</div>
                        : ''
                    }
                    <div className="message__block">
                        <div className="message__text">{data.message}</div>
                        <div className="message__time">
                            <Time time={data.created_at}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}