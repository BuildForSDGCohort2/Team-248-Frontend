import React from "react";

export const Home = React.lazy(() => import("../containers/Home/Home"));
export const SignUp = React.lazy(() => import("../containers/SignUp/SignUp"));
export const ForgetPassword = React.lazy(() => import("../containers/ForgetPassword/ForgetPassword"));
export const Login = React.lazy(() => import("../containers/Login/Login"));
export const CreateOffer = React.lazy(() => import("../components/CreateOffer/CreateOffer"));
export const Profile = React.lazy(() => import("../containers/User/Profile/Profile"));
export const Offers = React.lazy(() => import("../containers/Offers/Offers"));
export const OfferDetails = React.lazy(() => import("../containers/OfferDetails/OfferDetails"));
