import styled from "styled-components";
import { vars } from "@/components/app/app.style.ts";
import { type Props } from "@/components/heading/heading.tsx";
import { MOBILE_QUERY } from "@/config/consts.ts";

type WrapperProps = {
  $variant: Props["variant"];
};

export const HeadingWrapper = styled.div<WrapperProps>`
  font-size: ${(props) => vars.fontSize[props.$variant].desktop};

  @media (width <= ${MOBILE_QUERY}) {
    font-size: ${(props) => vars.fontSize[props.$variant].mobile};
  }
`;
