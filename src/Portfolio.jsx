import React from "react";
import styled from "styled-components";
import { MdHome } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import bdayreminder from "./bdayreminder.png";
import portfoliopage from "./portfoliopage.png";
import survey from "./survey.png";

function Portfolio() {
  const navigate = useNavigate();

  return (
    <div>
      <HeaderStyle>
        <StyleH1>Portfolio</StyleH1>
        <HomeStyle onClick={() => navigate("/")} />
      </HeaderStyle>
      <CenterStyle>
        <h2>Eigenes Projekt - Geburtstags App</h2>
        <CampStyle>
          <CStyle3>
            <a href="https://jsbdayreminder.netlify.app/">
              {" "}
              <img
                src={bdayreminder}
                alt="Screenshot of the Birthday Reminder App"
                width="auto"
                height="150px"
              />
            </a>

            <p>
              Details sind in meinem{" "}
              <a href="https://github.com/julianeko/bdayapp">
                GitHub Repository{" "}
              </a>{" "}
              zu finden.
            </p>
          </CStyle3>
        </CampStyle>
      </CenterStyle>
      <CenterStyle>
        <h2>
          Beispielprojekte der Codingschule{" "}
          <a href="https://www.codingschule.de">Codingschule</a>
        </h2>
      </CenterStyle>
      <CenterStyle>
        <h2>
          Beispielprojekte{" "}
          <a href="https://www.freecodecamp.org">freecodecamp.org</a>
        </h2>
        <CampStyle>
          <CStyle1>
            <a href="https://julianeko.github.io/myfreecodecamptry/gardeningsurvey/Gardening_Survey.html">
              {" "}
              <img
                src={survey}
                alt="Screenshot of the freecodecamp survey exercise"
                width="auto"
                height="150px"
              />
            </a>
            <p>
              Details sind in meinem{" "}
              <a href="https://github.com/julianeko/myfreecodecamptry">
                GitHub Repository{" "}
              </a>{" "}
              zu finden.
            </p>
          </CStyle1>

          <CStyle2>
            <a href="https://julianeko.github.io/myfreecodecamptry/portfoliopage/portfoliopage.html">
              {" "}
              <img
                src={portfoliopage}
                alt="Screenshot of the freecodecamp Portfoliopage exercise"
                width="auto"
                height="150px"
              />
            </a>
            <p>
              Details sind in meinem{" "}
              <a href="https://github.com/julianeko/myfreecodecamptry">
                GitHub Repository{" "}
              </a>{" "}
              zu finden.
            </p>
          </CStyle2>
        </CampStyle>
      </CenterStyle>
    </div>
  );
}

export default Portfolio;
const CenterStyle = styled.div`
  text-align: center;
`;
const CStyle1 = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 167px;
  margin: 5px;
`;

const CStyle2 = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 293px;
  margin: 5px;
`;
const CStyle3 = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 167px;
  margin: 5px;
`;

const CampStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 756px) {
    flex-direction: column;
    align-items: center;
  }
`;
const StyleH1 = styled.h1`
  text-decoration: underline;
  color: #b85042;
`;
const HeaderStyle = styled.div`
  text-align: center;
`;
const HomeStyle = styled(MdHome)`
  position: absolute;
  right: 20px;
  top: 10px;
  font-size: 20px;
  color: #b85042;
  &:hover {
    color: #80433b;
  }
  &:active {
    color: #80433b;
  }
`;
