import React, { Suspense, useCallback } from "react";
import { makeStyles } from "@material-ui/core";
import { useDispatch } from 'react-redux';

import Loading from "assert/Loading";
import { openDialog } from "store/dialog";
import LocationModal from "components/location/LocationModal";

const Hero = React.lazy(() => import("./hero/Hero"));
const Catalog = React.lazy(() => import("./catalog/Catalog"));
const Wrapper = React.lazy(() => import("./wrapper/Wrapper"));

const useStyles = makeStyles(() => ({
  root: {
    "& .heroWrapper": {
      padding: "51px 80px 56px",
      margin: "-1px -1px 0",
    },
    "& .catalogWrapper": {
      padding: "20px 80px 20px 20px",
      margin: "8px 0px",
    },
  },
}));

const Leftover = (props) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	
	const mapClick = useCallback(() => {
		dispatch(openDialog({
			children: <LocationModal />,
			maxWidth: "md",
			fullWidth: true,
			fullScreen: false,
			scroll: "body",
			classes: { paper: "m-0 md:m-48" },
		}))		
	}, [dispatch]);

	return (
		<div className={classes.root}>
			<Suspense fallback={<Loading />}>
				<Hero className="heroWrapper" mapClick={mapClick} />
			</Suspense>
			<Suspense fallback={<Loading />}>
				<Catalog className="catalogWrapper" />
			</Suspense>
			<Suspense fallback={<Loading />}>
				<Wrapper className="contentWrapper"/>
			</Suspense>
		</div>
	);
};
export default Leftover;
