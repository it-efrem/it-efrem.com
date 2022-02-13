import styled from "styled-components";

export const StyledMark = styled.div`
  min-width: 1.5em;
  display: inline-block;
  text-align: center;
  margin: 0px;
  font-weight: 500;
`;

export const StyledMarkDescription = styled.ul`
  list-style: none;
  margin: 5px 0 0 32px;
  padding: 0;

  > li {
    color: #57606a;
    font-size: 0.9em;
  }

  li + li {
    margin-top: 0;
  }
`;
