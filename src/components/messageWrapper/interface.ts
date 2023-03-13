import {IMessage} from "../ChatItemList/interface";

export interface IMessageWrapper {
    message: IMessage,
    newDay: boolean
    firstMessage: boolean
}