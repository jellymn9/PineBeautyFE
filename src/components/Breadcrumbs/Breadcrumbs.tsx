import { useLocation, Link } from "react-router-dom";
import { BreadcrumbsNav } from "./BreadcrumbsStyled";

const ROUTE_LABELS: Record<string, string> = {
  products: "Products",
  cart: "Cart",
  profile: "Profile",
};

interface BreadcrumbsPropsI {
  dynamicLabel?: string;
}

const Breadcrumbs = ({ dynamicLabel }: BreadcrumbsPropsI) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <BreadcrumbsNav>
      <Link to="/">Home</Link>
      {pathnames.map((segment, index) => {
        const path = "/" + pathnames.slice(0, index + 1).join("/");
        const isLast = index === pathnames.length - 1;
        const isId = !ROUTE_LABELS[segment];
        const label =
          isId && dynamicLabel
            ? dynamicLabel
            : (ROUTE_LABELS[segment] ?? segment);

        return isLast ? (
          <span key={path}> &gt; {label}</span>
        ) : (
          <Link key={path} to={path}>
            {" "}
            &gt; {label}
          </Link>
        );
      })}
    </BreadcrumbsNav>
  );
};

export default Breadcrumbs;
