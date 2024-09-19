"use client";
import React from "react";
import styled from "styled-components";
import { FakeLogo } from "../fake-logo";

export default function Footer() {
  return (
    <Foot>
      <div className="flex-1">
        <FakeLogo />
      </div>
      <Percentage className="flex-1">100%</Percentage>
      <Text className="flex-1">@2024</Text>
    </Foot>
  );
}

const Foot = styled.footer`
  padding: 20px clamp(12px, 3vw, 32px);
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
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

const Text = styled.div`
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
