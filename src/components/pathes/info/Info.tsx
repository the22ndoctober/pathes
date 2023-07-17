import React from 'react'
import Map from './map/Map'
import PathInfo from './pathInfo/PathInfo'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { useDispatch, useSelector } from 'react-redux'
import { activePath, selectPathes, handleFavorites, selectPath } from '../../../redux/reducers/pathes'
import { fetchPathes } from '../../../redux/actions/pathes'
import OpenWithOutlinedIcon from '@mui/icons-material/OpenWithOutlined'
import Typography from '@mui/material/Typography'
import { HANDLE_DELETE_PATH, HANDLE_FAVORITES, SELECT_PATH } from '../../../redux/types/types'
import { deletePath } from '../../../api/deletePath'




const Info = () => {

  const selectedPath = useSelector(activePath)
  const pathes = useSelector(selectPathes)
  const dispatch = useDispatch<any>()

  const changeFavorites = ()=>{
    dispatch(handleFavorites({type: HANDLE_FAVORITES, payload: selectedPath}))
  }
  
  const handleRemove = async()=>{
    await deletePath(pathes.find((path:any)=> path.id === selectedPath).firebaseId)
    dispatch(selectPath({type: SELECT_PATH, payload: pathes[0].id}))
    await dispatch(fetchPathes())
  }

  return(
  <>
  { selectedPath !== 'none' ?
    
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
            <Button variant="text" color="error" onClick={handleRemove}>
              Remove
            </Button>
          </Grid>
          
        </Grid>
      </Grid>
   
    
      :


      <Grid container spacing={0} direction={'row'} justifyContent={'center'} alignItems={'center'} height={'100%'} columnGap={2}>
        <OpenWithOutlinedIcon sx={{color:'grey'}}/>
        <Typography variant="h6" color="initial">
          Select the path
        </Typography>
      </Grid>
    }
  </>
  )
}

export default Info