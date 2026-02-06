import { Suspense } from "react";
import { Loader } from "@/components/UI/Loader/Loader";

export const withSuspense = (
  element: JSX.Element,
  fallback: JSX.Element = <Loader />,
) => <Suspense fallback={fallback}>{element}</Suspense>;
