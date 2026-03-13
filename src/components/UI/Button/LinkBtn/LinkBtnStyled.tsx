import styled from "styled-components";
import { Link } from "react-router-dom";

import { buttonBase, buttonVariants } from "@/styles/mixins";

export const LinkStyled = styled(Link)`
  ${buttonBase}
  ${buttonVariants.primary}
`;
