import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    // Use relative path - Vite proxy will forward to backend
    fetch('/api')
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(err => setMessage('Error: ' + err.message));
  }, []);

  return (
    <div className="App">
      <h1>🐳 React + Express + Postgres App</h1>
      <h2>Dockerized Full Stack!</h2>
      <p style={{ 
        padding: '20px', 
        background: '#f0f0f0', 
        borderRadius: '8px',
        fontSize: '18px'
      }}>
        {message}
      </p>
    </div>
  )
}

export default App
