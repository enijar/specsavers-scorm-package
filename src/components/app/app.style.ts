import { createGlobalStyle } from "styled-components";
import { MOBILE_QUERY } from "@/config/consts.ts";

export const vars = {
  color: {
    main: "#439557",
    white: "#ffffff",
    aloeLight: "#DCEAD9",
    aloeDark: "#245052",
    racing: "#2D6A45",
    meadow: "#8CC064",
    lime: "#CAD96F",
    black: "#212121",
    grey: "#8A8894",
    greyLight: "#C9C8D3",
    disabled: "#C5C0DB",
  },
  fontSize: {
    h1: {
      desktop: "74px",
      mobile: "24px",
    },
    h2: {
      desktop: "52px",
      mobile: "20px",
    },
    h3: {
      desktop: "38px",
      mobile: "18px",
    },
    bodyLarge: {
      desktop: "24px",
      mobile: "16px",
    },
    bodyMedium: {
      desktop: "16px",
      mobile: "14px",
    },
    bodySmall: {
      desktop: "14px",
      mobile: "14px",
    },
  },
};

export const AppReset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
  }

  html,
  body,
  #root,
  main {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  html {
    font-size: ${vars.fontSize.bodyLarge.desktop};
    font-family: system-ui, sans-serif;
    font-weight: normal;
    line-height: normal;
    text-rendering: geometricPrecision;
    background-color: ${vars.color.white};
    color: ${vars.color.black};

    @media (width <= ${MOBILE_QUERY}) {
      font-size: ${vars.fontSize.bodyLarge.mobile};
    }
  }

  main {
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
`;
