const Bedroom = (props) => {
  return (
    <>
      <div className={`room bedroom bedroom-${props.bedNum}`} id={`bedroom-${props.bedNum}`}>Bedroom {props.numBed} </div>
    </>
  )
}
export default Bedroom;