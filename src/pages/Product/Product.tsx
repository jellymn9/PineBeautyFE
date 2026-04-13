import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { useCartContext } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";
import { ProductI } from "@/utils/types/productTypes";
import Accordion from "@/components/UI/Accordion/Accordion";
import Button from "@/components/UI/Button/Button";
import GeneralProductInfo from "@/components/GeneralProductInfo/GeneralProductInfo";
import PineBeautyFavs from "@/components/Favs/Favs";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import {
  Container,
  ProductInfo,
  ProductDescription,
  ProductName,
  ProductSection,
  RelatedProductsSection,
  ReviewsSection,
  GalleryAndDescription,
  ProductContents,
  ContentsContainer,
  SecondaryContainer,
  NoProductMessage,
  AccordionWrapper,
} from "./ProductStyled";
import { useRef } from "react";
import Gallery from "@/components/UI/Gallery/Gallery";
import { mapCartErrorSafe } from "@/errors/cartErrors/cartErrorMapper";

const DESC = " Phasellus fermentum ligula lacinia purus ultricies tempor.";
const NAME_ADDITION = " | 100% organic and cold pressed";
const CONTENT_ML = "50ml"; // add to product
const RELATED_PRODUCTS_TITLE = "Related products";
const NON_EXISTENT_PRODUCT_MESSAGE = "Product not found.";

function Product() {
  const product = useLoaderData() as ProductI | null;
  const { addProduct } = useCartContext();
  const { showToast } = useToast();
  const basePageRef = useRef<HTMLDivElement>(null);

  if (!product) {
    return <NoProductMessage>{NON_EXISTENT_PRODUCT_MESSAGE}</NoProductMessage>;
  }

  const handleAdd = async () => {
    try {
      await addProduct({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      });
      showToast("Product added to cart!", "success");
    } catch (e) {
      showToast(mapCartErrorSafe(e, "add"), "error");
    }
  };

  return (
    <Container>
      <Helmet>
        <title>{product.name} | PineBeauty</title>
        <meta
          name="description"
          content={`Learn more about ${product.name}, a product from PineBeauty.`}
        />
      </Helmet>
      <SecondaryContainer ref={basePageRef} tabIndex={-1}>
        <Breadcrumbs dynamicLabel={product.name} />
        <ProductSection>
          <GalleryAndDescription>
            <Gallery imagesNames={product.images} />
            <AccordionWrapper $isShownMobile={false}>
              <Accordion
                colorTheme="dark"
                data={[
                  { heading: "bla1", childComponent: <div>dhsshdhs</div> },
                  { heading: "bla2", childComponent: <div>dhsshdhs</div> },
                ]}
              />
            </AccordionWrapper>
          </GalleryAndDescription>
          <ProductInfo>
            <ProductName>{product.name + NAME_ADDITION}</ProductName>
            <ContentsContainer>
              <ProductContents>contents | {CONTENT_ML}</ProductContents>
              <Button text={CONTENT_ML} />
            </ContentsContainer>
            <Button
              styleVariant="primary"
              text="add to cart"
              handleClick={() => handleAdd()}
            />
            <GeneralProductInfo />
            <ProductDescription>{DESC}</ProductDescription>
            <AccordionWrapper $isShownMobile={true}>
              <Accordion
                colorTheme="dark"
                data={[
                  { heading: "bla1", childComponent: <div>dhsshdhs</div> },
                  { heading: "bla2", childComponent: <div>dhsshdhs</div> },
                ]}
              />
            </AccordionWrapper>
          </ProductInfo>
          {/* </ProductInfoContainer> */}
        </ProductSection>
      </SecondaryContainer>
      <ReviewsSection></ReviewsSection>
      <RelatedProductsSection>
        <PineBeautyFavs heading={RELATED_PRODUCTS_TITLE} />
      </RelatedProductsSection>
    </Container>
  );
}

export default Product;
