import React from "react";

import HeroHeader from "wrappers/hero-header/HeroHeader";
 import FoodCategories from "wrappers/food-categories/FoodCategories";
 import Catalog from "components/home/Catalog";
 import RestaurantCarousel from "components/home/restaurant/RestaurantCarousel";
 import NextRestaurants from "components/home/restaurant/NextRestaurants";
import Dummy from "./Dummy"
const Home = () => {
  return (
    <div className="home">
      <HeroHeader />
      <FoodCategories />

       <div className="home__body">
        <RestaurantCarousel />
        <NextRestaurants />
      </div>  
    </div>
  );
};
export default Home;
