import React from 'react';
import styled from 'styled-components'; 
import Mensagem from "./Component/Mensagem"


const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    
    <MainContainer>
      <Mensagem />
    </MainContainer>
  );
}

export default App;
