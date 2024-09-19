"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import CommentCursor from "./comment-cursor";

export default function Sections() {
  return (
    <Container>
      <List>
        {sections.map((section, i) => {
          const {
            category,
            points,
            title,
            cursors,
            description,
            imageUrl,
            color,
            icon,
          } = section;
          return (
            <Section color={color} key={i}>
              <Head>
                <Subtitles>
                  <Points>
                    <p>{category}</p>
                    <p>{points}</p>
                  </Points>
                  <h3>{title}</h3>
                </Subtitles>
                <Cursors>
                  {cursors.map((cursor, i) => {
                    return (
                      <CommentCursor key={i} color={color} name={cursor} />
                    );
                  })}
                </Cursors>
              </Head>
              <Body>
                <ImageContainer color={color}>
                  <Image src={imageUrl} alt="image " fill />
                </ImageContainer>
                <Description>
                  <p>{description[0]}</p>
                  <p>{description[1]}</p>
                </Description>
              </Body>
              <Icon src={icon} alt="icon" height={310} width={310} />
            </Section>
          );
        })}
      </List>
    </Container>
  );
}

const Container = styled.section`
  padding: 100px clamp(12px, 3vw, 32px) 0;
  width: 100%;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Section = styled.li`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  padding: 0 40px 40px;
  width: 100%;
  background-color: ${(p) => `var(--color-${p.color}-light)`};
  border-radius: 60px;
  overflow: hidden;
  @media (max-width: 800px) {
    padding: 0 40px 90px;
  }
`;

const Head = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 40px 0 40px 47px;
  @media (max-width: 800px) {
    padding: 40px 0;
  }
`;

const Body = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

const Subtitles = styled.div`
  display: inline-flex;
  gap: 7vw;
  & h3 {
    line-height: 20px;
    font-size: clamp(12px, 1vw, 16px);
    text-transform: uppercase;
    color: var(--color-black);
  }
`;

const Points = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  & p {
    line-height: 20px;
    font-size: clamp(12px, 1vw, 16px);
    color: var(--color-black);
    &:first-child {
      text-transform: uppercase;
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  max-height: 800px;
  height: 50vw;
  border-radius: 40px;
  overflow: hidden;
  background-color: ${(p) => `var(--color-${p.color}-mid)`};
  & img {
    object-fit: cover;
    object-position: center;
  }
  @media (min-width: 800px) {
    flex: 4;
  }
`;

const Description = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 32px;
  & p {
    line-height: 20px;
    font-size: clamp(12px, 0.8vw, 14px);
    color: var(--color-black);
  }
  @media (min-width: 800px) {
    padding-left: 20px;
  }
`;

const Cursors = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  @media (max-width: 800px) {
    position: absolute;
    right: 0%;
    top: 30%;
    transform: translate(-30%, -50%);
    z-index: 2;
    flex-direction: column;
    gap: 30px;
  }
`;

const Icon = styled(Image)`
  height: max(20vw, 130px);
  width: max(20vw, 130px);
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(18%, 18%);
`;

const sections = [
  {
    category: "Design",
    title: "L'Artiste de renom",
    points: "/6 pts",
    description: [
      "Le design, c’est son terrain de jeu. Il maîtrise et retranscrit correctement chaque pixel de la maquette.",
      "Virtuose des couleurs il ne se trompe jamais de code HEX, de spacing ou de border-radius ; Figma n’a aucun secret pour ce Dev de talent.",
    ],
    cursors: ["@maislina_"],
    color: "purple",
    icon: "/stickers/stk_design.svg",
    imageUrl: "/images/img_design.jpg",
  },
  {
    category: "Code",
    title: "Le bâtisseur de code",
    points: "/6 pts",
    description: [
      "Ses lignes de code sont des fondations solides. C’est un maître du front, capable de structurer les systèmes les plus complexes sans se casser la tête.",
      "Maitre de VSCode, il a surement fini le challenge en s’assurant d’avoir le code le plus clair et le plus propre des 36 participants.",
    ],
    cursors: ["@Chris"],
    color: "pink",
    imageUrl: "/images/img_code.jpg",
    icon: "/stickers/stk_code.svg",
  },
  {
    category: "Motion",
    title: "Le maître de la fluidité",
    points: "/3 pts",
    description: [
      "Aucun composant ne s’affiche sans une animation soignée. Ses transitions sont légères, dynamiques et fluides, captivant l'utilisateur à chaque interaction.",
      "Ce dev a l’oeil et maitrise le motion mieux que n’importe qui.",
    ],
    cursors: ["@Lina", "@Chris"],
    color: "green",
    imageUrl: "/images/img_motion.jpg",
    icon: "/stickers/stk_motion.svg",
  },
  {
    category: "Responsive",
    title: "Le chercheur de breakpoint",
    points: "/2 pts",
    description: [
      "Quelle que soit la taille de l’écran, il garantit une expérience utilisateur sans faille. Chaque site s’adapte à tous les supports, du mobile au grand écran.",
      "Il fait attention à chaque breakpoint attentivement, on ne pourra pas le reprendre à l’inspection!",
    ],
    cursors: ["@lina", "@chris"],
    color: "blue",
    imageUrl: "/images/img_responsive.jpg",
    icon: "/stickers/stk_responsive.svg",
  },
  {
    category: "Easter Egg",
    title: "Le maître des secrets",
    points: "/3 pts",
    description: [
      "Derrière une ligne de code bien choisie se cache un secret bien gardé. Il glisse la surprise qui surprendra les utilisateurs les plus curieux.",
      "Dev attentif aux comportements utilisateurs il saura cacher l’Easter Egg au meilleur endroit.",
    ],
    cursors: ["@Lina", "@Chris"],
    color: "mustard",
    imageUrl: "/images/img_easter_egg.jpg",
    icon: "/stickers/stk_easter_egg.svg",
  },
  {
    category: "Big Boss",
    title: "Le sur-boosted",
    points: "/Infinite pts",
    description: [
      "Il excelle dans tous les domaines, alliant design, propreté de code, réactivité, animations fluides et créativité cachée. Un vrai prodige qui a su briller dans chaque aspect du développement.",
      "Ce dev aux multitalents a reçu la standing ovation du jury.",
    ],
    cursors: ["@Lina", "@Chris"],
    color: "orange",
    imageUrl: "/images/img_big_boss.jpg",
    icon: "/stickers/stk_big_boss.svg",
  },
];
