import React from "react";

export const useAvatar = () => {
  const [src, setSrc] = React.useState("");

  React.useEffect(() => {
    fetch("https://api.github.com/users/it-efrem")
      .then((res) => res.json())
      .then((data) => {
        setSrc(data.avatar_url);
      })
      .catch(() => {
        setSrc("https://avatars.githubusercontent.com/u/20017668");
      });
  }, []);

  return { src };
};
