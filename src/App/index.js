import React from "react";
import ReactDOM from "react-dom";
import Title from '../components/Title'
import Button from './../components/ButtonOne'
// import Button from './../components/Button'
// import Button from './../components/CompoundButton'

const App = () => {
	return (<section id="button-props-wrapper">
			<Title text="Buttons" />
			<Button 
				// tp="warning" 
				// size="large" 
				text="btnOne"
			/>
		</section>
		)
};

export default App;


/*

	Prop-Driven 

	<Button 
		text="Plain"
		large
		small
	/>

	<Button 
		text="water" 
		warning
	/>

*/ 

/*
	Compound

	<Button.Small.Warning text="smWrn"/>		
	<Button.Danger.Large text="myLg"/>
*/