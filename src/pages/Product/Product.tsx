import { useLoaderData } from "react-router-dom";

import { useAppSelector } from "../../withTypes";
import { selectItemById } from "../../state/selectors/cartSelector";
import { GetProductAxiosResT } from "../../utils/types";
//import { formatPrice } from "../../helpers/formatters";
//import Counter from "../../components/Counter/Counter";
import Accordion from "../../components/Accordion/Accordion";
import Button from "../../components/Button/Button";
import GeneralProductInfo from "../../components/GeneralProductInfo/GeneralProductInfo";
//import HomeSection from "../../components/HomeSection/HomeSection";
import PineBeautyFavs from "../../components/Favs/Favs";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import {
  Container,
  Gallery,
  ProductInfo,
  //CounterAndAddBtnWrapper,
  //Price,
  //ProductData,
  ProductDescription,
  // ProductImage,
  ProductName,
  ProductSection,
  RelatedProductsSection,
  ReviewsSection,
  ProductImage,
  GalleryAndDescription,
  ProductContents,
  ContentsContainer,
  SecondaryContainer,
  //ProductInfoContainer,
} from "./ProductStyled";
import { useDispatch } from "react-redux";
import { add } from "../../state/reducers/cartReducer";

const desc = " Phasellus fermentum ligula lacinia purus ultricies tempor.";
const nameAddition = " | 100% organic and cold pressed";
const contentsMl = "50ml"; // add to product
const relatedProductsTitle = "Related products";

function Product() {
  const productRes = useLoaderData() as GetProductAxiosResT;

  const dispatch = useDispatch();

  const handleAdd = (productId: string) => {
    dispatch(add({ id: productId, quantity: 1 })); // change quantity later
  };

  const product = productRes.data.product;
  const productId = product.id; //change later
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const itemInCart = useAppSelector((state) =>
    selectItemById(state, productId)
  );

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
              handleClick={() => handleAdd(productId)}
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
