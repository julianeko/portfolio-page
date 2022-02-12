import React from "react";
import styled from "styled-components";
import { MdHome } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import bdayappcrop from "./bdayappcrop.png";
import portfoliocrop from "./portfoliocrop.png";
import talkidoocrop from "./talkidoocrop.png";
import todoappcrop from "./todoappcrop.png";

function Portfolio() {
  const navigate = useNavigate();

  return (
    <div>
      <HeaderStyle>
        <StyleH1>Portfolio</StyleH1>
        <HomeStyle onClick={() => navigate("/")} />
      </HeaderStyle>
      <CenterStyle>
        <h3>
          Eigenes Projekt: <br />
          Geburtstags-App
        </h3>
        <CampStyle>
          <CStyle3>
            <a href="https://jsbdayreminder.netlify.app/">
              {" "}
              <img
                src={bdayappcrop}
                alt="Screenshot of the Birthday Reminder App"
                width="auto"
                height="150px"
              />
            </a>

            <TextStyle>
              <a href="https://jsbdayreminder.netlify.app/">App</a> |{" "}
              <a href="https://github.com/julianeko/bdayapp">Code</a>
            </TextStyle>
          </CStyle3>
        </CampStyle>
      </CenterStyle>
      <CenterStyle>
        <h3>
          Beispielprojekte der{" "}
          <a href="https://www.codingschule.de">Codingschule</a>
        </h3>
        <SchoolStyle>
          <CStyle2>
            <img
              src={talkidoocrop}
              alt="Screenshot of the Messanger-App"
              width="auto"
              height="150px"
            />
            <TextStyle>
              <a href="https://github.com/julianeko/TalkiDoo/tree/julianesbranch">
                Frontend Code
              </a>
              <br />
              <a href="https://github.com/julianeko/codingschule_backend_exercise">
                Backend Code
              </a>
            </TextStyle>
          </CStyle2>
          <CStyle3>
            <a href="https://flamboyant-haibt-1b2c76.netlify.app/">
              <img
                src={todoappcrop}
                alt="Screenshot of the To-Do-App"
                width="auto"
                height="150px"
              />
            </a>
            <TextStyle>
              <a href="https://flamboyant-haibt-1b2c76.netlify.app/">App</a> |{" "}
              <a href="https://github.com/julianeko/apptopublish">Code</a>
            </TextStyle>
          </CStyle3>
        </SchoolStyle>
      </CenterStyle>
      <CenterStyle>
        <h3>
          Beispielprojekte{" "}
          <a href="https://www.freecodecamp.org">freeCodeCamp.org</a>
        </h3>
        <CampStyle>
          <CStyle2>
            <a href="https://julianeko.github.io/myfreecodecamptry/portfoliopage/portfoliopage.html">
              <img
                src={portfoliocrop}
                alt="Screenshot of the freecodecamp Portfoliopage exercise"
                width="auto"
                height="150px"
              />
            </a>
            <TextStyle>
              <a href="https://julianeko.github.io/myfreecodecamptry/portfoliopage/portfoliopage.html">
                Homepage
              </a>{" "}
              |{" "}
              <a href="https://github.com/julianeko/myfreecodecamptry">Code</a>
            </TextStyle>
          </CStyle2>
        </CampStyle>
      </CenterStyle>
    </div>
  );
}

export default Portfolio;
const TextStyle = styled.p`
  font-size: 15px;
  margin-top: 17px;
`;
const CenterStyle = styled.div`
  text-align: center;
`;

const CStyle2 = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 213px;
  margin: 5px;
`;
const CStyle3 = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 213px;
  margin: 5px;
`;

const CampStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const StyleH1 = styled.h1`
  color: #b85042;
`;

const SchoolStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media only screen and (max-width: 756px) {
    flex-direction: column;
    align-items: center;
  }
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
