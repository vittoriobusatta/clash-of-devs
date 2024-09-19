"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { CardHero } from "../../vector";
import { rotateLogoAnimationInverse } from "../../utils/anims";

export default function Hero() {
  return (
    <Container>
      <Heading>
        <div>
          <h1>Que le plus fort,</h1>
          <h1 className="mobile-text">l’emporte!</h1>
        </div>
        <Row>
          <Icon
            src="/vectors/hero-icon.svg"
            alt="icon"
            height={80}
            width={100}
          />
          <h1>l’emporte!</h1>
        </Row>
      </Heading>
      <Card className="hero-card" />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: 200px clamp(12px, 3vw, 32px) max(8vw, 100px);
  @media (max-width: 800px) {
    gap: 2vw;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 600px) {
    align-items: flex-start;
    flex-direction: row;
  }
  & h1 {
    font-size: clamp(32px, 7.4vw, 162px);
    @media (max-width: 600px) {
      font-size: min(14vw, 74px);
    }
    &.mobile-text {
      display: none;
      @media (max-width: 600px) {
        display: block;
      }
    }
  }
`;

const Row = styled.div`
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    align-items: flex-start;
    & h1 {
      display: none;
    }
  }
`;

const Icon = styled(Image)`
  height: max(8vw, 60px);
  width: max(9vw, 80px);
  margin: 0 2vw 0 1vw;
  animation: ${rotateLogoAnimationInverse} 5s infinite ease-in-out;
  @media (max-width: 400px) {
    height: max(8vw, 40px);
    width: max(9vw, 60px);
  }
`;

const Card = styled(CardHero)`
  height: auto;
  width: 40vw;
  @media (max-width: 600px) {
    width: 100%;
    max-width: 400px;
    height: auto;
  }
  & g.first-name {
    transition: opacity 0.3s ease;
    cursor: pointer;
    @media (hover: hover) {
      &:hover {
        opacity: 0;
      }
    }
  }
`;
