import React, { Suspense } from "react";
import { makeStyles, Hidden } from "@material-ui/core";
import classNames from "classnames";

import Loading from "assert/Loading";
import MessageButton from "../MessageButton";

const Specification = React.lazy(() => import("./Specification"));
const AboutMe = React.lazy(() => import("./AboutMe"));
const Availability = React.lazy(() => import("./Availability"));
const Photos = React.lazy(() => import("./Photos"));
const Feedback = React.lazy(() => import("./Feedback"));

const useStyles = makeStyles(() => ({
  root: {
    flex: "1 1 100%",
  },
}));

const description =
  "Классический стейк Нью-Йорк с тонкой прослойкой жира. Вес указан в сыром виде. Степень прожарки на выбор Классический стейк Нью-Йорк";
const restaurant = {
  id: 1,
  name: "Park & Pizza",
  imagesAdress:
    "/static/images/restaurants/f39ee4d41b90ccd818085b9f876525fd-600x450.jpeg",
  labelTitle: "00:00",
  labelAnnotation: "сегодня",
  rate: "4.6",
  description,
};
const content =
  "Классический стейк Нью-Йорк с тонкой прослойкой жира. Вес указан в сыром виде. Степень прожарки на выбор Классический стейк Нью-Йорк";

const Content = ({ className }) => {
  const classes = useStyles();

  return (
    <div className={classNames(classes.root, className)}>
      <div className="flex flex-1 flex-col md:mr-2">
        <Suspense fallback={<Loading />}>
          <Specification item={restaurant} className="card" />
        </Suspense>
        <Hidden mdUp>
          <MessageButton className="mx-3" />
        </Hidden>
        <Suspense fallback={<Loading />}>
          <AboutMe content={content + content} />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Availability />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Photos />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Feedback />
        </Suspense>
      </div>
    </div>
  );
};
export default Content;
