export interface IMessage {
  message: string,
  sender: number,
  receiver: number
}

export interface IMessageWithId extends IMessage {
  id: number
}

export type userType = {
  name: string,
  email: string,
  id: number
}