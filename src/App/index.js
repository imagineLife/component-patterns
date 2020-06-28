import React from "react";
import ReactDOM from "react-dom";
import Title from '../components/Title'
import Button from './../components/Button'

const AppRouter = () => {
	return (<section id="button-props-wrapper">
			<Title text="Button with props" />
		
			<Button 
				text="Plain"
				large
				small
			/>
			
			<Button 
				text="water" 
				warning
			/>
		</section>
		)
};

export default AppRouter;