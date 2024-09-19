"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { FakeLogo } from "../fake-logo";
import ProgressBar from "../progress-bar";
import Toogle from "../toogle";

export default function Header() {
  const [percentage, setPercentage] = useState(0);

  return (
    <Head>
      <div className="flex-1">
        <FakeLogo />
      </div>
      <Percentage className="flex-1">{percentage}%</Percentage>
      <Toogle />
      <ProgressBar setPercentage={setPercentage} />
    </Head>
  );
}

const Head = styled.header`
  padding: 20px clamp(12px, 3vw, 32px);
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  @media (max-width: 400px) {
    padding: 40px clamp(12px, 3vw, 32px);
  }
`;

const Percentage = styled.p`
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;
