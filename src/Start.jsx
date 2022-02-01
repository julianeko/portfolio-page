import React from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
function Start() {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="gridContainer">
        <div className="cv" onClick={() => navigate("/cv/")}>
          <div>
            <Circleleft />
          </div>
          <p>Training</p>
        </div>
        <div className="hello">
          <TextStyle>
            Hallo, meine Name ist Juliane und ich habe vor circa einem Jahr mein
            Interesse an Webentwicklung entdeckt. Begonnen zu lernen habe ich
            mit
            <a href="https://www.freecodecamp.org/"> Freecodecamp.org</a>. Das
            Erstellen der ersten Seiten mit HTML und CSS hat mir dann so viel
            Spass gemacht, dass ich unbedingt weiter lernen wollte - am liebsten
            jedoch in einer Gruppe. Da mir der Unterrichtsplan insbesondere
            wegen der Anwendung von React so gut gefiel und dieser Kurs neben
            meiner Vollzeitstelle zeitlich passte, habe ich mich bei der{" "}
            <a href="https://www.codingschule.de/fullstack/"> Codingschule </a>{" "}
            für den Fullstack-Kurs angemeldet. Dieser hat im Oktober 2021
            begonnen und wird am 5. März 2022 enden. Projekte beider Kurse sind
            im Portfolio-Bereich zu finden. Zusätzlich habe ich noch ein eigenes
            Projekt erstellt. Auch dieses ist im Portfolio-Bereich zu finden.
            Abgeschlossen ist mein eigenes Projekt noch nicht; ich arbeite
            fortlaufend daran. Da mir die Webentwicklung unglaublich viel Freude
            bereitet, möchte ich versuchen, beruflich in dieses Feld
            einzusteigen. Natürlich muss ich noch unglaublich viel lernen,
            deshalb bin ich auf der Suche nach einer passenden Einsteigerstelle,
            beispielsweise einer Trainee-Stelle. Gerne komme ich auch zu einem
            Probearbeiten oder einem Praktikum vorab.
          </TextStyle>
        </div>
        <div className="portfolio" onClick={() => navigate("/portfolio/")}>
          <div>
            <Circleright />
          </div>
          <p>Portfolio</p>
        </div>
      </div>
    </div>
  );
}

export default Start;
const TextStyle = styled.p``;
const Circleleft = styled(BsArrowLeftCircleFill)`
  font-size: 30px;
  &:hover {
    color: #80433b;
    cursor: pointer;
  }
  &:active {
    color: #80433b;
    cursor: pointer;
  }
`;
const Circleright = styled(BsArrowRightCircleFill)`
  font-size: 30px;
  &:hover {
    color: #80433b;
    cursor: pointer;
  }
  &:active {
    color: #80433b;
    cursor: pointer;
  }
`;
