import styled from "styled-components";

import { mobileWidth } from "src/styles/variables";

export const StyledList = styled.div`
  margin: 16px 0;
  list-style: none;

  > li {
    + li {
      margin-top: 1em;
    }

    @media screen and (max-width: ${mobileWidth}px) {
      font-size: 16px;
    }
  }
`;
