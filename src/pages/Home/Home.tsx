import Button from "../../components/Button/Button";
import { FlagHeading, Hero, MainHeading } from "./HomeStyled";

function Home() {
  console.log("test");
  return (
    <div>
      <Hero>
        <FlagHeading>low waste skincare</FlagHeading>
        <MainHeading>Clean beauty with a story</MainHeading>
        <Button text="shop" />
      </Hero>
      <p>This is Home page</p>
    </div>
  );
}

export default Home;
