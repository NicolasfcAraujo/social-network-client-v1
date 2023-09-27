import { useEffect, useRef, useState } from "react"
import { IMessage } from "../../utils/types"
import { useAppSelector } from "../../utils/redux/store"
import socket from "../../utils/socket"
import axios from "axios"

const MessageInput = () => {

  const [ message, setMessage ] = useState<IMessage>()
  const inputRef = useRef<HTMLInputElement>(null)

  const { id, currentContact } = useAppSelector((state) => state.user)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    socket.emit("message", [message, `room-${id}-${currentContact.id}`, `room-${currentContact.id}-${id}`])
    axios.post(`${process.env.REACT_APP_API_URL}/user/sendMessage`, {
      message: message?.message,
      sender: id,
      receiver: currentContact.id
    }).then(() => {
      if (inputRef.current) { 
        inputRef.current.value = "";
      }
    }).catch(() => {
      console.log("Error sending message")
    })
  }

  return (
    <div className=" p-4 border-t">
      <form onSubmit={handleSubmit} className=" flex w-full">
        <div className=" grow">
          <input ref={inputRef} min={1} onChange={(e) => setMessage({message:e.target.value, sender: id as number, receiver: 0})} type="text" className=" bg-gray-200 rounded-l px-4 py-2 w-full outline-none focus:outline-yellow-500 focus:outline-offset-0" placeholder="Send a message..."/>
        </div>
        <button type="submit" className=" w-28 bg-yellow-500 rounded-r">
          <i className="fa-solid fa-paper-plane"></i>
        </button>
      </form>
    </div>
    
  )
}

export default MessageInput