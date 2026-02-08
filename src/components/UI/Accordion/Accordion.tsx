import { useState, Fragment } from "react";

import { ColorThemeT } from "@/utils/types";
import {
  Container,
  HeadingButton,
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
  colorTheme?: ColorThemeT;
}

const Accordion = function ({ data, colorTheme = "light" }: AccordionPropsI) {
  const [isOpenId, setIsOpen] = useState("");

  const handleOpen = (id: string) => {
    if (isOpenId === id) {
      setIsOpen("");
    } else {
      setIsOpen(id);
    }
  };

  return (
    <MainContainer $colorTheme={colorTheme}>
      <HSeparator $colorTheme={colorTheme} />
      {data.map((singleItem) => (
        <Fragment key={singleItem.heading}>
          <Container $isOpen={singleItem.heading === isOpenId}>
            <HeadingButton
              onClick={() => handleOpen(singleItem.heading)}
              aria-expanded={singleItem.heading === isOpenId}
              aria-controls={`panel-${singleItem.heading}`}
              id={`button-${singleItem.heading}`}
            >
              <HeadingInnerContiner>
                <Heading>{singleItem.heading}</Heading>
                <ChevronRightAnim
                  strokeWidth={1}
                  width={22}
                  height={22}
                  $isOpen={singleItem.heading === isOpenId}
                />
              </HeadingInnerContiner>
            </HeadingButton>
            <ChildContainer
              id={`panel-${singleItem.heading}`}
              role="region"
              aria-labelledby={`button-${singleItem.heading}`}
            >
              {singleItem.childComponent}
            </ChildContainer>
          </Container>
          <HSeparator $colorTheme={colorTheme} />
        </Fragment>
      ))}
    </MainContainer>
  );
};

export default Accordion;
