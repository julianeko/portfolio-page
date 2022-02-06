import React from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
function Start() {
  const navigate = useNavigate();

  return (
    <div className="distance">
      <Header />
      <div className="center">
        <div className="gridContainer">
          <div className="cv" onClick={() => navigate("/cv/")}>
            <div>
              <Circleleft />
            </div>
            <p>Training</p>
          </div>
          <div className="hello">
            <TextStyle>
              Hallo, meine Name ist Juliane und ich habe vor circa einem Jahr
              mein Interesse an Webentwicklung entdeckt.
              <h4>Kurse</h4>
              Begonnen zu lernen habe ich mit{" "}
              <a href="https://www.freecodecamp.org/">Freecodecamp.org</a>. Das
              Erstellen der ersten Seiten mit HTML und CSS hat mir dann so viel
              Spaß gemacht, dass ich unbedingt weiter lernen wollte – am
              liebsten jedoch in einer Gruppe. Da mir der Unterrichtsplan u.a.
              wegen der Anwendung von React so gut gefiel und dieser Kurs neben
              meiner Vollzeitstelle zeitlich realisierbar war, habe ich mich bei
              der <a href="https://www.codingschule.de"> Codingschule </a> für
              den{" "}
              <a href="https://www.codingschule.de/fullstack/">
                Fullstack-Kurs
              </a>{" "}
              angemeldet. Dieser hat im Oktober 2021 begonnen und wird am 5.
              März 2022 enden. Projekte beider Kurse sind im{" "}
              <a href="/portfolio/">Portfolio-Bereich</a> zu finden.
              <h4>Eigenes Projekt</h4>
              Zusätzlich habe ich noch eine eigene App erstellt. Auch dieses ist
              im <a href="/portfolio/">Portfolio-Bereich</a> zu finden.
              Abgeschlossen ist mein eigenes Projekt noch nicht; ich arbeite
              fortlaufend daran.
              <h4>Nächste Schritte</h4>
              Da mir die Webentwicklung unglaublich viel Freude bereitet, möchte
              ich beruflich in dieses Feld einsteigen. Natürlich muss ich noch
              unglaublich viel lernen, deshalb bin ich auf der Suche nach einer
              passenden Einsteigerstelle. Gerne komme ich vorab auch zu einem
              Probearbeiten.
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
    </div>
  );
}

export default Start;
const TextStyle = styled.p`
  font-size: 14px;
`;
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
