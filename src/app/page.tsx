"use client";

import Carta from "./contenido/card";
import Tablita from "./contenido/tablita";
// import Bio from "./contenido/bio";
import Works from "./contenido/works";
import "./styles.css";

import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled, { createGlobalStyle } from 'styled-components';

import Image from "next/image";


const GlobalStyle = createGlobalStyle`
  body, html {
    height: 100%;
    margin: 0;
    cursor: none; /* Oculta el cursor predeterminado */
  }
`;

const CursorEffect = styled(animated.div)`
  position: fixed;
  width: 100px; /* Ajusta el tamaño según sea necesario */
  height: 100px; /* Ajusta el tamaño según sea necesario */
  background: radial-gradient(#FDFDFD,  #FFFF00, #1A1A1A);
  border-radius: 50%;
  pointer-events: none;
  mix-blend-mode:  multiply;
  z-index: 9999; /* Asegúrate de que sea muy alto */
`;

export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const props = useSpring({
    left: cursorPosition.x,
    top: cursorPosition.y,
    config: { mass: 1, tension: 210, friction: 20 }
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPosition({ x: e.clientX - 50, y: e.clientY - 50 }); // Ajusta la posición para centrar el cursor
  };

  return (
    <>
      <GlobalStyle />
      <div onMouseMove={handleMouseMove} style={{ height: '100vh', width: '100vw' }}>
        <CursorEffect style={props} />

        <div className="bienvenida">
          <div className="bienvenida1">
            <h1 className="nombre">Arnol Segovia</h1>
            <h2 className="descripcion -mt-12 sm:mr-12">/Designer/Frontend/ Developer</h2>
            <h2 className="descripcion1 mb-8">Based in Germany</h2>
          </div>
        </div>
        <div>
    <Image src="/images/atlante.png"  className="fixed flex -translate-y-96 atlante"      width={500}
      height={500}
      alt="logo"
      ></Image>
  </div>

        <div className="mt-24 p-12">
          <Carta />
        </div>

        {/* <Bio/> */}
        <div className="trabajos">
          <Works />
        </div>

        <div className="p-1 lg:m-16 justify-center">
          <Tablita />
        </div>
      </div>
    </>
  );
}
