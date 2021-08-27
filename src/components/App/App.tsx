import React from "react";
import {StyledContacts, StyledContainer, StyledList, StyledMark, StyledProjectLink, StyledWrapper} from "./App.styles";

const YearIcon: React.FC = () => {
    const year = (new Date).getFullYear() - 2014;
    const iconMap: { [k: number]: string } = {
        7: '7️⃣',
        8: '8️⃣',
        9: '9️⃣',
    };

    return <>{iconMap[year] ?? year}</>;
}

export const App: React.FC = () => {
    return (
        <StyledContainer>
            <StyledWrapper>
                <h1>Eugene Efremov</h1>

                <StyledList>
                    <li>
                        <StyledMark>🔥</StyledMark>
                        <span>Senior Full Stack Developer</span>
                    </li>
                    <li>
                        <StyledMark>🔮</StyledMark>
                        <span>WebGL, Canvas</span>
                    </li>
                    <li>
                        <StyledMark>⚛️</StyledMark>
                        <span>ReactJS</span>
                    </li>
                    <li>
                        <StyledMark>🔨</StyledMark>
                        <span>NodeJS</span>
                    </li>
                    <li>
                        <StyledMark><YearIcon/></StyledMark>
                        <span>years of experience</span>
                    </li>
                </StyledList>

                <StyledContacts>
                    <li>
                        <a data-cursor-reaction="true"
                           href='https://t.me/it_efrem'
                           target='_blank'>Telegram</a>
                    </li>
                    <li>
                        <a data-cursor-reaction="true"
                           href='https://github.com/it-efrem'
                           target='_blank'>GitHub</a>
                    </li>
                </StyledContacts>
            </StyledWrapper>
            <StyledWrapper>
                <h1>Open Source</h1>

                <StyledList>
                    <li>
                        <StyledProjectLink href="https://universe-sandbox.it-efrem.com" target="_blank" rel="
noreferrer">
                            <StyledMark>🪐</StyledMark>
                            <span>Universe Sandbox 2D Web</span>
                        </StyledProjectLink>
                    </li>
                </StyledList>
            </StyledWrapper>
        </StyledContainer>
    )
};
