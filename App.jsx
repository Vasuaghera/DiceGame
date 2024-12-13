import { useState } from 'react'
import './App.css'
import Home from './Home'
import Play from './Play';

function App() {

  const [isPlay , setIsPlay] = useState(false) ;
  const toggleGamePlay = (prev) => {
    setIsPlay((prev) => !prev) ;
  };

  return (
    <>
      {
        isPlay ? <Play/> : <Home toggle={toggleGamePlay}/>
      }
    </>
  )
}

export default App
