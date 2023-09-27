import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import './App.css';
import Contacts from './components/Contacts';
import ContactHeader from './components/ContactHeader';
import MessageInput from './components/MessageInput';
import { useAppDispatch, useAppSelector } from './utils/redux/store';
import { changeCurrentContact } from './utils/redux/features/userSlice';
import { IMessageWithId } from './utils/types';
import socket from './utils/socket';
import Message from './components/Message';
import axios from 'axios';

function App() {

  const [ isLoading, setIsLoading ] = useState<boolean>()
  const [ messages, setMessages ] = useState<IMessageWithId[]>([])

  const { currentContact, isLogged , id} = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() =>{
    if (!isLogged) {
      navigate("/login")
    }
    dispatch(changeCurrentContact({ name: "", email: "", id: "" }))
    socket.connect()
  }, [])
  useEffect(() => {
    socket.on("messageResponse", (data) => {
      setMessages([ ...messages, data ])
    })
  }, [messages])
  useEffect(() => {
    setIsLoading(true)
    setMessages([])
    const getMessages = async () => {
      const userMessages = await axios.get(`http://localhost:4000/api/v1/user/getMessages/${id}/${currentContact.id}`)
      const contactMessages = await axios.get(`http://localhost:4000/api/v1/user/getMessages/${currentContact.id}/${id}`)

      const mergedMessages: IMessageWithId[] = [ ...userMessages.data.getMessages[0], ...contactMessages.data.getMessages[0] ]
      const sortedMessages: IMessageWithId[] = mergedMessages.sort((a, b) => a.id - b.id)

      return sortedMessages
    }

    if (currentContact.name != "") {
      getMessages().then(res => {
        setMessages([ ...res ])
        setIsLoading(false)
      })
    }
  }, [ currentContact ])
  

  if (!isLogged) {
    return (
      <div className=' w-screen h-screen center-div'>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <div className=' flex overflow-hidden'>
      <Contacts/>
      {currentContact.id === "" ?
        <div className=' grow center-div'>
          <h1>Welcome! Chat with or add friend! 😁</h1>
        </div>
      :
        <div className=' grow h-screen flex flex-col'>
          <ContactHeader/>
          <div className=' grow overflow-y-scroll p-4'>
            {isLoading &&
              <div className=' flex justify-center items-center w-full h-full'>
                <div className=' p-1 rounded bg-gray-300'>
                  <img className=' w-9 h-9' src="loading.gif" alt="loading" />
                </div>
              </div>
            }
            {messages.map((message) => {
              return (
                <Message text={message.message} sender={message.sender == id}/>
              )
            })}
          </div>
          <MessageInput/> 
        </div>
      }
      
    </div>
  );
}

export default App;
