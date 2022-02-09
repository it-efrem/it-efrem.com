import styled from "styled-components";

import { mobileWidth } from "src/styles/variables";

export const StyledInfoBlocksWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 300px;
  grid-template-rows: auto;
  column-gap: 35px;
  row-gap: 35px;
  margin: 70px auto 0 auto;

  @media screen and (max-width: ${mobileWidth}px) {
    grid-template-columns: 100%;
  }
`;

export const StyledInfoBlock = styled.div`
  width: 100%;

  @media screen and (max-width: ${mobileWidth}px) {
    align-content: flex-start;
    box-sizing: border-box;
    padding: 0 1em;
  }
`;

export const StyledInfoBlockTitle = styled.div`
  margin: 0;
  font-weight: 600;
  font-size: 30px;
  line-height: 1.25;
  text-align: left;
`;
