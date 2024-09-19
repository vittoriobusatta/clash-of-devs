import { keyframes } from "styled-components";

export const rotateLogoAnimation = keyframes`
 0% {
    transform: rotate(8deg);
  }
  45% {
    transform: rotate(-8deg);
  }
  55% {
    transform: rotate(-8deg);
  }
  100% {
    transform: rotate(8deg);
  }
`;
