import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Box>
      <HeaderStyle>Test Header</HeaderStyle>
      <HeaderStyle2>Danke, dass Du meine Seite besuchst.</HeaderStyle2>
    </Box>
  );
}

export default Header;
const HeaderStyle = styled.h1`
  text-align: center;
  /* margin: 20px; */
  `;
  const HeaderStyle2 =styled.p`
    text-align: center;
  `
const Box = styled.header`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* margin: 20px; */
  margin-top: 15px;
`;
