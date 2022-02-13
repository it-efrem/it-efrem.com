import Head from "next/head";
import React from "react";

import { App } from "src/components/App/App";
import { StyleGlobalReset } from "src/styles/StyleGlobalReset";

export default function IndexPage() {
  return (
    <React.StrictMode>
      <Head>
        <title>Eugene Efremov - Senior Full Stack Developer</title>
      </Head>

      <StyleGlobalReset />
      <App />
    </React.StrictMode>
  );
}
