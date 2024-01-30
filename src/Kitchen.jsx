import Oven from "./Oven";
import Sink from "./Sink";

const Kitchen = (props) => {
  return (
    <>
      <div className="room kitchen">
        Kitchen 
        <Oven />
        <Sink />

      </div>
    </>
  )
}
export default Kitchen;