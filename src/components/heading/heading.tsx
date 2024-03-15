import React from "react";
import * as Style from "@/components/heading/heading.style.ts";

export type Props = {
  variant: "h1" | "h2" | "h3";
  children?: React.ReactNode;
};

export default function Heading(props: Props) {
  const Element = React.useMemo(() => {
    return props.variant;
  }, [props.variant]);

  return (
    <Style.HeadingWrapper $variant={props.variant}>
      <Element>{props.children}</Element>
    </Style.HeadingWrapper>
  );
}
