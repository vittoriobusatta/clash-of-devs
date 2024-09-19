"use client";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { throttle } from "lodash";

function ProgressBar({ setPercentage }) {
  const [scroll, setScroll] = useState(0);

  const handleScroll = useCallback(
    throttle(() => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPosition = window.scrollY;
      const scrollPercent = Math.round((scrollPosition / totalHeight) * 100);

      // Vérifier si le pourcentage de scroll a changé pour éviter un re-rendu inutile
      if (scrollPercent !== scroll) {
        setScroll(scrollPercent);
        setPercentage(scrollPercent);
      }
    }, 200),
    [scroll, setPercentage]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <Container>
      <Bar
        style={{
          width: `${scroll}%`,
        }}
      />
    </Container>
  );
}

export default ProgressBar;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  z-index: 91;
`;

const Bar = styled.div`
  height: 100%;
  background-color: var(--foreground);
  transition: width 0.2s ease;
`;
