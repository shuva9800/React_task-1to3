import { useState } from 'react'
import './App.css'
import Simplejsxfile from './components/Simplejsxfile'
import RecordsOfarray from './components/RecordsOfarray'
import ShowHide from './components/ShowHide'
import CounterApp from './components/CounterApp'
import EnableDisableButton from './components/EnableDisableButton'
import TwoWayBinding from './components/TowwayaData'
import ParentComponent from './components/ParentComponent'
import SumComponent from './components/SumComponent'


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
    <SumComponent/>
   </div>
  )
}

export default App
