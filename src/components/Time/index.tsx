import React, {FC, useEffect, useState} from "react";
import {ITime} from "./interface";
import "./time.scss";
import dayjs from "dayjs";

export const Time: FC<ITime> = ({time}) => {
    return (
        <div className="time">{dayjs(time * 1000).format('HH:mm')}</div>
    )
}