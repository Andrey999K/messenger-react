import React, {FC} from "react";
import {IHeader} from "./interface";
import "./header.scss";

export const Header: FC<IHeader> = (props) => {
    const {icon, text} = props;

    return (
        <header className="header">
            <div className="header__icon">
                <svg>
                    <use xlinkHref={icon}/>
                </svg>
            </div>
            <div className="header__text">
                <span>{text}</span>
            </div>
        </header>
    )
}