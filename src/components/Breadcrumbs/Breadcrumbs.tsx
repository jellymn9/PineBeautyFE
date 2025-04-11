import { useLocation } from "react-router-dom";
import { BreadcrumbsNav } from "./BreadcrumbsStyled";

const Breadcrumbs = function () {
  const location = useLocation();
  const pathnames = location.pathname.split("/");
  console.log(pathnames);

  const temporaryHardcoded = "Home > Products > Electronics > iPhone 14 Pro";

  return <BreadcrumbsNav>{temporaryHardcoded}</BreadcrumbsNav>;
};

export default Breadcrumbs;
