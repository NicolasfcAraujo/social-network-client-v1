import { useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import './App.css';
import Contacts from './components/Contacts';

function App() {

  const navigate = useNavigate()

  /* useEffect(() =>{
    const userId = localStorage.getItem("userId")
    if (userId === null || userId == "") {
      navigate("/login")
    }
  }, []) */

  return (
    <div>
      <Contacts/>
    </div>
  );
}

export default App;
