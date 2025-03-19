import HomeSection from "../HomeSection/HomeSection";
import ProductCard from "../ProductCard/ProductCard";

const heading = "PineBeauty's favs";

const PineBeautyFavs = () => {
  return (
    <HomeSection heading={heading}>
      <ProductCard
        product={{
          id: "",
          name: " test name",
          price: 123,
          currency: "$",
          image: "",
          categoryName: "OIL",
          productTypeName: "SCRUBS_AND_MASKS",
        }}
      ></ProductCard>
    </HomeSection>
  );
};

export default PineBeautyFavs;
