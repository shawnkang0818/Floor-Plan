import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import Bath from "./Bath";
import LivingRoom from "./LivingRoom";
import './App.css'

function App () {
  return ( 
    <div className="floor-plan" >
      <Bedroom numBed={1} />  
      <Kitchen/> 
      <Bedroom numBed={2} /> 
      <Bath size={'Full'} />  
      <LivingRoom />
      <Bath size={'Half'} />  
      <Bedroom numBed={3} />
    </div>
  )
}

export default App ;