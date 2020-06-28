import React from 'react';
import './Button.scss';

let Button = ({text, onClick, large, small, secondary, danger, warning}) => {
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

//1-layer
Button.Small = (props) => <Button small {...props}/>
Button.Large = (props) => <Button large {...props}/>
Button.Danger = (props) => <Button danger {...props}/>
Button.Warning = (props) => <Button warning {...props}/>


//2-layers
//type-first
Button.Warning.Small = (props) => <Button.Small warning {...props} />
Button.Danger.Small = (props) => <Button.Small danger {...props} />
Button.Warning.Large = (props) => <Button.Large warning {...props} />
Button.Danger.Large = (props) => <Button.Large danger {...props} />

//size-first
Button.Small.Warning = (props) => <Button.Small warning {...props} />
Button.Small.Danger = (props) => <Button.Small danger {...props} />
Button.Large.Warning = (props) => <Button.Large warning {...props} />
Button.Large.Danger = (props) => <Button.Large danger {...props} />

export default Button;
