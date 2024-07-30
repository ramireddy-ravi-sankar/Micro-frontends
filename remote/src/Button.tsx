import { useState } from "react"
import "./Button.css"

const Button = () => {
    const [state,setState]=useState(0);
  return (
    <div>
        <button
            className="shared-btn"
            onClick={()=>setState((s)=>s+1)}    
        >
            Click Me:{state}
        </button>
    </div>
  )
}

export default Button