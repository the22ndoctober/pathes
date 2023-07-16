import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import {isOpen, handleClose} from '../../../redux/reducers/createPathModal'
import Grid from '@mui/material/Grid'
import ModalMap from './map/ModalMap';
import { Box } from '@mui/material';

export default function PathModal() {


  const dispatch = useDispatch()
  const open = useSelector(isOpen)
    

  
  const handleClickClose = () => {
    dispatch(handleClose())
  }
  
  return (
    <Dialog
      onClose={handleClickClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      maxWidth={'lg'}
      PaperProps={{
        sx: {
          maxHeight:500,
          height: 600,
          padding: '1rem'
        }}}
    >
      <Box sx={{maxWidth:'1440px', minWidth:'1000px'}}>
        <DialogTitle sx={{ m: 0, px: 0, py:2, alignItems:'center'}}>
          Add new path
          {handleClickClose ? (
          <IconButton
            aria-label="close"
            onClick={handleClickClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          ) : null}
        </DialogTitle>
      </Box>
      <Grid container spacing={0} direction={'row'}>
        <Grid item xs={6}>
          <Typography gutterBottom>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
          Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
          magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
          ullamcorper nulla non metus auctor fringilla.
          </Typography>
          <DialogActions>
            <Button autoFocus onClick={handleClickClose}>
              Add Path
            </Button>
          </DialogActions>
        </Grid>
        <Grid item xs={6}>
          <ModalMap/>
        </Grid>
      </Grid>
    </Dialog>
    
  );
}
