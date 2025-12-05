import styled from "styled-components";
import colors from "@/styles/colors";

export const AuthFormsContainer = styled.div`
  width: 400px;
  margin: 15% 36vw;
  padding: 32px;
  border: 1px solid ${colors.timberwolf};
  border-radius: 20px;
`;

export const FormHeading = styled.h1`
  font-size: 36px;
  line-height: 46px;
`;

export const FormCustom = styled.form`
  display: flex;
  flex-direction: column;
  grid-gap: 30px;
`;

export const LabelCustom = styled.label`
  font-size: 18px;
  color: ${colors.gray};
`;

export const InputCustom = styled.input`
  //line-height: 40px;
  padding: 8px 12px;
  font-size: 18px;
  letter-spacing: 0.01em;
  padding-left: 12px;
  border: 1px solid ${colors.timberwolf};
  border-radius: 6px;
  font-family: Avenir;
  &:focus-visible {
    outline: ${colors.celticBlue} auto 2px;
  }
`;

export const LabelInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 12px;
`;

export const FieldError = styled.span`
  color: ${colors.imperialRed};
`;
