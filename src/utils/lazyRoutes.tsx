import { lazy } from "react";

export const LazyHome = lazy(() => import("@/pages/Home/Home"));
export const LazyProducts = lazy(() => import("@/pages/Products/Products"));
export const LazyProduct = lazy(() => import("@/pages/Product/Product"));
export const LazyCart = lazy(() => import("@/pages/Cart/Cart"));
export const LazyProfile = lazy(() => import("@/pages/Profile/Profile"));
export const LazySignIn = lazy(() => import("@/pages/Auth/SignIn/SignIn"));
export const LazySignUp = lazy(() => import("@/pages/Auth/SignUp/SignUp"));
