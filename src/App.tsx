import { useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import './App.css';
import Contacts from './components/Contacts';
import ContactHeader from './components/ContactHeader';
import MessageInput from './components/MessageInput';
import Message from './components/Message';

function App() {

  const navigate = useNavigate()

  /* useEffect(() =>{
    const userId = localStorage.getItem("userId")
    if (userId === null || userId == "") {
      navigate("/login")
    }
  }, []) */

  return (
    <div className=' flex overflow-hidden'>
      <Contacts/>
      <div className=' grow h-screen flex flex-col'>
        <ContactHeader/>
        <div className=' grow overflow-y-scroll p-4'>
          <Message/>
          <Message sender={false} />
          <Message/>
          <Message/>
        </div>
        <MessageInput/> 
      </div>
    </div>
  );
}

export default App;
