import React, {FC, HTMLInputTypeAttribute, useState} from "react";
import {IInput} from "./interface";
import "./input.scss";

export const Input: FC<IInput> = (props: IInput) => {
    const {value, iconAttach, iconSend, ...attr} = props;

    const [hidePlaceholder, setHidePlaceholder] = useState(false);

    const onInputEvent = (input: EventTarget) => {
        if ((input as HTMLDivElement).textContent !== '') setHidePlaceholder(true);
        else setHidePlaceholder(false);
    }

    return (
        <div className="input-message">
            <div className="input-message__wrapper">
                <div className={"input-message__placeholder" + (hidePlaceholder ? ' hide' : '')}>Type message</div>
                <div className="input-message__input" contentEditable="true" onInput={event => onInputEvent(event.target)}>{value}</div>
            </div>
            <div className="input-message__buttons">
                <label className="input-message__button-attach">
                    <svg>
                        <use xlinkHref={iconAttach}/>
                    </svg>
                    <input type="file"/>
                </label>
                <button className="input-message__button-send">
                    <svg>
                        <use xlinkHref={iconSend}/>
                    </svg>
                </button>
            </div>
        </div>

    )
}