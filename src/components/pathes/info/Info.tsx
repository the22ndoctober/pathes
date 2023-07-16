import React from 'react'
import Map from './map/Map'
import PathInfo from './pathInfo/PathInfo'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { useDispatch, useSelector } from 'react-redux'
import { activePath, selectPath } from '../../../redux/reducers/pathes'
import OpenWithOutlinedIcon from '@mui/icons-material/OpenWithOutlined'
import Typography from '@mui/material/Typography'


const Info = () => {

  const selectedPath = useSelector(activePath)
  const dispatch = useDispatch()

  if(selectedPath !== 'none') return (
    
      <Grid container spacing={0} direction={'column'} paddingLeft={4} sx={{minHeight: '100%'}} justifyContent={'space-between'}>
        
        <PathInfo/>
        <Map/>
        <Grid item>
          <Button variant="text" color="primary">
            Add to Favourites
          </Button>
          <Button variant="text" color="primary">
            Remove
          </Button>
        </Grid>
      </Grid>
   
    
  )

  return (
    <Grid container spacing={0} direction={'row'} justifyContent={'center'} alignItems={'center'} height={'100%'} columnGap={2}>
      <OpenWithOutlinedIcon sx={{color:'grey'}}/>
      <Typography variant="h6" color="initial">
        No pathes was chosen
      </Typography>
    </Grid>
  )
}

export default Info