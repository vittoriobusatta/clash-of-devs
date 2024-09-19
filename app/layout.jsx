"use client";
import Header from "./comps/layout/header";
import Loader from "./comps/layout/loader";
import CustomCursor from "./comps/layout/custom-cursor";
import { inter } from "./fonts";
import "./globals.css";
import StyledComponentsRegistry from "./lib/styled-components-registry";
import SmoothScrolling from "./lib/smooth-scrolling";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${inter.className}`}>
        <StyledComponentsRegistry>
          {/* <Loader /> */}
          <Header />
          <CustomCursor />
          <SmoothScrolling>{children}</SmoothScrolling>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
