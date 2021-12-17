import React from "react";
import Document, { Head, Html, Main, NextScript } from "next/document";
import { extractCritical } from "emotion-server";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const styles = extractCritical(initialProps.html);
    return { ...initialProps, ...styles };
  }

  componentDidMount(){
    window.beam.setContext({
      application: {
          repo: "go1-seo/seo-prismic",
          name: "go1-seo-resources-hub",
          page: window.location.pathname
      },
    });
  }

  render() {
    return (
      <Html>
        <Head>
          <base href={ "/" }/>
          <style dangerouslySetInnerHTML={ { __html: this.props.css } }/>
          <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&amp;display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
