import React from 'react'
import Container from '@mui/material/Container'
import { Header } from './components/header/Header';
import Pathes from './components/pathes/Pathes';

function App() {
  return (
    <>
      
      <Container maxWidth="lg" style={{color: 'grey'}}>
        <Header/>
        <hr />
        <Pathes/>
      </Container>
    </>
  );
}

export default App;
