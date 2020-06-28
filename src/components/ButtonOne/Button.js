import React from 'react';
import './Button.scss';

const Button = ({text, onClick, tp, size}) => {
	let thisType = tp
	let thisSize = size
	

	if(!tp){
		thisType = 'primary'
	}

	if(!size){
		thisSize = 'medium'
	}
	let txt='click'
	//text
	if(text){
		txt = text
	}

	return (<button className={`${thisType} ${thisSize}`} onClick={onClick}>{txt}</button>)
};

export default Button;
