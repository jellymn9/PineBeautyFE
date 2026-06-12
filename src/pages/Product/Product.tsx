import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

import { useCartContext } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";
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
import { useProduct } from "@/queries/product/useProduct";
import { Loader } from "@/components/UI/Loader/Loader";
import { mapErrorToMessageSafe } from "@/errors/errorMapper";

const DESC = " Phasellus fermentum ligula lacinia purus ultricies tempor.";
const NAME_ADDITION = " | 100% organic and cold pressed";
const CONTENT_ML = "50ml"; // add to product
const RELATED_PRODUCTS_TITLE = "Related products";

function Product() {
  const { id } = useParams();

  const { addProduct } = useCartContext();
  const { showToast } = useToast();
  const basePageRef = useRef<HTMLDivElement>(null);
  const { data: product, isLoading, isError, error } = useProduct(id);

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <div>{mapErrorToMessageSafe(error)}</div>;
  }
  if (!product) {
    return <NoProductMessage>Product not found.</NoProductMessage>;
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
