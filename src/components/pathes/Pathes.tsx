
import PathesContainer from './pathesContainer/PathesContainer'
import Grid from '@mui/material/Grid'
import Info from './info/Info'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectPathes } from '../../redux/reducers/pathes'

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