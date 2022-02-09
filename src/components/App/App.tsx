import React from "react";

import { Avatar } from "src/components/Avatar/Avatar";
import { Contacts } from "src/components/Contacts/Contacts";
import { OpenSource } from "src/components/OpenSource/OpenSource";
import { Projects } from "src/components/Projects/Projects";
import { Skills } from "src/components/Skills/Skills";

import { StyledAppWrapper, StyledGeneralInfo } from "./App.styles";
import {
  StyledInfoBlock,
  StyledInfoBlockTitle,
  StyledInfoBlocksWrapper,
} from "src/components/InfoBlock/InfoBlock.styles";
import { StyledMark } from "src/components/Mark/Mark.styled";
import { StyledSubTitle } from "src/components/SubTitle/SubTitle.styles";
import { StyledTitle } from "src/components/Title/Title.styles";

export const App: React.FC = () => (
  <StyledAppWrapper>
    <Avatar />

    <StyledGeneralInfo>
      <StyledTitle>Eugene Efremov</StyledTitle>

      <StyledSubTitle>
        <span>JavaScript Full-Stack</span>
        <StyledMark>🔥</StyledMark>
        <span>Senior Developer</span>
      </StyledSubTitle>

      <Contacts />
    </StyledGeneralInfo>

    <StyledInfoBlocksWrapper>
      <StyledInfoBlock>
        <StyledInfoBlockTitle>Skills</StyledInfoBlockTitle>
        <Skills />
      </StyledInfoBlock>

      <StyledInfoBlock>
        <StyledInfoBlockTitle>Projects</StyledInfoBlockTitle>
        <Projects />
      </StyledInfoBlock>

      <StyledInfoBlock>
        <StyledInfoBlockTitle>Open Source</StyledInfoBlockTitle>
        <OpenSource />
      </StyledInfoBlock>
    </StyledInfoBlocksWrapper>
  </StyledAppWrapper>
);
