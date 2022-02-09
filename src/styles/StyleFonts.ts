import { createGlobalStyle } from "styled-components";

export const StyleFonts = createGlobalStyle`
  @font-face {
    font-family: "Inter-Black";
    src: url("../../public/fonts/Inter-Black.ttf") format("truetype");
  }

  @font-face {
    font-family: "Inter-Bold";
    src: url("../../public/fonts/Inter-Bold.ttf") format("truetype");
  }

  @font-face {
    font-family: "Inter-Regular";
    src: url("../../public/fonts/Inter-Regular.ttf") format("truetype");
  }
`;
