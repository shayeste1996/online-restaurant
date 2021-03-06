import React from 'react';
import {makeStyles, TextField} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import classNames from 'classnames';

const useStyles = makeStyles(() => ({
	input:{
		fontSize:18,
	},
}));


const DropDown = props => {
	const classes = useStyles();
	
	const {label, className, ...otherProps} = props; 
	return (
		<Autocomplete
			renderInput={ 
				params =>  { 
					const {InputProps, ...other} = params;
					return <TextField {...other} 
							InputProps={{...InputProps, classes:{input:classes.input}}} 
							placeholder={label} 
							variant="outlined"
						/> 
				}
			}
			getOptionLabel={option => option.title}
			className={classNames("w-full", className)}
			
			{...otherProps}
		/>
	);
};

export default DropDown;
