
import { useState } from 'react';
import './App.css'

/*export default function App() {
  return (
    <main>
      React ⚛️ + Vite ⚡ + Replit
    </main> 
  )
}*/
function App(){
  const [count, setCount] = useState(0);
  return (<div>
  <button onClick={() => setCount(count + 1)}>
    count is {count}
  </button>
  </div>
          )
}
export default App