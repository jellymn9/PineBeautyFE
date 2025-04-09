import { useLoaderData } from "react-router-dom";

import { useAppSelector } from "../../withTypes";
import { selectItemById } from "../../state/selectors/cartSelector";
import { GetProductAxiosResT } from "../../utils/types";
import { formatPrice } from "../../helpers/formatters";
import Counter from "../../components/Counter/Counter";
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
  //ProductInfoContainer,
} from "./ProductStyled";
import Accordion from "../../components/Accordion/Accordion";
import Button from "../../components/Button/Button";
import GeneralProductInfo from "../../components/GeneralProductInfo/GeneralProductInfo";

const desc =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla eleifend nunc ut pharetra molestie. Ut ut luctus augue. Quisque dolor metus, cursus sed dapibus ac, tristique sed nisi. Nam placerat tortor at malesuada laoreet. Ut volutpat, turpis et commodo tempus, nulla augue ullamcorper diam, ac mattis dui risus vel felis. Sed pellentesque efficitur sem, fringilla vulputate nunc tristique sed. Nam orci lorem, molestie vel libero at, dapibus ullamcorper lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer nec odio eu dolor consequat viverra eu id lacus. Integer in mollis lacus. Fusce tincidunt mollis turpis nec lacinia. Duis lectus arcu, fringilla at fermentum eu, feugiat ut purus. Aenean tristique lobortis massa. Ut ultrices tellus ac erat fermentum suscipit. Mauris efficitur aliquet turpis, vel feugiat eros viverra tincidunt. Integer viverra ac nulla non accumsan. Donec ac laoreet nisi. Ut vestibulum at lectus eget semper. Suspendisse lacinia mi vel orci varius condimentum. Sed justo sapien, convallis non pretium vel, consectetur vel arcu. Nunc auctor porttitor nibh sed convallis. Phasellus aliquet nunc quis mauris posuere, egestas euismod mauris dapibus. Phasellus fermentum ligula lacinia purus ultricies tempor.";
const nameAddition = " | 100% organic and cold pressed";
const contentsMl = "50ml"; // add to product

function Product() {
  const productRes = useLoaderData() as GetProductAxiosResT;

  const product = productRes.data.product;
  const productId = product.id; //change later
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
          <Button text="add to cart" />
          <GeneralProductInfo />
          <ProductDescription>{desc}</ProductDescription>
        </ProductInfo>
        {/* </ProductInfoContainer> */}
      </ProductSection>
      <ReviewsSection></ReviewsSection>
      <RelatedProductsSection></RelatedProductsSection>
    </Container>
  );
}

export default Product;
