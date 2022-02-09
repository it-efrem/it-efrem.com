import Head from "next/head";
import React from "react";

import { App } from "src/components/App/App";
import { StyleFonts } from "src/styles/StyleFonts";
import { StyleGlobalReset } from "src/styles/StyleGlobalReset";

export default function IndexPage() {
  return (
    <React.StrictMode>
      <Head>
        <title>Eugene Efremov - Senior Full Stack Developer</title>
      </Head>

      <StyleGlobalReset />
      <StyleFonts />
      <App />
    </React.StrictMode>
  );
}
