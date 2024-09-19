"use client";
import styled from "styled-components";
import { Logo } from "../../vector";
import React, { useLayoutEffect, useRef } from "react";
import { runLoaderAnimation } from "../../utils/anims";

export default function Loader() {
  let container = useRef(null);
  let overlay = useRef(null);

  useLayoutEffect(() => {
    runLoaderAnimation(container, overlay);
  }, []);

  return (
    <Container ref={container}>
      <Logo />
      <Overlay ref={overlay} />
    </Container>
  );
}

const Container = styled.section`
  position: fixed;
  inset: 0;
  background-color: var(--background);
  min-height: 100vh;
  overflow: hidden;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("/vectors/cover-background.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: clamp(12px, 3vw, 32px);
  & .l-letter,
  .l-special,
  .l-icon,
  .l-phrase {
    opacity: 0;
  }
`;

const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #dde0ff;
  z-index: 200;
  opacity: 0;
`;
