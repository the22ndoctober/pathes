import React from 'react'
import Map from './map/Map'
import PathInfo from './pathInfo/PathInfo'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

const Info = () => {
  return (
    
      <Grid container spacing={0} direction={'column'} paddingLeft={4}>
        <PathInfo/>
        <Map/>
        <Button variant="text" color="primary">
          Add to Favourites
        </Button>
        <Button variant="text" color="primary">
          Remove
        </Button>
      </Grid>
    
  )
}

export default Info