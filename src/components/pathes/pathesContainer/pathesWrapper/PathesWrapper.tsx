import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import PathItem from '../pathItem/PathItem'

const PathesWrapper = () => {
  return (
    <Box>
        <Grid container spacing={0} rowGap={1} direction={'column'} sx={{overflowY: 'scroll'}}>
          <PathItem/>
          <PathItem/>
          <PathItem/>
        </Grid>
    </Box>
  )
}

export default PathesWrapper