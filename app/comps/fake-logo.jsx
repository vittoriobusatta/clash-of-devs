"use client";
import React from "react";
import styled from "styled-components";
import { rotateLogoAnimation } from "../utils/anims";

export function FakeLogo() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return <LogoContent onClick={scrollToTop}>La Piscine</LogoContent>;
}

const LogoContent = styled.button`
  border-radius: 80px;
  transform: rotate(8deg);
  text-transform: uppercase;
  animation: ${rotateLogoAnimation} 5s infinite ease-in-out;
  width: fit-content;
  background-color: var(--foreground);
  font-size: 12px;
  font-weight: 20px;
  color: var(--background);
  padding: 7px 12px;
  cursor: pointer;
`;
