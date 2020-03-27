import React from 'react';
import Home from './pages/Home';
import styled from 'styled-components'

const App = () => (
  <Wrapper>
    <Home />
  </Wrapper>
);

const Wrapper= styled.div`
  margin: 0;
  padding: 0;
`;

export default App;
