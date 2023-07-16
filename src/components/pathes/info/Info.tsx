import React from 'react'
import Map from './map/Map'
import PathInfo from './pathInfo/PathInfo'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { useDispatch, useSelector } from 'react-redux'
import { activePath, selectPathes, handleFavorites } from '../../../redux/reducers/pathes'
import OpenWithOutlinedIcon from '@mui/icons-material/OpenWithOutlined'
import Typography from '@mui/material/Typography'
import { HANDLE_FAVORITES } from '../../../redux/types/types'




const Info = () => {

  const selectedPath = useSelector(activePath)
  const pathes = useSelector(selectPathes)
  const dispatch = useDispatch()

  const changeFavorites = ()=>{
    dispatch(handleFavorites({type: HANDLE_FAVORITES, payload: selectedPath}))
  }

  if(selectedPath !== 'none') return (
    
      <Grid container spacing={0} direction={'column'} paddingLeft={4} sx={{minHeight: '100%'}} justifyContent={'space-between'}>
        
        <PathInfo/>
        <Grid item spacing={0}>
          <Map/>
        </Grid>
        
        <Grid item >
          <Grid container spacing={0} direction={'column'} alignItems={'end'}>
             
            <Button variant="text" color="primary" onClick={changeFavorites}>
              {pathes.find((path:any)=> path.id === selectedPath).favorites ? 'Remove from Favorites': 'Add to Favorites'}
            </Button> 
            <Button variant="text" color="error">Remove</Button>
          </Grid>
          
        </Grid>
      </Grid>
   
    
  )

  return (
    <Grid container spacing={0} direction={'row'} justifyContent={'center'} alignItems={'center'} height={'100%'} columnGap={2}>
      <OpenWithOutlinedIcon sx={{color:'grey'}}/>
      <Typography variant="h6" color="initial">
        Select the path
      </Typography>
    </Grid>
  )
}

export default Info