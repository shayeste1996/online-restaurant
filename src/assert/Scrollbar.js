import React, {createRef, useCallback, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		position: 'relative',
		height: '100%',
		width: '100%',
		overflowY:'auto',
		scrollBehavior: "smooth",
	}
}));

const Scrollbar = ({children}) => { 
	
	const ref = createRef();
	const history = useHistory();
	const classes = useStyles();
	
	const scrollToTop = useCallback(() => { 
		if (ref && ref.current) {
			ref.current.scrollTop = 0;
		}
	}, [ref]);
	
	useEffect(
		() =>
			history.listen(() => {
				scrollToTop();
			}),
		[scrollToTop, history]
	);	
	
	return (
		<div ref={ref} className={classes.root} id="ScrollWrapper">
			{children}
		</div>
	);
};

export default Scrollbar;