import React from "react";
import { makeStyles } from "@material-ui/core";


import MobileHero from "./MobileHero";
import MobileLocation from "./MobileLocation";
import MobileCategory from "./MobileCategory";
import MobileSearchBox from "./MobileSearchBox";

import RestaurantCarousel from "components/home/restaurant/RestaurantCarousel";
import NextRestaurants from "components/home/restaurant/NextRestaurants";


const useStyles = makeStyles(() => ({
	root: {
		borderRadius: "4px 4px 0 0",
		background:"white",
	},
	main: {
		'padding':'20px 8px',		
	},
}));

const MobileHome = (props) => {

	const classes = useStyles();

	return (
		<div className={classes.root}>
		
			<MobileHero />
			<MobileLocation />
			<MobileCategory />
			<MobileSearchBox />	
			<div className={classes.main}>
				<RestaurantCarousel />
				<NextRestaurants />
			</div>
			
		</div>
	);
};
export default MobileHome;