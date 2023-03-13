import React, {FC} from "react";
import "./systemMessage.scss";
import {ISystemMessage} from "./interface";

export const SystemMessage: FC<ISystemMessage> = (props) => {
    const {text} = props;
    return (
        <div className="system-message">{text}</div>
    )
}