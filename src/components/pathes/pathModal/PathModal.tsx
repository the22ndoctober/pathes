import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'
import { useDispatch, useSelector } from 'react-redux';
import {isOpen, handleClose} from '../../../redux/reducers/createPathModal'
import Grid from '@mui/material/Grid'
import ModalMap from './map/ModalMap'
import Box from '@mui/material/Box'
import Textarea from '@mui/joy/Textarea'
import Input from '@mui/joy/Input'
import RouteIcon from '@mui/icons-material/Route'
import pathLengthDisplay from '../../../other/pathLengthDisplay'
import { selectPathes } from '../../../redux/reducers/pathes';
import { addPathAsync } from '../../../api/addPath';
import { fetchPathes } from '../../../redux/actions/pathes';



export default function PathModal() {

  const [center,setCenter] = useState<any>({lat: 50.54,lng: 30.62})
  const [markers,setMarkers] = useState<any[]>([])
  const [directions, setDirections] = useState<any[]>([])
  const [distance, setDistance] = useState<number>(0)
  const [title,setTitle] = useState<string>('')
  const [shortDescription, setShortDescription] = useState<string>('')
  const [longDescription,setLongDescription] = useState<string>('')

  const dispatch = useDispatch<any>()
  const open = useSelector(isOpen)
  const pathes = useSelector(selectPathes)
    
  useEffect(()=>{
    if(directions.length === 0){
      setDistance(0)
    }
    if(directions.length >= 1){
      setDistance(state=> state+directions[directions.length-1].routes[0].legs[0].distance.value)
    }
  },[directions])
  
  const handleClickClose = () => {
    dispatch(handleClose())
    setTitle('')
    setShortDescription('')
    setLongDescription('')
    setDirections([])
    setMarkers([]) 
    setCenter({lat: 50.54,lng: 30.62})
  }

  const sendPath = async ()=>{
    
    if(title==='')  return alert('Write a title')
    if(shortDescription==='')  return alert('Write a short description')
    if(shortDescription.length > 160) return  alert('short description is to long')
    if(longDescription === '')  return alert('Write a long description')
    if(markers.length < 2) return  alert('Not enough markers to build a path')
    else{
      
      const markersString = markers.map(marker=> JSON.stringify(marker))

      const postedPath = {
        title: title,
        id: pathes.toSorted((a:any,b:any)=> b.id - a.id)[0].id + 1,
        shortDescription: shortDescription,
        longDescription: longDescription,
        favorites: false,
        markers: markersString,
        pathLength: distance
      }

      await addPathAsync(postedPath)
      
      dispatch(fetchPathes())
      handleClickClose()
      
    }
  }
  
  return (
    <Dialog
      onClose={handleClickClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      maxWidth={'lg'}
      PaperProps={{
        sx: {
          width: '80%',
          maxHeight:'70%',
          height: 900,
          padding: '1rem'
        }}}
    >
      <Box >
        <DialogTitle sx={{ m: 0, px: 0, pt:0, pb:2, alignItems:'center'}}>
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
      <Grid container spacing={2} direction={'row'} justifyContent={'center'} alignItems={'center'} height={'100%'}>
        <Grid item xs={6}>
          <Grid container spacing={0} rowGap={1}>
            <Grid container direction={'column'} rowGap={1}>
              <Typography variant="body1" color="initial">
                Title
              </Typography>
              <Input 
                placeholder="Type title in here"
                value={title}
                onChange={e=>{
                    setTitle(e.target.value)
                  }}
              />
            </Grid>
            <Grid container direction={'column'} rowGap={1}>
              <Typography variant="body1" color="initial">
                Short description
              </Typography>
              <Textarea 
                placeholder='Type description in here'
                minRows={2} 
                maxRows={2}
                value={shortDescription}
                onChange={e=>{
                  setShortDescription(e.target.value)
                }}
                sx={{
                  color: shortDescription.length > 160 ? 'red' : 'black',
                  borderColor: shortDescription.length > 160 ? 'red' : '#D8D8DF'
                }}
                />
              
              <Typography variant="body2" color="initial" textAlign={'right'} sx={{
              color: shortDescription.length > 160 ? 'red' : 'black'
            }}>
                {shortDescription.length} of 160 symbols limit
              </Typography>
              
            </Grid>
            <Grid container direction={'column'} rowGap={1}>
              <Typography variant="body1" color="initial" >
                 Long description
              </Typography>
              <Textarea 
                placeholder='Type description in here'
                minRows={3}
                maxRows={3}
                value={longDescription}
                onChange={e=>{
                  setLongDescription(e.target.value)
                }}
                />
            </Grid>
          </Grid>

          <Grid container spacing={0} direction={'row'} ml={'-0.5rem'} alignItems={'center'} justifyContent={'center'} pt={2}>
            <RouteIcon sx={{width:'2rem', height:'2rem', color: 'grey'}}/>
            <Typography variant="h6" sx={{color: 'grey'}}>
              {pathLengthDisplay(distance)}
            </Typography>
          </Grid>    

          <DialogActions>
            <Button variant='outlined' color='primary' autoFocus onClick={sendPath} sx={{margin: '0 auto'}}>
              Add Path
            </Button>
          </DialogActions>
        </Grid>
        <Grid item xs={6}>
          <ModalMap
            center={center}
            setCenter={setCenter}
            markers={markers}
            setMarkers={setMarkers}
            directions={directions}
            setDirections={setDirections}
          />
        </Grid>
      </Grid>
    </Dialog>
    
  );
}
