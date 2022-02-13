import styled from "styled-components";

export const StyledContacts = styled.div`
  margin: 10px 0 5px;
  font-size: 0.9em;
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    list-style-type: none;

    + li {
      margin-left: 1em;
    }
  }
`;

export const StyledLink = styled.a`
  color: #0078d7;
  text-decoration: none;
  border-bottom: 1px solid #b19eef;
`;

export const StyledEmail = styled.a`
  display: flex;
  justify-content: center;
  flex-direction: row;
  color: #626262;
  font-size: 0.9em;
`;
