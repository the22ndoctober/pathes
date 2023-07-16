import React from 'react'
import Container from '@mui/material/Container'
import PathesContainer from './pathesContainer/PathesContainer'
import Grid from '@mui/material/Grid'
import Info from './info/Info'

const Pathes = () => {
  return (
    
    
        <Grid container spacing={0} direction={'row'}>
            <Grid item xs={6}>
                <PathesContainer/>
            </Grid>
            <Grid item xs={6}>
                <Info/>
            </Grid>
        </Grid>
    
  )
}

export default Pathes