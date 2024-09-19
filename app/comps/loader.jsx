"use client";
import styled from "styled-components";
import { Logo } from "../vector";
import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";

export default function Loader() {
  let container = useRef(null);
  let overlay = useRef(null);

  useLayoutEffect(() => {
    const onLoad = () => {
      let tl = gsap.timeline({
        defaults: { duration: 0.3, opacity: 0, y: 50, ease: "power3.out" },
      });

      tl.fromTo(
        ".l-letter",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.1 }
      );
      tl.fromTo(
        ".l-special",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.1 }
      );
      tl.fromTo(
        ".l-icon",
        { opacity: 0, y: 50, scale: 0 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "expo.inOut",
          duration: 0.8,
        }
      );
      tl.fromTo(".l-phrase", { opacity: 0, y: 50 }, { opacity: 1, y: 0 });
      gsap.fromTo(
        overlay.current,
        {
          clipPath: "circle(0%)",
        },
        {
          duration: 1,
          ease: "Expo.easeInOut",
          clipPath: "circle(100%",
          opacity: 1,
          delay: 2.4,
        }
      );
      gsap.fromTo(
        container.current,
        { opacity: 1, y: 0 + "%", skewY: 0 + "deg" },
        {
          duration: 1,
          y: -110 + "%",
          skewY: 2.5 + "deg",
          delay: 3.4,
        }
      );
    };

    onLoad();
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
  background: url("/cover-background.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
