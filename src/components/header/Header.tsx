import React from 'react'
import OpenWithOutlinedIcon from '@mui/icons-material/OpenWithOutlined';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { useDispatch } from 'react-redux';
import { handleOpen } from '../../redux/reducers/createPathModal';



type HeaderProps ={

}

export const Header:React.FC<HeaderProps> = () => {
  
  const dispatch = useDispatch()

  const handleClickOpen = () => {
    dispatch(handleOpen())
  }

  return (
    <Grid container paddingX={0} alignItems={'center'} direction={'row'} justifyContent={'space-between'}>
        <Grid item>
        <Grid container direction={'row'} alignItems={'center'} columnGap={2}>
            <OpenWithOutlinedIcon sx={{width: '3rem', height: '3rem', transform: 'rotate(45deg)'}}/>
            <h1>Saunter</h1>
        </Grid>
        </Grid>
        <Grid item >
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Add Path
            </Button>
        </Grid>
    </Grid>
  )
}
