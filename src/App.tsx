import { useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import './App.css';

function App() {

  const navigate = useNavigate()

  useEffect(() =>{
    const userId = localStorage.getItem("userId")
    if (userId === null || userId == "") {
      navigate("/login")
    }
  }, [])

  return (
    <div>
      
    </div>
  );
}

export default App;
