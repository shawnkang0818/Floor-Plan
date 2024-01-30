import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import Bath from "./Bath";
import LivingRoom from "./LivingRoom";
import './App.css'

function App () {
  return ( 
    <div className='FloorPlan'>
      <span className='upper'>
        <span className='upper-Left'>
          <Bedroom bedroomNum = {1} />      
          <Bath size="Full"/>
        </span>
        <LivingRoom />
        <Kitchen kitchenStuffs = {["Oven", "Sink"]}/>
      </span>
      <span className='bottom'>
        <Bedroom bedroomNum = {2} />
        <Bath size="Half"/>
        <Bedroom bedroomNum = {3} />
      </span>
    </div>
  )
}

export default App ;