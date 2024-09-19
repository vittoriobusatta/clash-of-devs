"use client";
import React from "react";
import { Cursor as InitCursor } from "../vector";
import styled from "styled-components";

export default function CommentCursor({ name, color }) {
  return (
    <Container>
      <Cursor color={`var(--color-${color}-dark)`} />
      <Comment color={color}>
        <p>{name}</p>
      </Comment>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;

const Comment = styled.div`
  padding: 6px 12px;
  background-color: ${(p) => `var(--color-${p.color}-mid)`};
  border: 2px solid ${(p) => `var(--color-${p.color}-dark)`};
  color: var(--color-white);
  border-radius: 2px 40px 40px 40px;
  font-size: 12px;
  font-weight: 20px;
`;

const Cursor = styled(InitCursor)`
  position: absolute;
  top: -90%;
  left: 0%;
  transform: translate(-90%, 100%);
`;
