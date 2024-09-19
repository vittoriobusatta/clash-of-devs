"use client";
import Image from "next/image";
import React, { useRef } from "react";
import styled from "styled-components";
import CommentCursor from "../comment-cursor";
import Final from "./final";
import { sections } from "../../data/sections-array";
import { motion, useInView } from "framer-motion";
import {
  descriptionVariants,
  imageVariants,
  infiniteRotate,
  textVariants,
} from "../../utils/anims";

export default function Sections() {
  const containerRef = useRef(null);

  return (
    <Container ref={containerRef}>
      <List>
        {sections.map((section, i) => {
          const {
            category,
            points,
            title,
            cursors,
            description,
            imageUrl,
            color,
            icon,
          } = section;

          const sectionRef = useRef(null);
          const isInView = useInView(sectionRef, {
            once: true,
            margin: "0px 0px -50px 0px",
          });

          return (
            <Section ref={sectionRef} color={color} key={i}>
              <motion.div
                style={{
                  backgroundColor: `var(--color-${color}-light)`,
                }}
                key={i}
                animate={isInView ? "visible" : "hidden"}
              >
                <Head>
                  <Subtitles>
                    <Points>
                      <div className="hidden">
                        <motion.p custom={0} variants={textVariants}>
                          {category}
                        </motion.p>
                      </div>
                      <div className="hidden">
                        <motion.p custom={0.6} variants={textVariants}>
                          {points}
                        </motion.p>
                      </div>
                    </Points>
                    <div className="hidden">
                      <motion.h3 custom={1} variants={textVariants}>
                        {title}
                      </motion.h3>
                    </div>
                  </Subtitles>
                  <Cursors>
                    {cursors.map((cursor, i) => {
                      return (
                        <CommentCursor key={i} color={color} name={cursor} />
                      );
                    })}
                  </Cursors>
                </Head>
                <Body>
                  <ImageContainer color={color}>
                    <motion.img src={imageUrl} variants={imageVariants} />
                  </ImageContainer>
                  <Description>
                    <motion.p custom={1} variants={descriptionVariants}>
                      {description[0]}
                    </motion.p>
                    <motion.p custom={2} variants={descriptionVariants}>
                      {description[1]}
                    </motion.p>
                  </Description>
                </Body>
                <Icon src={icon} alt="icon" height={310} width={310} />
              </motion.div>
            </Section>
          );
        })}
        <Final />
      </List>
    </Container>
  );
}

const Container = styled.section`
  padding: 100px clamp(12px, 3vw, 32px) 0;
  width: 100%;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: stretch;
`;

const Section = styled.li`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  padding: 0 40px 40px;
  width: 100%;
  background-color: ${(p) => `var(--color-${p.color}-light)`};
  border-radius: 60px;
  overflow: hidden;
  @media (max-width: 800px) {
    padding: 0 40px 90px;
  }
`;

const Head = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 40px 0 40px 47px;
  @media (max-width: 800px) {
    padding: 40px 0;
  }
`;

const Body = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
  @media (min-width: 800px) {
    flex-direction: row;
  }
  & .image-container {
    position: relative;
    max-height: 800px;
    height: 50vw;
    border-radius: 40px;
    border-radius: clamp(11px, 4vw, 40px);
    overflow: hidden;
    background-color: ${(p) => `var(--color-${p.color}-mid)`};
    & img {
      object-fit: cover;
      object-position: center;
      height: 100%;
      width: 100%;
    }
    @media (min-width: 800px) {
      flex: 4;
    }
  }
`;

const Subtitles = styled.div`
  display: inline-flex;
  gap: 7vw;
  & h3 {
    line-height: 20px;
    font-size: clamp(12px, 1vw, 16px);
    text-transform: uppercase;
    color: var(--color-black);
  }
`;

const Points = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  & p {
    line-height: 20px;
    font-size: clamp(12px, 1vw, 16px);
    color: var(--color-black);
    &:first-child {
      text-transform: uppercase;
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  max-height: 800px;
  height: 50vw;
  border-radius: 40px;
  border-radius: clamp(11px, 4vw, 40px);
  overflow: hidden;
  background-color: ${(p) => `var(--color-${p.color}-mid)`};
  & img {
    object-fit: cover;
    object-position: center;
    height: 100%;
    width: 100%;
  }
  @media (min-width: 800px) {
    flex: 4;
  }
`;

const Description = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 32px;
  & p {
    line-height: 20px;
    font-size: clamp(12px, 0.8vw, 14px);
    color: var(--color-black);
  }
  @media (min-width: 800px) {
    padding-left: 20px;
  }
`;

const Cursors = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  @media (max-width: 800px) {
    position: absolute;
    right: 0%;
    top: 30%;
    transform: translate(-30%, -50%);
    z-index: 2;
    flex-direction: column;
    gap: 30px;
  }
`;

const Icon = styled(Image)`
  height: max(20vw, 130px);
  width: max(20vw, 130px);
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(18%, 18%);
  animation: ${infiniteRotate} 4s ease-in infinite;
`;
