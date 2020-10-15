import React from "react";
import { makeStyles, Typography } from "@material-ui/core/";
import classNames from "classnames";

import CustomizedSlider from "./CustomizedSlider";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#0d0c0c",
  },
}));

const StarSlider = ({ className }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState([0, 5]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classNames(className, "h-full")}>
      <Typography id="range-star" gutterBottom className={classes.title}>
        Star : {value[0]} - {value[1]}
      </Typography>
      <CustomizedSlider
        value={value}
        onChange={handleChange}
        aria-labelledby="range-star"
        min={0}
        max={5}
      />
    </div>
  );
};

export default StarSlider;
