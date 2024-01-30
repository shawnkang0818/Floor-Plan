import Oven from "./Oven";
import Sink from "./Sink";

const Kitchen = (props) => {
  return (
    <>
      <div className="room kitchen">
        <div className='oven-skin'><Oven /><Sink /></div>
        <div className="kitchen-text" >Kitchen</div> 

      </div>
    </>
  )
}
export default Kitchen;