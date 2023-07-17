import React from 'react'
import Box from '@mui/material/Box'
import PathesSearch from './pathesSearch/PathesSearch'
import PathesWrapper from './pathesWrapper/PathesWrapper'
import Grid from '@mui/material/Grid'

const PathesContainer = ({handle}:any) => {
  return (
    <Box sx={{borderRight: '1px solid black', minHeight: '500px'}} paddingRight={4}>
      <Grid container spacing={0} direction={'column'} rowGap={2}>
        <PathesSearch/>
        <PathesWrapper setDirections={handle}/>
      </Grid>
    </Box>
  )
}

export default PathesContainer