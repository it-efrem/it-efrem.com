import React from "react";
import { useAvatar } from "./Avatar.hook";

import { StyledAvatarImg, StyledAvatarWrapper } from "./Avatar.styled";

export const Avatar = () => {
  const { src } = useAvatar();

  return (
    <StyledAvatarWrapper>
      <StyledAvatarImg src={src} />
    </StyledAvatarWrapper>
  );
};
