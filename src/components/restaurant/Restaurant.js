import React, { Suspense } from "react";
import { makeStyles } from "@material-ui/core";

import Loading from "../../assert/Loading";

const Hero = React.lazy(() => import("./heroHeader/HeroHeader"));
const Category = React.lazy(() => import("./RestaurantCategory"));
const CategoryContent = React.lazy(() => import("./RestaurantContent"));
const CartWrapper = React.lazy(() => import("../cart/CartWrapper"));

const useStyles = makeStyles((theme) => ({
  contentWrapper: {
    flex: "1 1 100%",
    display: "flex",
    flexWrap: "wrap",
    alignContent: "flex-start",
  },
  sidebarRoot: {},
  contentInner: {
    flexGrow: "1",
    flexBasis: "100%",
    flexShrink: "0",
  },
}));

const products = [
  {
    id: "1",
    name: "Сэндвич Чаба-Саба",
    imagesAdress:
      "/static/images/products/42aad804be3c04ac3ff439ffcbace3c4-450x300.jpeg",
    description:
      "Сочная грудка индейки на свежевыпеченной чиабатте с перечным и брусничным соусами, листья салата, помидоры, зеленый перец и свежие огурцы",
    weight: "249 g",
    price: "199 ₽",
  },
  {
    id: "2",
    name: "Выберите опции",
    imagesAdress:
      "/static/images/products/95150a4e74aae90746a4ed698f4d3aed-450x300.jpeg",
    description:
      "Сочная грудка индейки на свежевыпеченной чиабатте с перечным и брусничным соусами, листья салата, помидоры, зеленый перец и свежие огурцы",
    weight: "115 r",
    price: "500 ₽",
  },
  {
    id: "3",
    name: "Поке боул с лососем",
    imagesAdress:
      "/static/images/products/a197d24070435d0ffe2dae779dc2a1d6-450x300.jpeg",
    description:
      "Сочная грудка индейки на свежевыпеченной чиабатте с перечным и брусничным соусами, листья салата, помидоры, зеленый перец и свежие огурцы",
    weight: "277 g",
    price: "460 ₽",
  },
  {
    id: "4",
    name: "Поке боул с угрем",
    imagesAdress:
      "/static/images/products/cd73777c67362d15ad0b2c93fd6eb726-450x300.jpeg",
    description:
      "Сочная грудка индейки на свежевыпеченной чиабатте с перечным и брусничным соусами, листья салата, помидоры, зеленый перец и свежие огурцы",
    weight: "145 r",
    price: "265 ₽",
  },
  {
    id: "5",
    name: "Чикен Мисо боул",
    imagesAdress:
      "/static/images/products/d55b12988b5bda22acb0f13d93ab37bf-450x300.jpeg",
    description:
      "Сочная грудка индейки на свежевыпеченной чиабатте с перечным и брусничным соусами, листья салата, помидоры, зеленый перец и свежие огурцы",
    weight: "112 g",
    price: "159 ₽",
  },
];

const categorise = [
  { id: "1", name: "Популярные блюда", count: 5, products },
  { id: "2", name: "Салаты", count: 5, products },
  { id: "3", name: "Суши", count: 5, products },
  { id: "4", name: "Сашими", count: 5, products },
];

const Restaurant = (props) => {
  const classes = useStyles();

  return (
    <>
      <div>
        <div className={classes.contentWrapper}>
          <Suspense fallback={<Loading />}>
            <Hero />
          </Suspense>
          <div className={classes.contentInner}>
            <Suspense fallback={<Loading />}>
              <Category />
            </Suspense>
            <div id="RestaurantContent">
              <Suspense fallback={<Loading />}>
                {categorise.map((item, index) => (
                  <CategoryContent category={item} key={index} />
                ))}
              </Suspense>
            </div>
          </div>
        </div>
        <div className={classes.sidebarRoot}>
          <Suspense fallback={<Loading />}>
            <CartWrapper />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Restaurant;
