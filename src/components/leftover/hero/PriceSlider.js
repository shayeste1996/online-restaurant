import React from "react";
import { makeStyles, Typography } from "@material-ui/core/";
import classNames from "classnames";

import CustomizedSlider from "./CustomizedSlider";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#0d0c0c",
  },
}));

const PriceSlider = ({ className }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classNames(className, "h-full")}>
      <Typography id="range-price" gutterBottom className={classes.title}>
        Price : {value[0]}$ - {value[1]}$
      </Typography>
      <CustomizedSlider
        value={value}
        onChange={handleChange}
        aria-labelledby="range-price"
      />
    </div>
  );
};

export default PriceSlider;
