import React, { useReducer } from "react";
import classNames from "classnames";
import {
  withStyles,
  MenuItem,
  makeStyles,
  Checkbox,
  FormGroup,
  FormControlLabel,
  TextField,
  FormControl,
} from "@material-ui/core";
import { FormattedMessage } from "react-intl";
import { injectIntl } from "react-intl";

import { connect } from "react-redux";

const InfoField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#a9a6a6",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#e0e0e0",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "#e0e0e0",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#e0e0e0",
      },
      "&:hover fieldset": {
        borderColor: "#e0e0e0",
      },
      "&.Mui-focused": {
        border: "1px solid #e0e0e0",
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    zIndex: 10,
  },
  margin: {
    marginTop: theme.spacing(1),
    width: "100%",
  },
  advertisment: {
    borderBottom: "1px solid #e0e0e0",
  },
  adText: {
    color: "#b0b0b0",
    fontSize: "12px",
    marginBottom: " 5px",
    marginTop: "13px",
  },
  label: {
    margin: 0,
  },
}));

const YellowCheckbox = withStyles({
  root: {
    color: "#dcdbdb",
    padding: "3px",
    fontSize: "20px",
    "&:hover, &:focus": {
      backgroundColor: "transparent",
    },
    "&$checked": {
      color: "rgb(255, 224, 51)",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const genderInput = (
  <FormattedMessage id="home.userInfoInput.Gender" defaultMessage="Gender" />
);
const birthDayInput = (
  <FormattedMessage
    id="home.userInfoInput.BirthDay"
    defaultMessage="Date of Birth"
  />
);

const genderType = [
  {
    value: "male",
    label: (
      <FormattedMessage id="home.infoTextField.Male" defaultMessage="Male" />
    ),
  },
  {
    value: "female",
    label: (
      <FormattedMessage
        id="home.infoTextField.Female"
        defaultMessage="Female"
      />
    ),
  },
];

const emailCheckbox = {
  name: (
    <FormattedMessage id="home.userInfoInput.Email" defaultMessage="Email" />
  ),
};
const smsCheckbox = {
  name: (
    <FormattedMessage
      id="home.userInfoInput.Advertisment"
      defaultMessage="Advertising and promotions"
    />
  ),
};
const advertisment = {
  name: (
    <FormattedMessage
      id="home.userInfoInput.Notification"
      defaultMessage="Push notifications and SMS"
    />
  ),
};

const InfoTextField = ({ intl,userInfo }) => {
  const initialState = {
    name: userInfo.name,
    email: userInfo.Email,
    tell: userInfo.phone,
    birthDay: userInfo.birthDay,
    gender: "",
  };
  function reducer(state, { field, value }) {
    return {
      ...state,
      [field]: value,
    };
  }
  const nameInput = {
    name: (
      <FormattedMessage id="home.userInfoInput.Name" defaultMessage="Name" />
    ),
    placeholder: intl.formatMessage({
      id: "home.userInfoInput.YourName",
      defaultMessage: "Your Name",
    }),
    value: "",
  };
  const emailInput = {
    name: (
      <FormattedMessage id="home.userInfoInput.Email" defaultMessage="Email" />
    ),
    placeholder: intl.formatMessage({
      id: "home.userInfoInput.Email",
      defaultMessage: "Email",
    }),
    value: "",
  };
  const tellInput = {
    name: (
      <FormattedMessage id="home.userInfoInput.Phone" defaultMessage="Phone" />
    ),
    placeholder: intl.formatMessage({
      id: "home.userInfoInput.Phone",
      defaultMessage: "Phone",
    }),
    value: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const classes = useStyles();

  const handleChange = (event) => {
    dispatch({ field: event.target.name, value: event.target.value });
  };
  const { name, email, tell, birthDay, gender } = state;
  // eslint-disable-next-line
  return (
    <form className={classes.root} noValidate>
      <InfoField
        name="name"
        className={classes.margin}
        value={name}
        label={nameInput.name}
        onChange={handleChange}
      />
      <InfoField
        name="birthDay"
        className={classes.margin}
        value={birthDay}
        label={birthDayInput}
        onChange={handleChange}
      />
      <InfoField
        name="gender"
        className={classNames(classes.margin, classes.MuiMenuItem)}
        value={gender}
        select
        label={genderInput}
        onChange={handleChange}
      >
        {genderType.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </InfoField>
      <InfoField
        name="email"
        value={email}
        className={classes.margin}
        label={emailInput.name}
        onChange={handleChange}
      />
      <InfoField
        name="tell"
        value={tell}
        className={classes.margin}
        label={tellInput.name}
        onChange={handleChange}
      />
      <div className={classNames(classes.advertisment, "w-full pb-2")}>
        <div className={classes.adText}>{advertisment.name}</div>
        <FormControl component="fieldset" className="w-full">
          <FormGroup aria-label="position">
            <FormControlLabel
              className={classNames(
                classes.label,
                "flex flex-row-reverse justify-between"
              )}
              value="end"
              control={
                <YellowCheckbox
                  onChange={handleChange}
                  inputProps={{ "aria-label": "checkbox" }}
                />
              }
              label={emailCheckbox.name}
              labelPlacement="end"
            />
            <FormControlLabel
              className={classNames(
                classes.label,
                "flex flex-row-reverse justify-between"
              )}
              value="end"
              control={
                <YellowCheckbox
                  onChange={handleChange}
                  inputProps={{ "aria-label": "checkbox" }}
                />
              }
              label={smsCheckbox.name}
              labelPlacement="end"
            />
          </FormGroup>
        </FormControl>
      </div>
    </form>
  );
};

function mapStateToProps(state) {
  return { userInfo: state.user.userInfo };
}

export default connect(mapStateToProps)(injectIntl(InfoTextField));
