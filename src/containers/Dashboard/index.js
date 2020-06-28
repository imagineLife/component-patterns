import React from "react"
import { scaleOrdinal, scaleLinear, scaleBand } from 'd3-scale';
import { Redirect } from 'react-router-dom'
import BarChart from '../../components/BarChart'
import useWindowSize from '../../Hooks/UseWindowSize';

import UserContext from '../../Context/UserContext'

const Dashboard = ({data}) => {

	const {loggedIn} = React.useContext(UserContext);
	
	const windowSize = useWindowSize()

	let [usableDims, setUsableDims] = React.useState({w: windowSize.width * .75, h: windowSize.height * .5})

	React.useEffect(() => {
		setUsableDims({w: windowSize.width * .75, h: windowSize.height * .5})
	}, [windowSize])

	if(loggedIn !== true){
		console.log('Dashbaord Loaded, but redirecting');
		return( <Redirect to="/login" /> )
	}
	
	let xScale;
	if(data){
		xScale = scaleBand().domain(data.map(d => Object.keys(d)[0])).range([0, usableDims.w])
		.paddingInner(.2)
		.paddingOuter(.1)
	}

	let yScale = scaleLinear().domain([0, 20]).range([0, usableDims.h])

	return(
		<React.Fragment>
			<p>Dashboard here</p>
			
			<BarChart
				data={data}
				xScale={xScale}
				yScale={yScale}
				dims={usableDims}/>

			<p>Another non-chart element rendered here... </p>

			<p>Yet another non-chart component &/or element rendered here... </p>
		</React.Fragment>

	)
}

export default Dashboard