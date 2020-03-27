import React from 'react';
import styled from 'styled-components'
import colors from '../../Themes/colors';
import Button from '../../components/Button';

const Home = () => (
  <Wrapper>
    <div>
      <Title>Cambialo</Title>
    </div>
    <PepeButon>
      Cambiar
    </PepeButon>
  </Wrapper>
);

const PepeButon = styled(Button)`
  background-color: red;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${colors.violet};
`;

const Title = styled.h1`
  font-size: 3rem;
  color: ${colors.baseWhite};
`;

export default Home;
