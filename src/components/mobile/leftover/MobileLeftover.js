import React from "react";
import { makeStyles } from "@material-ui/core";
import Pagination from '@material-ui/lab/Pagination';

import MobileLeftoverHero from './MobileLeftoverHero';
import MobileCategory from "components/mobile/home/MobileCategory";
import Content from "components/leftover/wrapper/Content";


const useStyles = makeStyles(() => ({
	root:{
		'& .heroWrapper':{
			"padding": "40px 24px",
			"& .searchButton": {
				"minWidth": "120px",
			},				
			"& .searchInput": {
				"width": "100%",
			},				
			"& .advanceItems": {
				"& .column":{
					"flex": "1 1 calc(25% - 2em)",
					"margin":"12px 0px",
					"minWidth": "300px",
				},
			},				
		},		
		'& .categoryWrapper':{
			"background": "white",
			"borderBottom": "none",
		},
		'& .paginationWrapper':{
			"padding": "12px 0px",
			"borderTop": "1px solid #e6e6e6",
			"background": "white",
		},
		'& .contentWrapper':{
			"& .cartWrapper":{
				"flexWrap": "wrap",
				"& .imageItem":{
					"flex": "1 0 100%",
				},
				"& .mainItem":{
					"width": "100%",
					"padding": "12px 4px",
					"borderBottom": "1px solid #e6e6e6"
				},
				"& .bottomItem":{
					"flexWrap": "wrap",
					"flexDirection": "row",
					"width": "100%",
					"padding": "12px 4px",
					"& .starsWrapper": {
						"display": "none",
						"flex": "1 1 100%",
						"textAlign": "center",
						"marginBottom": "12px",
					},
				},
			},		
		},
	},
}));

const MobileLeftover = (props) => {
	
	const classes = useStyles();	
	
	return (
		<div className={classes.root}>
			<MobileLeftoverHero className="heroWrapper" />
			<MobileCategory className="categoryWrapper" />
			<Pagination count={10} className="paginationWrapper" />	
			<Content className="contentWrapper" />		
		</div>
	);
};
export default MobileLeftover;