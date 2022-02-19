import React from "react";
import styled from "styled-components";
import { MdHome } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Cv() {
  const navigate = useNavigate();

  return (
    <div>
      <HeaderStyle>
        <StyleH1>Training</StyleH1>
        <HomeStyle onClick={() => navigate("/")} />
      </HeaderStyle>
      <DirectStyle className="container">
        <div className="codecamp">
          <div className="border">
            <StyleH2>freeCodeCamp.org</StyleH2>

            <div className="test">
              <h3>Sprachen</h3>
              <TextStyle>CSS</TextStyle>
              <TextStyle>HTML</TextStyle>
              <TextStyle>
                JavaScript <SmallStyle>(Grundlagen)</SmallStyle>
              </TextStyle>
            </div>
          </div>
        </div>

        <div className="schule">
          <div className="border">
            <StyleH2>Codingschule</StyleH2>
            <div className="test">
              <h3>Sprachen</h3>
              <TextStyle>CSS</TextStyle>
              <TextStyle>HTML</TextStyle>
              <TextStyle>
                JavaScript <SmallStyle>(Vertiefung)</SmallStyle>
              </TextStyle>
              <TextStyle>
                Python <SmallStyle>(Grundlagen)</SmallStyle>
              </TextStyle>
              <h3>Bibliotheken und Frameworks</h3>
              <TextStyle>
                React <SmallStyle>(nur mit Function Components)</SmallStyle>
              </TextStyle>
              <TextStyle>
                Express.js <SmallStyle>(Grundlagen)</SmallStyle>
              </TextStyle>
              <TextStyle>
                Django <SmallStyle>(Grundlagen)</SmallStyle>
              </TextStyle>
              <TextStyle>Styled Components</TextStyle>
              <TextStyle>
                Tailwind <SmallStyle>(Grundlagen)</SmallStyle>
              </TextStyle>
              <TextStyle>
                Chart.js <SmallStyle>(Grundlagen)</SmallStyle>
              </TextStyle>

              <h3>Tools</h3>
              <TextStyle>Visual Studio Code</TextStyle>
              <TextStyle>
                Git und GitHub <SmallStyle>(Grundlagen)</SmallStyle>
              </TextStyle>
            </div>
          </div>
        </div>
        <div className="self">
          <div className="border">
            <StyleH2>Eigenes Projekt</StyleH2>
            <div className="test">
              <h3>Sprachen</h3>
              <TextStyle>CSS</TextStyle>
              <TextStyle>HTML</TextStyle>
              <TextStyle>JavaScript</TextStyle>
              <h3>Bibliotheken und Frameworks</h3>
              <TextStyle>
                React <SmallStyle>(nur mit Function Components)</SmallStyle>
              </TextStyle>
              <h3>Tools</h3>
              <TextStyle>Visual Studio Code</TextStyle>
              <TextStyle>
                Git und GitHub <SmallStyle>(Grundlagen)</SmallStyle>
              </TextStyle>
            </div>
          </div>
        </div>
      </DirectStyle>
    </div>
  );
}

export default Cv;
const SmallStyle = styled.span`
  font-size: 12px;
  margin: 0;
`;
const StyleH1 = styled.h1`
  color: #b85042;
`;
const TextStyle = styled.p`
  font-size: 15px;
  margin: 0;
`;

const StyleH2 = styled.h2`
  color: #b85042;
  margin-left: 20px;
  @media (max-width: 756px) {
    margin-left: 0;
  }
`;
const DirectStyle = styled.div``;

const HeaderStyle = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  height: 60px;
`;

const HomeStyle = styled(MdHome)`
  /* position: absolute;
  right: 300px;
  top: 30px; */
  margin-left: 20px;
  font-size: 30px;
  color: #b85042;
  &:hover {
    color: #80433b;
  }
  &:active {
    color: #80433b;
  }
`;
