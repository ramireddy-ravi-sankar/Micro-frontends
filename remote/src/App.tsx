import { useState } from 'react'
import './App.css'
import Button from './Button'
import ContactForm from './Components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Remote Application</h1>
      <ContactForm/>
      <Button/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      
    </>
  )
}

export default App
