import React from 'react';
import './index.css'

import { CSSTransition } from 'react-transition-group';

const BarChart = ({data, xScale, yScale, dims}) => {
	
	return(
		<svg 
			id="bar-chart-wrapper" 
			width={dims.w} 
			height={dims.h}>
			

			{/* If data, show bars */}
			{data && 
			  data.map((d, ind) => {

				let thisKey = Object.keys(d)[0]
						
				return(
				  <CSSTransition
				  	key={`${thisKey}${ind}`} 
					timeout={0}
					in={data && data.length > 0}
					classNames="single-rects"
					appear>
					  <rect
					  	className="single-rects"
						x={xScale(thisKey)} 
						y={yScale(d[thisKey])}
						height={dims.h - yScale(d[thisKey])}
						fill={'steelblue'}
						width={xScale.bandwidth()} />
					</CSSTransition>	
				)
			  })}

			  {/* If No Data, show placeholder text*/}
			  {!data && <text x="50" y="50">loading data...</text>}
			}
		</svg>
	)
}

export default BarChart;