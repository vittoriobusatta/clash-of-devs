"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function Toogle() {
  const [isOn, setIsOn] = useState(false);

  console.log(isOn);

  useEffect(() => {
    if (isOn) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isOn]);

  return (
    <Container>
      <SwitchContainer>
        <SwitchLabel>
          <SwitchInput
            type="checkbox"
            checked={isOn}
            onChange={() => setIsOn(!isOn)}
          />
          <Slider isOn={isOn} />
        </SwitchLabel>
      </SwitchContainer>
    </Container>
  );
}

const Container = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const SwitchContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--foreground);
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: ${(props) => (props.isOn ? "32px" : "4px")};
    bottom: 4px;
    background-color: var(--background);
    transition: 0.4s;
    border-radius: 50%;
    background-image: ${(props) =>
      props.isOn
        ? "url('/logo-icon-dark.svg')"
        : "url('/logo-icon-light.svg')"};
    background-size: 70%;
    background-position: center;
    background-repeat: no-repeat;
  }
`;
