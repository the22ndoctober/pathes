import React from 'react'
import Container from '@mui/material/Container'
import PathesContainer from './pathesContainer/PathesContainer'
import Grid from '@mui/material/Grid'

const Pathes = () => {
  return (
    
    <Container maxWidth="lg">
        <Grid container spacing={0} direction={'row'}>
            <Grid item lg={6}>
                <PathesContainer/>
            </Grid>
            <Grid item lg={6}>
                
            </Grid>
        </Grid>
    </Container>
  )
}

export default Pathes