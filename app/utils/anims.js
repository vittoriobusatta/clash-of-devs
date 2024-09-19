import { keyframes } from "styled-components";
import { gsap } from "gsap";

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

export const rotateLogoAnimationInverse = keyframes`
 0% {
    transform: rotate(5deg);
  }
  45% {
    transform: rotate(-5deg);
  }
  55% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(5deg);
  }
`;

export const runLoaderAnimation = (containerRef, overlayRef) => {
  let tl = gsap.timeline({
    defaults: { duration: 0.3, opacity: 0, y: 50, ease: "power3.out" },
  });

  tl.fromTo(
    ".l-letter",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 }
  );

  tl.fromTo(
    ".l-special",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, stagger: 0.1, duration: 0.6 }
  );

  tl.fromTo(
    ".l-icon",
    { opacity: 0, y: 50, scale: 0 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      ease: "expo.inOut",
      duration: 1.2,
    },
    "-=0.5"
  );

  tl.fromTo(
    ".l-phrase",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0 },
    "-=0.2"
  );

  gsap.fromTo(
    overlayRef.current,
    {
      clipPath: "circle(0%)",
    },
    {
      duration: 1,
      ease: "Expo.easeInOut",
      clipPath: "circle(100%)",
      opacity: 1,
      delay: 2.7,
    }
  );

  gsap.fromTo(
    containerRef.current,
    { opacity: 1, y: "0%", skewY: "0deg" },
    {
      y: "-110%",
      skewY: "2.5deg",
      delay: 3.5,
    }
  );
};
