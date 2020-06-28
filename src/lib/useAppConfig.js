import React from 'react'; 


/* Loads app config file */

const useAppConfig = () => {
	let [ appConfig, setAppConfig ] = React.useState(null)

	React.useEffect(() => {
		setTimeout(() => {
			fetch(`./appconfig/config.js`)
			.then(res => res.json()) 
			.then(res => {
				setAppConfig(res[0])	
			})
		}, 1500)
	}, [])

	return appConfig
}

export { useAppConfig }