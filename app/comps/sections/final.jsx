"use client";
import Image from "next/image";
import React, { useRef } from "react";
import styled from "styled-components";
import MagneticButton from "../magnetic-button";
import { motion, useInView } from "framer-motion";
import { textVariants } from "../../utils/anims";

export default function Final() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: "0px 0px -50px 0px",
  });
  return (
    <Container ref={containerRef}>
      <motion.div
        className="final-content"
        animate={isInView ? "visible" : "hidden"}
      >
        <Text>
          <div className="hidden">
            <motion.p variants={textVariants}>/ FINALE02</motion.p>
          </div>
          <h1>
            Click&nbsp;&nbsp;Me&nbsp;&nbsp;?&nbsp;&nbsp;&nbsp;&nbsp;Might enter
            the finals
          </h1>
        </Text>
        <CallToAction>
          <MagneticButton>
            <Button>Enter Next Level</Button>
          </MagneticButton>
          <Image
            className="final-vector vector-1"
            src="/vectors/final-v1.svg"
            alt="svg"
            height={64}
            width={64}
          />
          <Image
            className="final-vector vector-2"
            src="/vectors/final-v2.svg"
            alt="svg"
            height={30}
            width={30}
          />
          <Image
            className="final-vector vector-3"
            src="/vectors/final-v3.svg"
            alt="svg"
            height={38}
            width={38}
          />
        </CallToAction>
      </motion.div>
    </Container>
  );
}

const Container = styled.li`
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 62vw;
  max-height: 964px;
  min-height: 580px;
  @media (max-width: 800px) {
    height: 91vw;
  }
  & .final-content {
    width: 100%;
    height: 100%;
    background-color: var(--foreground);
    color: var(--background);
    border-radius: 60px;
    padding: 0 max(4vw, 40px) max(6vw, 40px);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    @media (min-width: 800px) {
      gap: 12vw;
    }
    @media (max-width: 800px) {
      justify-content: center;
      padding: 40px max(4vw, 40px) 90px;
    }
  }
`;

const Content = styled.div``;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width: 800px) {
    flex: 1;
    justify-content: space-between;
  }
  & h1 {
    font-size: clamp(32px, 7.4vw, 162px);
    text-align: justify;
    line-height: 8.6vw;
    width: 100%;
    flex: 1;
    @media (max-width: 600px) {
      font-size: 7vw;
    }
  }
  & p {
    flex: 0.5;
    line-height: 20px;
    font-size: clamp(12px, 1vw, 16px);
    padding-bottom: 78px;
  }
`;

const Button = styled.button`
  position: relative;
  z-index: 3;
  background-color: var(--background);
  color: var(--foreground);
  padding: 22px 44px;
  border-radius: 60px;
  line-height: 20px;
  font-size: clamp(14px, 1vw, 16px);
  font-weight: 600;
  height: fit-content;
  cursor: pointer;
  border: none;
  @media (max-width: 800px) {
    padding: 18px 34px;
  }
`;

const CallToAction = styled.div`
  position: relative;
  & .final-vector {
    position: absolute;
    &.vector-1 {
      top: 0;
      right: 0%;
      transform: translate(50%, -50%);
    }
    &.vector-2 {
      top: 0;
      left: 0%;
      transform: translate(-30%, -50%);
      z-index: 4;
    }
    &.vector-3 {
      bottom: 0;
      right: 0%;
      transform: translate(-10%, 30%);
      z-index: 4;
    }
  }
`;
