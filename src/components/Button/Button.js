import React from 'react';
import './Button.scss';

const Button = ({text, onClick, large, small, secondary, warning}) => {
	let className = 'button'
	let txt = 'Click'
	
	/*
		SIZES
	*/
	//medium 
	if(!large && !small){
		className = className + ' medium'
	} 


	/*COLORS*/
	//primary
	if(!secondary && !warning){
		className = className + ' primary'
	}	

	//text
	if(text){
		txt = text
	}

	return (<button className={className} onClick={onClick}>{txt}</button>)
};

export default Button;
