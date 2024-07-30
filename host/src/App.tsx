import { useState } from 'react'
import './App.css'
import Button from "remoteApp/Button"
import Form from 'remoteApp/Form'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Host Application</h1>
      <Button />
      <Form/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
     
      </div>
    </>
  )
}

export default App
