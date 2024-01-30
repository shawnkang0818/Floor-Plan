const Bath = (props) => {
  return ( 

    <>
      <div className={`room bath ${props.size}-bath`} id={`${props.size}-bath`} >
        {props.size} Bath
      </div>
    </>
  );
}

export default Bath;