import React from "react";

import {
  StyledMark,
  StyledMarkDescription,
} from "src/components/Mark/Mark.styled";
import { StyledList } from "src/components/List/List.styled";

import { StyledLink } from "src/components/OpenSource/OpenSource.styles";

export function Projects() {
  return (
    <StyledList>
      <li>
        <StyledLink href="https://carocean.com/">
          <StyledMark>🚘</StyledMark>
          <span>CarOcean</span>
        </StyledLink>
        <StyledMarkDescription>
          <li>Online car retailer</li>
          <li>
            <b>MVP</b>
          </li>
          <li>
            <b>Platforms</b>: Web
          </li>
        </StyledMarkDescription>
      </li>
      <li>
        <StyledLink
          href="https://www.sberbank.com/eco/sbermarket"
          target="_blank"
          rel="
noreferrer"
        >
          <StyledMark>🛒</StyledMark>
          <span>SberMarket</span>
        </StyledLink>
        <StyledMarkDescription>
          <li>Food delivery service</li>
          <li>
            <b>MAU</b>: 1 million
          </li>
          <li>
            <b>Platforms</b>: Mobile, TV
          </li>
        </StyledMarkDescription>
      </li>
      <li>
        <StyledLink
          href="https://moskva.mts.ru/business/avtomatizaciya/upravlenie_mnogokvartirnym_domom_vdome"
          target="_blank"
          rel="
noreferrer"
        >
          <StyledMark>🏠</StyledMark>
          <span>VDome</span>
        </StyledLink>
        <StyledMarkDescription>
          <li>Apartment building management</li>
          <li>
            <b>MVP</b>
          </li>
          <li>
            <b>Platforms</b>: Web, Mobile
          </li>
        </StyledMarkDescription>
      </li>
    </StyledList>
  );
}
