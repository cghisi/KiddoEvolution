import React from "react";
import Head from "next/head";

import Header from "./Header";

const Layout = ({children, navigation }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon_32.png" type="image/png" />
      <link rel='manifest' href='/manifest.json' />
      <title>
        KIDDO - Need some help on your translations, website, content
      </title>
      <meta
        name="description"
        content="Your consulting team that will help you with your website, translations..."
      />
    </Head>
    <Header navigation = { navigation } ></Header>
    <main>{ children }</main>
  </>
);

export default Layout;