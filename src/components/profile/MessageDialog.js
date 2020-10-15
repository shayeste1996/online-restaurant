import React, { useReducer } from "react";
import {
  makeStyles,
  withStyles,
  Icon,
  IconButton,
  Checkbox,
  Radio,
  FormControl,
  FormControlLabel,
  RadioGroup,
} from "@material-ui/core";
import classNames from "classnames";
import { FormattedMessage } from "react-intl";
import { injectIntl } from "react-intl";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { closeDialog } from "store/dialog";
import DropDown from "../../assert/DropDown";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    "& .safety": {
      color: "#7e7d8f",
      fontSize: "17px",
    },
    "& .radioGroup": {
      flexDirection: "row",
    },
    "& .paymentControl": {
      display: "flex",
      alignItems: "start",
      flexDirection: "column",
      width: "100%",
      color: "#7e7d8f",
      fontSize: "17px",
      marginTop: "20px",
      [theme.breakpoints.up("md")]: {
        flexDirection: "row",
        alignItems: "center",
      },
    },
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  submitBtn: {
    border: " 1px solid rgb(255, 224, 51)",
    backgroundColor: "rgb(255, 224, 51)",
    borderRadius: "3px",
  },
  codeInput: {
    height: " 34px",
    border: "1px solid #cccccc",
    boxShadow: "inset 0 1px 3px 0 rgba(0, 0, 0, 0.2)",
    borderRadius: "4px",
  },
  textArea: {
    height: "100px",
    padding: "8px",
    border: "1px solid #cccccc",
    boxShadow: "inset 0 1px 3px 0 rgba(0, 0, 0, 0.2)",
    borderRadius: "4px",
    marginTop: "6px",
  },
  radioRoot: {
    "&:hover": {
      backgroundColor: "transparent",
    },
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

const StyledRadio = (props) => {
  const classes = useStyles();

  return (
    <Radio
      className={classes.radioRoot}
      disableRipple
      color="default"
      checkedIcon={
        <Icon style={{ color: "#ffe033" }}>radio_button_checked</Icon>
      }
      icon={<Icon>radio_button_unchecked</Icon>}
      {...props}
    />
  );
};



const initialState = {
  payment: "cash",
  description: "",
  name: "",
  email: "",
  tell: "",
  postcode: "",
  password: "",
  rePassword: "",
  agree: false,
};

const reducer = (state, { field, value }) => {
  return {
    ...state,
    [field]: value,
  };
};

const agreeInput = {
  name: (
    <FormattedMessage
      id="profile.messageDialog.Agree"
      defaultMessage="I agree to this website"
    />
  ),
};
const cashInput = {
  name: (
    <FormattedMessage
      id="Checkout.CreditCardPayment"
      defaultMessage="Credit card payment"
    />
  ),
};
const creditInput = {
  name: (
    <FormattedMessage id="Checkout.CashPayment" defaultMessage="Cash payment" />
  ),
};

const MessageDialog = ({ className, closeDialog, intl }) => {
  const classes = useStyles();
  const dropList1 = intl.formatMessage({
    id: "home.hero.ShippingAddress",
    defaultMessage: "Enter shipping address ...",
  });
  const dropList2 = intl.formatMessage({
    id: "home.hero.ShippingAddress",
    defaultMessage: "Enter shipping address ...",
  });
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
  const postcodeInput = {
    name: (
      <FormattedMessage
        id="profile.messageDialog.PostCode"
        defaultMessage="Post code"
      />
    ),
    placeholder: intl.formatMessage({
      id: "profile.messageDialog.PostCode",
      defaultMessage: "Post code",
    }),
  };
  const passwordInput = {
    name: (
      <FormattedMessage
        id="profile.messageDialog.Password"
        defaultMessage="Password"
      />
    ),
    placeholder: intl.formatMessage({
      id: "profile.messageDialog.Password",
      defaultMessage: "Password",
    }),
  };
  const rePasswordInput = {
    name: (
      <FormattedMessage
        id="profile.messageDialog.RepeatPassword"
        defaultMessage="Repeat password"
      />
    ),
    placeholder: intl.formatMessage({
      id: "profile.messageDialog.ConfirmPassword",
      defaultMessage: "Confirm password",
    }),
  };
  const descriptionInput = {
    placeholder: intl.formatMessage({
      id: "profile.messageDialog.SampleMessage",
      defaultMessage: "Hi  Wasim,I'm looking for a tutor to teach .I would like to be tutored at my house. Please let me know if you are able to help and your availability.Thanks.",
    }),
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (event) => {
    dispatch({ field: event.target.name, value: event.target.value });
  };

  const {
    name,
    email,
    tell,
    postcode,
    rePassword,
    password,
    agree,
    payment,
  } = state;

  return (
    <div className={classNames(classes.root, className)}>
      <IconButton
        aria-label="close"
        className={classes.closeButton}
        onClick={closeDialog}
      >
        <Icon color="action">close</Icon>
      </IconButton>
      <div className="text-md py-12 px-10">
        <div className="text-left font-bold text-4xl">
          <h1>
            <FormattedMessage
              id="header.myInfo"
              defaultMessage="My Information"
            />
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row mt-8">
          <DropDown
            multiple
            options={top100Films}
            label={dropList1}
            className="text-md py-1 flex-1 sm:mr-8"
          />
          <DropDown
            multiple
            options={top100Films}
            label={dropList2}
            className="text-md py-1 flex-1"
          />
        </div>
        <div>
          <FormControl component="fieldset" className="paymentControl">
            <div className="mr-8 mb-4 sm:mb-0">
              <FormattedMessage
                id="profile.messageDialog.PaymentType"
                defaultMessage="Payment Type"
              />
              ?
            </div>
            <RadioGroup
              name="payment"
              value={payment}
              onChange={handleChange}
              className="radioGroup"
            >
              <FormControlLabel
                value="credit"
                control={<StyledRadio />}
                label={cashInput.name}
              />
              <FormControlLabel
                value="cash"
                control={<StyledRadio />}
                label={creditInput.name}
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div>
          <div className="w-full mb-5">
            <textarea
              maxLength="10000"
              className={classNames(
                classes.textArea,
                "text-md px-3 py-1 w-full"
              )}
              value={descriptionInput.placeholder}
              onChange={handleChange}
              name="description"
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-8 mb-5">
            <input
              className={classNames(
                classes.codeInput,
                "text-md px-3 py-1 flex-1 mb-2 sm:mb-0 sm:mr-8"
              )}
              placeholder={nameInput.placeholder}
              value={name}
              onChange={handleChange}
              name="name"
            />
            <input
              className={classNames(
                classes.codeInput,
                "text-md px-3 py-1 flex-1"
              )}
              placeholder={emailInput.placeholder}
              value={email}
              onChange={handleChange}
              name="email"
            />
          </div>

          <div className="flex flex-col sm:flex-row mt-8 mb-5">
            <input
              placeholder={tellInput.placeholder}
              value={tell}
              className={classNames(
                classes.codeInput,
                "text-md px-3 py-1 flex-1 mb-2 sm:mb-0 sm:mr-8"
              )}
              onChange={handleChange}
              name="tell"
            />
            <input
              className={classNames(
                classes.codeInput,
                "text-md px-3 py-1 flex-1"
              )}
              placeholder={postcodeInput.placeholder}
              value={postcode}
              onChange={handleChange}
              name="postcode"
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-8 mb-5">
            <input
              placeholder={passwordInput.placeholder}
              value={password}
              className={classNames(
                classes.codeInput,
                "text-md px-3 py-1 flex-1 mb-2 sm:mb-0 sm:mr-8"
              )}
              onChange={handleChange}
              name="password"
              type="password"
            />
            <input
              className={classNames(
                classes.codeInput,
                "text-md px-3 py-1  flex-1"
              )}
              placeholder={rePasswordInput.placeholder}
              value={rePassword}
              onChange={handleChange}
              name="rePassword"
              type="password"
            />
          </div>
          <div className="safety mb-4">
            <FormattedMessage
              id="profile.messageDialog.SafetyRisk"
              defaultMessage=" Are there any heath and safety risks at your property? ie. building
                work that we need to inform the tutor about."
            />
          </div>
          <div>
            <FormControlLabel
              value={agree}
              control={
                <YellowCheckbox
                  onChange={handleChange}
                  inputProps={{ "aria-label": "checkbox" }}
                />
              }
              label={agreeInput.name}
              labelPlacement="end"
              name="agree"
            />
          </div>
        </div>
        <div className="flex flex-row my-5">
          <button
            className={classNames(
              classes.submitBtn,
              "flex-1  text-center font-bold w-2/5 py-3 mt-5 text-base"
            )}
          >
            <FormattedMessage
              id="home.userInfo.SaveChanges"
              defaultMessage="Save changes"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
];

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      closeDialog,
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(injectIntl(MessageDialog));
