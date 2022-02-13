import React from "react";

import { StyledContacts, StyledEmail, StyledLink } from "./Contacts.styled";

const EmailWithoutSpam = () => {
  const nonSpamStrPart1 = "i";
  const nonSpamStrPart2 = "@";
  const nonSpamStrPart3 = "i,t,-,e,f,r,e,m,.,c,o,m";
  const nonSpamStr = [nonSpamStrPart1, nonSpamStrPart2, nonSpamStrPart3].join(
    ","
  );

  return (
    <>
      {nonSpamStr.split(",").map((letter, idx) => (
        <div key={idx}>{letter}</div>
      ))}
    </>
  );
};

export function Contacts() {
  return (
    <>
      <StyledContacts>
        <li>
          <StyledLink
            data-cursor-reaction="true"
            href="https://github.com/it-efrem"
            target="_blank"
          >
            GitHub
          </StyledLink>
        </li>
        <li>
          <StyledLink
            data-cursor-reaction="true"
            href="https://www.linkedin.com/in/it-efrem/"
            target="_blank"
          >
            LinkedIn
          </StyledLink>
        </li>
        <li>
          <StyledLink
            data-cursor-reaction="true"
            href="https://t.me/it_efrem"
            target="_blank"
          >
            Telegram
          </StyledLink>
        </li>
      </StyledContacts>
      <StyledEmail>
        <EmailWithoutSpam />
      </StyledEmail>
    </>
  );
}
