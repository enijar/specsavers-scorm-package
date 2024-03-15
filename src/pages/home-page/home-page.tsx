import React from "react";
import * as Style from "@/pages/home-page/home-page.styles.ts";
import Heading from "@/components/heading/heading.tsx";

export default function HomePage() {
  return (
    <Style.HomePageWrapper>
      <Heading variant="h1">Home Page</Heading>
    </Style.HomePageWrapper>
  );
}
