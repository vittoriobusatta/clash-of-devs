"use client";
import React from "react";
import styled from "styled-components";
import { Logo } from "../vector";

export default function Loader() {
  return (
    <Container>
      <Logo />
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
  background-size: 101%;
`;
