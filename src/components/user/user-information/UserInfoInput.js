import React, { useReducer } from "react";
import {
  withStyles,
  Checkbox,
  FormGroup,
  FormControlLabel,
  FormControl,
} from "@material-ui/core";
import classNames from "classnames";
import { FormattedMessage } from "react-intl";
import { injectIntl } from "react-intl";

import { connect } from "react-redux";

const styles = {
  codeInput: {
    height: " 34px",
    border: "1px solid #cccccc",
    boxShadow: "inset 0 1px 3px 0 rgba(0, 0, 0, 0.2)",
    borderRadius: "4px",
  },
  phoneCode: {
    left: "13.9rem",
    paddingTop: "1px",
    display: "flex",
    position: "absolute",
    alignItems: "center",
    pointerEvents: "none",
    lineHeight: "32px",
  },
  marginLeft: {
    marginLeft: "3.2rem",
  },
};

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

const UserInfoInput = ({ classes, intl, userInfo }) => {
  const initialState = {
    name: userInfo.name,
    email: userInfo.Email,
    tell: userInfo.phone,
    emailCheck: true,
    smsCheck: "",
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
  };
  const emailInput = {
    name: (
      <FormattedMessage id="home.userInfoInput.Email" defaultMessage="Email" />
    ),
    placeholder: intl.formatMessage({
      id: "home.userInfoInput.Email",
      defaultMessage: "Email",
    }),
  };
  const tellInput = {
    name: (
      <FormattedMessage id="home.userInfoInput.Phone" defaultMessage="Phone" />
    ),
    placeholder: intl.formatMessage({
      id: "home.userInfoInput.Phone",
      defaultMessage: "Phone",
    }),
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (event) => {
    dispatch({ field: event.target.name, value: event.target.value });
  };
  const { name, email, tell, emailCheck, smsCheck } = state;

  return (
    <>
      <div className="flex flex-row mt-8 mb-5">
        <div className="w-1/3 font-bold text-lg">{nameInput.name}</div>
        <input
          className={classNames(classes.codeInput, "text-md px-3 py-1 w-2/4")}
          name="name"
          placeholder={nameInput.placeholder}
          value={name}
          onChange={handleChange}
          type="text"
        />
      </div>
      <div className="flex flex-row my-5">
        <div className="w-1/3 font-bold text-lg">{emailInput.name}</div>
        <input
          className={classNames(classes.codeInput, "text-md px-3 py-1 w-2/4")}
          name="email"
          placeholder={emailInput.placeholder}
          value={email}
          onChange={handleChange}
          type="text"
        />
      </div>
      <div className="flex flex-row my-5">
        <div className="w-1/3 font-bold text-lg">{tellInput.name}</div>
        <input
          className={classNames(
            classes.codeInput,
            "text-md pl-8 pr-3 py-1 w-2/4"
          )}
          name="tell"
          placeholder={tellInput.placeholder}
          value={tell}
          onChange={handleChange}
          type="number"
        />
        <div className={classes.phoneCode}>+7</div>
      </div>
      <div className="flex flex-row my-5">
        <div className="w-1/4 font-bold text-lg mt-2">{advertisment.name}</div>
        <FormControl component="fieldset" className={classes.marginLeft}>
          <FormGroup aria-label="position">
            <FormControlLabel
              value={emailCheck}
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
              value={smsCheck}
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
    </>
  );
};

function mapStateToProps(state) {
  return { userInfo: state.user.userInfo };
}

export default connect(mapStateToProps)(
  withStyles(styles)(injectIntl(UserInfoInput))
);
