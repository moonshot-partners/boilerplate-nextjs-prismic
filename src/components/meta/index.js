import Head from "next/head";
import React from "react";
import { getDynamicAssetsFilePath } from "../../utils/helpers/assets/assets-path";


export const Meta = ({ title, summary, image }) => (
  <Head>
    <base href={ "/" }/>
    <title>{ !!title ? title : "Resources hub" }</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta charSet="UTF-8"/>
    { !!summary && <meta name="description" content={ summary }/> }
    { !!summary && <meta name="og:description" content={ summary }/> }
    { !!title && <meta property="og:title" content={ title }/> }
    { !!image && <meta property="og:image" content="assets/favicon.ico"/> }
    <meta property="og:image:type" content="image/gif"/>
    <meta property="og:image:type" content="image/png"/>
    <meta property="og:image:type" content="image/jpeg"/>
    <meta property="og:image:width" content="1200"/>
    <meta property="og:image:height" content="750"/>
    <meta property="og:type" content="website"/>
    <meta name="twitter:site" content="@GO1com"/>
    <meta name="twitter:card" content="summary"/>
    { !!image && <meta name="twitter:image" content="assets/favicon.ico"/> }
    { !!title && <meta property="twitter:title" content={ title }/> }
    { !!summary && <meta property="twitter:description" content={ summary }/> }

    <meta property="twitter:url" content="https://www.go1.com/en-au/en-au"/>
    <meta name="robots" content="INDEX, FOLLOW"/>
    <meta name="fragment" content="!"/>
    <meta httpEquiv="cache-control" content="no-cache"/>
    <meta httpEquiv="pragma" content="no-cache"/>
    <meta httpEquiv="expires" content="31556952"/>
    <link rel="icon" type="image/png" href={ getDynamicAssetsFilePath("assets/favicon.ico") }/>
    <link rel="apple-touch-icon" href={ getDynamicAssetsFilePath("assets/favicon.ico") }/>
  </Head>
);
