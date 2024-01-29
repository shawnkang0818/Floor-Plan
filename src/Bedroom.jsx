const Bedroom = (props) => {
  return (
    <>
      <div className='bedroom' id={`bed-${props.bedNum}`}>Bedroom {props.numBed} </div>
    </>
  )
}
export default Bedroom;