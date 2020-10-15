import React, { Suspense } from "react";
import Loading from "assert/Loading";

const Sidebar = React.lazy(() => import("./Sidebar"));
const Content = React.lazy(() => import("./Content"));

const LeftoverWrapper = () => {
  return (
    <div className="flex">
      <Suspense fallback={<Loading />}>
        <Sidebar />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Content />
      </Suspense>
    </div>
  );
};

export default LeftoverWrapper;
