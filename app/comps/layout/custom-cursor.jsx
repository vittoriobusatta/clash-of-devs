"use client";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

function Cursor() {
  const cursorBig = useRef(null);
  const cursorSmall = useRef(null);

  const animateCursorBig = (x, y) => {
    return gsap.to(cursorBig.current, {
      duration: 0.4,
      x: x - 18,
      y: y - 18,
    });
  };

  const animateCursorSmall = (x, y) => {
    return gsap.to(cursorSmall.current, {
      duration: 0.1,
      x: x - 4,
      y: y - 4,
    });
  };

  const onMouseMove = (e) => {
    const { clientX: x, clientY: y } = e;
    animateCursorBig(x, y);
    animateCursorSmall(x, y);
  };

  const onMouseHover = () => {
    gsap.to(cursorBig.current, {
      duration: 0.3,
      scale: 1.8,
    });
  };

  const onMouseHoverOut = () => {
    gsap.to(cursorBig.current, {
      duration: 0.3,
      scale: 1,
    });
  };

  useEffect(() => {
    const cursorBigRef = cursorBig.current;
    const cursorSmallRef = cursorSmall.current;

    if (!cursorBigRef || !cursorSmallRef) return;

    const links = document.querySelectorAll(".link");
    const buttons = document.querySelectorAll("button");
    const labels = document.querySelectorAll("label");
    const showimgs = document.querySelectorAll(".showcase__images");
    const withHover = [...links, ...buttons, ...showimgs, ...labels];

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseHover);
    document.addEventListener("mouseup", onMouseHoverOut);

    document.addEventListener("mouseenter", () => {
      cursorBigRef.style.opacity = 1;
      cursorSmallRef.style.opacity = 1;
    });

    document.addEventListener("mouseleave", () => {
      cursorBigRef.style.opacity = 0;
      cursorSmallRef.style.opacity = 0;
    });

    withHover.forEach((element) => {
      element.addEventListener("mouseover", onMouseHover);
      element.addEventListener("mouseout", onMouseHoverOut);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseHover);
      document.removeEventListener("mouseup", onMouseHoverOut);
      withHover.forEach((element) => {
        element.removeEventListener("mouseover", onMouseHover);
        element.removeEventListener("mouseout", onMouseHoverOut);
      });
    };
  }, []);

  return (
    <Container className="custom-cursor">
      <div
        id="cursor-big"
        ref={cursorBig}
        className="custom-cursor__ball custom-cursor__ball--big"
      ></div>
      <div
        id="cursor-small"
        ref={cursorSmall}
        className="custom-cursor__ball custom-cursor__ball--small"
      ></div>
    </Container>
  );
}

export default Cursor;

const Container = styled.div`
  @media (pointer: coarse) {
    display: none;
  }
  .custom-cursor__ball {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.5s ease;
  }

  .custom-cursor__ball--big {
    content: "";
    width: 35px;
    height: 35px;
    background-color: var(--foreground);
    border-radius: 50%;
  }

  .custom-cursor__ball--small {
    content: "";
    width: 6px;
    background: var(--background);
    height: 6px;
    border-radius: 50%;
  }
`;
