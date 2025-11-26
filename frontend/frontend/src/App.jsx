import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('http://localhost:5000/api')
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(err => setMessage('Error: ' + err.message));
  }, []);

  return (
    <div className="App">
      <h1>React + Express + Postgres App</h1>
      <p>{message}</p>
    </div>
  )
}

export default App
