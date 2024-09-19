"use client";
import Header from "./comps/header";
import Loader from "./comps/loader";
import { inter } from "./fonts/fonts";
import "./globals.css";
import StyledComponentsRegistry from "./lib/styled-components-registry";
import SmoothScrolling from "./lib/smooth-scrolling";

{
  /* <head>
            <title>{`Clash Of Dev | <A> Front les tous !</title>`}</title>
          </head> */
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <StyledComponentsRegistry>
          <Loader />
          <Header />
          <SmoothScrolling>{children}</SmoothScrolling>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
