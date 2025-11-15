import { useLoaderData } from "react-router-dom";

import { ProductI } from "@/utils/types/productTypes";
// import { useAuth } from "@/context/AuthContext";
// import { addProductToCart } from "@/APIs/carts";
// import { plusAction } from "@/helpers/cartHelper";
import Accordion from "@/components/Accordion/Accordion";
import Button from "@/components/Button/Button";
import GeneralProductInfo from "@/components/GeneralProductInfo/GeneralProductInfo";
import PineBeautyFavs from "@/components/Favs/Favs";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import {
  Container,
  Gallery,
  ProductInfo,
  ProductDescription,
  ProductName,
  ProductSection,
  RelatedProductsSection,
  ReviewsSection,
  ProductImage,
  GalleryAndDescription,
  ProductContents,
  ContentsContainer,
  SecondaryContainer,
  NoProductMessage,
} from "./ProductStyled";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

const desc = " Phasellus fermentum ligula lacinia purus ultricies tempor.";
const nameAddition = " | 100% organic and cold pressed";
const contentsMl = "50ml"; // add to product
const relatedProductsTitle = "Related products";
const nonExistentProductMessage = "Product not found.";

function Product() {
  const product = useLoaderData() as ProductI | null;
  const { productAdd } = useContext(CartContext);

  if (!product) {
    return <NoProductMessage>{nonExistentProductMessage}</NoProductMessage>;
  }

  const handleAdd = () =>
    productAdd({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  // async () => {
  //   if (user) {
  //     await addProductToCart(user?.uid, {
  //       id: product.id,
  //       name: product.name,
  //       price: product.price,
  //       image: product.image,
  //       //createdAt: product.createdAt,
  //       //updatedAt: product.updatedAt,
  //     });
  //   } else {
  //     plusAction({
  //       id: product.id,
  //       name: product.name,
  //       price: product.price,
  //       image: product.image,
  //       //quantity: 1, //redundant
  //     });
  //   }
  // };

  //temporary image
  const imageURL =
    import.meta.env.MODE === "production"
      ? import.meta.env.VITE_R2_PROD_BUCKET_URL + "/oilBottleCustomFormat.jpg"
      : import.meta.env.VITE_R2_DEV_BUCKET_URL + "/oilBottleCustomFormat.jpg";

  const images = [imageURL, imageURL, imageURL, imageURL, imageURL];

  return (
    <Container>
      <SecondaryContainer>
        <Breadcrumbs />
        <ProductSection>
          <GalleryAndDescription>
            <Gallery>
              {images.map((imgURL) => (
                <ProductImage src={imgURL} alt="" />
              ))}
            </Gallery>
            <Accordion
              colorTheme="dark"
              data={[
                { heading: "bla1", childComponent: <div>dhsshdhs</div> },
                { heading: "bla2", childComponent: <div>dhsshdhs</div> },
              ]}
            />
          </GalleryAndDescription>
          {/* <ProductInfoContainer> */}
          <ProductInfo>
            <ProductName>{product.name + nameAddition}</ProductName>
            <ContentsContainer>
              <ProductContents>contents | {contentsMl}</ProductContents>
              <Button text={contentsMl} />
            </ContentsContainer>
            <Button
              styleVariant="primary"
              text="add to cart"
              handleClick={() => handleAdd()}
            />
            <GeneralProductInfo />
            <ProductDescription>{desc}</ProductDescription>
          </ProductInfo>
          {/* </ProductInfoContainer> */}
        </ProductSection>
      </SecondaryContainer>
      <ReviewsSection></ReviewsSection>
      <RelatedProductsSection>
        <PineBeautyFavs heading={relatedProductsTitle} />
      </RelatedProductsSection>
    </Container>
  );
}

export default Product;
