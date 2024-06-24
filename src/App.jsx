import { useState } from 'react'
import './App.css'
import Simplejsxfile from './components/Simplejsxfile'
import RecordsOfarray from './components/RecordsOfarray'
import ShowHide from './components/ShowHide'
import CounterApp from './components/CounterApp'
import EnableDisableButton from './components/EnableDisableButton'
import TwoWayBinding from './components/TowwayaData'
import ParentComponent from './components/ParentComponent'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
     <Simplejsxfile/>
     <RecordsOfarray/>
     <ShowHide/>
     {/* <CounterApp/> */}
     <EnableDisableButton/>
     <TwoWayBinding/>
    <ParentComponent/>
   </div>
  )
}

export default App
