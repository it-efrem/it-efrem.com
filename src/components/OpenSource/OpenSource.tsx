import React from "react";

import {
  StyledMark,
  StyledMarkDescription,
} from "src/components/Mark/Mark.styled";
import { StyledList } from "src/components/List/List.styled";

import { StyledLink } from "./OpenSource.styles";

export function OpenSource() {
  return (
    <StyledList>
      <li>
        <StyledLink
          href="https://universe-sandbox.it-efrem.com"
          target="_blank"
          rel="
noreferrer"
        >
          <StyledMark>🪐</StyledMark>
          <span>Universe Sandbox Web</span>
        </StyledLink>
        <StyledMarkDescription>
          <li>3D Interactive space sandbox gravity simulator</li>
        </StyledMarkDescription>
      </li>
      <li>
        <StyledLink
          href="https://github.com/sberdevices"
          target="_blank"
          rel="
noreferrer"
        >
          <StyledMark>📱</StyledMark>
          <span>SberDevices Tools</span>
        </StyledLink>
        <StyledMarkDescription>
          <li>Developers tools</li>
        </StyledMarkDescription>
      </li>
      <li>
        <StyledLink
          href="https://github.com/it-efrem/ticktick_productivity_chart_chrome_extension"
          target="_blank"
          rel="
noreferrer"
        >
          <StyledMark>📊</StyledMark>
          <span>TickTick Productivity Chart</span>
        </StyledLink>
        <StyledMarkDescription>
          <li>Google Chrome Extension</li>
        </StyledMarkDescription>
      </li>
    </StyledList>
  );
}
