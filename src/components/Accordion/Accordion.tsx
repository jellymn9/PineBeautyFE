import { useState } from "react";
import {
  Container,
  Heading,
  MainContainer,
  HSeparator,
  HeadingInnerContiner,
  ChevronRightAnim,
} from "./AccordionStyled";

interface AccordionDataI {
  heading: string;
  childComponent: JSX.Element;
}

interface AccordionPropsI {
  data: Array<AccordionDataI>;
}

const Accordion = function ({ data }: AccordionPropsI) {
  const [isOpenId, setIsOpen] = useState("");

  const handleOpen = (id: string) => {
    if (isOpenId === id) {
      setIsOpen("");
    } else {
      setIsOpen(id);
    }
  };

  return (
    <MainContainer>
      <HSeparator />
      {data.map((singleItem) => (
        <>
          <Container
            $isOpen={singleItem.heading === isOpenId}
            key={singleItem.heading}
          >
            <Heading onClick={() => handleOpen(singleItem.heading)}>
              <HeadingInnerContiner>
                {singleItem.heading}
                <ChevronRightAnim
                  strokeWidth={1}
                  $isOpen={singleItem.heading === isOpenId}
                />
              </HeadingInnerContiner>
            </Heading>
            {singleItem.childComponent}
          </Container>
          <HSeparator />
        </>
      ))}
    </MainContainer>
  );
};

export default Accordion;
