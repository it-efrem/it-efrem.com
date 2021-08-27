import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #000;
    user-select: none;
`;

export const StyledWrapper = styled.div`
    padding: 1em 2.5em;
    background: white;
    font-size: 24px;
    z-index: 10;
    position: relative;
    overflow: hidden;
    min-width: 17em;
    
    + div {
        margin-top: 1em;    
    }

    h1 {
        font-family: 'Inter-Bold', "Inter-Regular", sans-serif;
        font-size: 1.6em;
        font-weight: bold;
        margin-bottom: 1em;

        @media screen and (max-width: 550px) {
            font-size: 1.3em;
        }
    }
`;

export const StyledList = styled.div`
    margin: 1.7em 0;
    list-style: none;

    li {
        + li {
            margin-top: 0.8em;
        }

        @media screen and (max-width: 550px) {
            font-size: 0.8em;
        }
    }
`;

export const StyledMark = styled.div`
    min-width: 1.5em;
    display: inline-block;
    text-align: center;
    margin-right: 0.5em;
`;

export const StyledContacts = styled.div`
    margin-top: 2em;
    font-size: 0.7em;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    li {
        list-style-type: none;

        + li {
            margin-left: 1em;
        }
    }

    a {
        color: #0078d7;
        text-decoration: none;
        padding-bottom: 1px;
        border-bottom: 2.53px solid #b19eef;
    }

    @keyframes easterEggsMove {
        0% {
            transform: rotate(-20deg);
    }
        50% {
            transform: rotate(20deg);
    }
        0% {
            transform: rotate(-20deg);
    }
`;

export const StyledProjectLink = styled.a`
    color: #0078d7;
`;
