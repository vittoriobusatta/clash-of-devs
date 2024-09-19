"use client";
import React from "react";
import styled from "styled-components";
import { rotateLogoAnimation } from "../utils/anims";

export function FakeLogo() {
  return <LogoContent>La Piscine</LogoContent>;
}

const LogoContent = styled.div`
  background-color: var(--foreground);
  color: var(--background);
  padding: 7px 12px;
  border-radius: 80px;
  transform: rotate(8deg);
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 20px;
  animation: ${rotateLogoAnimation} 5s infinite ease-in-out;
  width: fit-content;
`;
