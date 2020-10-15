import React, { useEffect, useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';

const useEnhancedEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

function Theme(props) {
	
	const direction = useSelector(state => state.locale.current.direction);
	
	useEnhancedEffect(() => {
		document.body.dir = direction;
	}, [direction]);


	return <>{props.children}</>;
}

export default React.memo(Theme);
