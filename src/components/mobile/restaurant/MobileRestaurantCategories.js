import React from "react";
import { connect } from "react-redux";


const MobileRestaurantCategories = ({className, categorise}) => {

	const itemClick = (event, id) => {
		event.preventDefault();
		const section = document.getElementById(id);
		const scrollWrapper = document.getElementById("ScrollWrapper");
		scrollWrapper.scroll(0,section.offsetTop - 114)
	};

	return (
		<div className={className}>
			<div className="categoryContent">
				<div className="categoryCarousel">					
					<div className="categoryCarouselScroll">					
						<div className="categoryCarouselBubble" />
						<nav className="categoryList">
						{
							categorise.map(({id, name}, index) =>
								<li key={index} onClick={event => itemClick(event, id)}><a className="categoryListItem" href={`#${id}`}>{name}</a></li>																					
							)
						}
						</nav>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
  categorise: state.restaurant.restaurantProductCategorise,
});

export default connect(mapStateToProps)(MobileRestaurantCategories);
