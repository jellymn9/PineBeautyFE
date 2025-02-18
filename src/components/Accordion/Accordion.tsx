import { useState, Fragment } from "react";
import {
  Container,
  HeadingContainer,
  MainContainer,
  HSeparator,
  HeadingInnerContiner,
  ChevronRightAnim,
  ChildContainer,
  Heading,
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
        <Fragment key={singleItem.heading}>
          <Container $isOpen={singleItem.heading === isOpenId}>
            <HeadingContainer onClick={() => handleOpen(singleItem.heading)}>
              <HeadingInnerContiner>
                <Heading>{singleItem.heading}</Heading>
                <ChevronRightAnim
                  strokeWidth={1}
                  width={22}
                  height={22}
                  $isOpen={singleItem.heading === isOpenId}
                />
              </HeadingInnerContiner>
            </HeadingContainer>
            <ChildContainer>{singleItem.childComponent}</ChildContainer>
          </Container>
          <HSeparator />
        </Fragment>
      ))}
    </MainContainer>
  );
};

export default Accordion;
