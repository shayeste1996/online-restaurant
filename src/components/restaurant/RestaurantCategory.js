import React from "react";
import {
  makeStyles,
  Button,
  List,
  ListItem,
  ListItemText,
  Icon,
} from "@material-ui/core";
import classNames from "classnames";
import { FormattedMessage } from "react-intl";

import { openPopover, closePopover } from "store/popover";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const useStyles = makeStyles((theme) => ({
  navWrapper: {
    height: "70px",
    position: "sticky",
    top: "99px",
    zIndex: "3",
  },
  navigation: {
    border: "solid #eeeeee",
    borderTop: "none",
    position: "relative",
    boxShadow: "0 1px 0 0 rgba(0,0,0,.05)",
    lineHeight: "70px",
    borderWidth: "0 1px",
    backgroundColor: "#ffffff",
    display: "flex",
    flexWrap: "wrap",
    padding: "0px 24px",
    "list-style-type": "none",
    [theme.breakpoints.down("md")]: {
      padding: "0px 12px",
    },
    "& > li > a.active": {
      "& > div": {
        boxShadow: "inset 0 -4px 0 #ffe033",
      },
    },
  },
  LinkButton: {
    height: "70px",
    cursor: "pointer",
    display: "inline-block",
    padding: "0 16px",
    lineHeight: "70px",
  },
  activeCategory: {
    boxShadow: "inset 0 -4px 0 #ffe033",
  },
  button: {
    borderRadius: 22,
    padding: 8,
    outline: "none !important",
  },
  listItem: {
    color: "inherit!important",
    textDecoration: "none!important",
    height: 40,
    width: "calc(100% - 16px)",
    borderRadius: "0 20px 20px 0",
    paddingLeft: 24,
    paddingRight: 12,
  },
}));

const more = <FormattedMessage id="home.category.More" defaultMessage="More" />;
const showCount = 6;

const RestaurantCategory = (props) => {
  const { className, categorise, openPopover, closePopover } = props;
  const classes = useStyles();

	const itemClick = (event, id, popover = false) => {
		event.preventDefault();
		const section = document.getElementById(id);
		const scrollWrapper = document.getElementById("ScrollWrapper");
		scrollWrapper.scroll(0,section.offsetTop - 156);
		if(popover)
			closePopover();
	};

  const ResetCategory = () => (
		<List>
		{
			categorise.slice(showCount).map(({name, id}, index) =>
				<ListItem
					key={index}
					href={`#${id}`}
					component="a"
					className={classes.listItem}
					onClick={event => itemClick(event, id)}
				>
					<ListItemText className="truncate pr-0" primary={name} disableTypography={true}/>
				</ListItem>		
			)
		}
		</List>	
  );

  const categoryClick = (event) => {
    openPopover(event.currentTarget, {
      children: <ResetCategory />,
      classes: { paper: "w-64 h-auto" },
    });
  };

  return (
    <div className={classNames(className, classes.navWrapper)}>
      <nav className={classes.navigation}>
        {categorise.slice(0, showCount).map(({ name, id }, index) => (
          <li
            key={index}
            className="whitespace-no-wrap"
            onClick={(event) => itemClick(event, id)}
          >
            <a href={`#${id}`}>
              <div className={classNames(classes.LinkButton)}>{name}</div>
            </a>
          </li>
        ))}
        {categorise.length > showCount && (
          <Button
            className={classes.button}
            onClick={categoryClick}
            endIcon={<Icon>keyboard_arrow_down</Icon>}
          >
            {more}
          </Button>
        )}
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => ({
  categorise: state.restaurant.restaurantProductCategorise,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      openPopover,
      closePopover,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantCategory);
