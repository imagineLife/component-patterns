import React from 'react';
import './Button.scss';

const Button = ({text, onClick, large, small, secondary, danger, warning}) => {
	let className = 'button'
	let txt = 'Click'
	
	/*
		SIZES
	*/

	if(large && small){
		console.warn(`COMPONENT ERROR: don't use multiple sizes in the button`)
	}

	//medium 
	if(!large && !small){
		className = className + ' medium'
	} 

	if(small){
		className = className + ' small'
	}	


	if(large){
		className = className + ' large'
	}	


	/*COLORS*/
	//primary
	if(!danger && !warning){
		className = className + ' primary'
	}	

	if(danger && warning){
		console.warn(`COMPONENT ERROR: don't use multiple 'types' in the button`)
	}

	if(warning){
		className = className + ' warning'
	}	

	if(danger){
		className = className + ' danger'
	}	

	//text
	if(text){
		txt = text
	}

	return (<button className={className} onClick={onClick}>{txt}</button>)
};

export default Button;
