"use client";
import Header from "./comps/header";
import { inter } from "./fonts/fonts";
import "./globals.css";
import StyledComponentsRegistry from "./lib/styled-components-registry";

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
          {/* <Loader /> */}
          <Header />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
