import React from 'react'

const ResponsiveWrapper = ({boxWrapperClass, boxClassName, boxTxt, parentSize}) => {
	
	const boxRef = React.useRef(null);

	const [dims, setDims] = React.useState({w: null, h: null })
	
	React.useEffect(()=> {
		setDims({w: boxRef.current.clientWidth, h: boxRef.current.clientHeight})
	}, [parentSize])
	
	return(<div className={boxWrapperClass}>
	  <div 
	  	className={`box ${boxClassName}`}
	  	ref={boxRef}
	  	>
	  		<p>{boxTxt}</p>
	  		<p>w: {dims.w}</p>
	  		<p>h: {dims.h}</p>
	  		</div>
	</div>)
} 

export default ResponsiveWrapper;