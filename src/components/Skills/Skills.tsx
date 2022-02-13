import React from "react";

import {
  StyledMark,
  StyledMarkDescription,
} from "src/components/Mark/Mark.styled";
import { StyledList } from "src/components/List/List.styled";
import { StyledSkillName } from "./Skills.styles";

const YearIcon: React.FC = () => {
  const year = new Date().getFullYear() - 2016;
  const iconMap: { [k: number]: string } = {
    5: "5️⃣",
    6: "6️⃣",
    7: "7️⃣",
    8: "8️⃣",
    9: "9️⃣",
    10: "🔟",
    11: "1️⃣1️⃣",
    12: "1️⃣2️⃣",
    13: "1️⃣3️⃣",
    14: "1️⃣4️⃣",
    15: "1️⃣5️⃣",
  };

  return <>{iconMap[year] ?? year}</>;
};

export function Skills() {
  return (
    <StyledList>
      <li>
        <StyledMark>
          <YearIcon />
        </StyledMark>
        <StyledSkillName>years of experience</StyledSkillName>
      </li>
      <li>
        <StyledMark>🧰</StyledMark>
        <StyledSkillName>System Architect</StyledSkillName>
        <StyledMarkDescription>
          <li>Technologies and Performance</li>
        </StyledMarkDescription>
      </li>
      <li>
        <StyledMark>⚛️</StyledMark>
        <StyledSkillName>Front-End</StyledSkillName>
        <StyledMarkDescription>
          <li>
            React.JS <br />
            Graphics (WebGL, Canvas) <br />
            Testing (Jest, Cypress) <br />
            Webpack, etc.
          </li>
        </StyledMarkDescription>
      </li>
      <li>
        <StyledMark>🔨</StyledMark>
        <StyledSkillName>Backend</StyledSkillName>
        <StyledMarkDescription>
          <li>
            Node.JS / Nest.JS <br />
            Microservices
            <br />
            Databases (MongoDB, PostgreSQL) <br />
            Testing, etc.
          </li>
        </StyledMarkDescription>
      </li>
      <li>
        <StyledMark>⚙</StyledMark>
        <StyledSkillName>DevOps</StyledSkillName>
        <StyledMarkDescription>
          <li>AWS, CI / CD</li>
        </StyledMarkDescription>
      </li>
      <li>
        <StyledMark>💬</StyledMark>
        <StyledSkillName>English: B1, Intermediate</StyledSkillName>
      </li>
    </StyledList>
  );
}
