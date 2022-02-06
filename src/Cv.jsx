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
            <StyleH2>Freecodecamp.org</StyleH2>

            <div className="test">
              <h3>Sprachen</h3>
              <div>CSS</div>
              <div>HTML</div>
              <div>JavaScript Grundlagen</div>
            </div>
          </div>
        </div>

        <div className="schule">
          <div className="border">
            <StyleH2>Codingschule</StyleH2>
            <div className="test">
              <h3>Sprachen</h3>
              <div>CSS</div>
              <div>HTML</div>
              <div>JavaScript Vertiefung</div>
              <div>Python Grundlagen</div>
              <h3>Bibliotheken und Frameworks</h3>
              <div>React (nur mit Function Components)</div>
              <div>Express.js Grundlagen</div>
              <div>Django Grundlagen</div>
              <div>Styled Components</div>
              <div>Tailwind Grundlagen</div>

              <h3>Tools</h3>
              <div>Visual Studio Code</div>
              <div>Git und GitHub Grundlagen</div>
            </div>
          </div>
        </div>
        <div className="self">
          <div className="border">
            <StyleH2>Eigenes Projekt</StyleH2>
            <div className="test">
              <h3>Sprachen</h3>
              <div>CSS</div>
              <div>HTML</div>
              <div>JavaScript</div>
              <h3>Bibliotheken und Frameworks</h3>
              <div>React (nur mit Function Components)</div>
              <h3>Tools</h3>
              <div>Visual Studio Code</div>
              <div>Git und GitHub Grundlagen</div>
            </div>
          </div>
        </div>
      </DirectStyle>
    </div>
  );
}

export default Cv;
const StyleH1 = styled.h1`
  color: #b85042;
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
