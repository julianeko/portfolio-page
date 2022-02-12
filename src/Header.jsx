import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Box>
      <HeaderStyle>
        Julianes
        <br className="br" /> Portfolio-Seite
      </HeaderStyle>
      <HeaderStyle2>Danke, dass Du meine Seite besuchst</HeaderStyle2>
    </Box>
  );
}

export default Header;
const HeaderStyle = styled.h1`
  text-align: center;
  margin: 0;
  padding-top: 10px;
  /* margin: 20px; */
`;
const HeaderStyle2 = styled.h3`
  text-align: center;
`;
const Box = styled.header`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* margin: 20px; */
  /* margin-top: 15px; */
  height: 130px;
  /* position: sticky;
  top: 0px; */
  background-color: #e7e8d1;
  max-width: 750px;
  margin: 0 auto;
`;
