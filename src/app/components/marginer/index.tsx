import React from "react";
import styled from "styled-components";

export interface IMarginerProps {
  width?: string;                         //? ni qoyish px bolsayam boladi bolmasayam boladi degani. Languages 2 xil boladi
  height?: string;                       // compaling languages ( Java, C#, C++) bularda 2 ta faza ishga tushadi 
  direction?: "horizontal" | "vertical";//1-faza compaling err 2- faza run err va interpriting languages(pyton, nodeJs, PHP)bularda esa faqat ru time fazasi bor
  bg?: string;                         //aynana TypeScrip faqat run fazada ishledigan tillarda TypeScript compailing err xususiyatini beradi yani run bolishdan oldin tagiga qizill bilan err haqida ogihlantiradi
}

const HorizontalMargin = styled.span<IMarginerProps>`
  display: flex;
  min-width: ${({ width }) => `${width}px`};
  min-height: ${({ height }) => `${height}px`};
  background: ${({ bg }) => `${bg}`};
`;

const VerticalMargin = styled.span<IMarginerProps>`
  display: flex;
  min-width: ${({ width }) => `${width}px`};
  min-height: ${({ height }) => `${height}px`};
  background: ${({ bg }) => `${bg}`};
`;

function Marginer(props: IMarginerProps) {
  const { direction } = props;
  if (direction === "horizontal") return <HorizontalMargin {...props} />;
  else {
    return <VerticalMargin {...props} />;
  }
}

Marginer.defaultProps = {
  direction: "horizontal",
};

export default Marginer;
