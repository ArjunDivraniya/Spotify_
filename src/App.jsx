import { useState } from 'react'


import Sidebar from './Components/Sidebar.jsx'
import MainScreen from './Components/MainScreen.jsx'
import Playbar from './Components/Playbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <MainScreen/>
     
    </>
  )
}

export default App
