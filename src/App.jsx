import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import Bath from "./Bath";
import LivingRoom from "./LivingRoom";
import './App.css'

function App () {
  return ( 
    <>
      <Bedroom numBed={1} />  
      <Kitchen/> 
      <Bedroom numBed={2} /> 
      <Bath size={'Full'} />  
      <LivingRoom />
      <Bath size={'Half'} />  
      <Bedroom numBed={3} />
    </>
  )
}

export default App ;