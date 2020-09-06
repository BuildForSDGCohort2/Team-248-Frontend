import React from "react";

export const Home = React.lazy(() => import("../containers/Home/Home"));
export const ForgetPassword = React.lazy(() =>
  import("../containers/ForgetPassword/ForgetPassword")
);
export const CreateOffer = React.lazy(() =>
  import("../components/CreateOffer/CreateOffer")
);
