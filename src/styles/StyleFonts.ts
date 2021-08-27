import {createGlobalStyle} from 'styled-components';

export const StyleFonts = createGlobalStyle`
    @font-face {
      font-family: "Inter-Black";
      src: url("../files/fonts/Inter-Black.ttf") format("truetype");
    }
    
    @font-face {
      font-family: "Inter-Bold";
      src: url("../files/fonts/Inter-Bold.ttf") format("truetype");
    }
    
    @font-face {
      font-family: "Inter-Regular";
      src: url("../files/fonts/Inter-Regular.ttf") format("truetype");
    }
`;
