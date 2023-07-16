import Box from "@mui/material/Box"
import Grid from '@mui/material/Grid'
import OpenWithOutlinedIcon from '@mui/icons-material/OpenWithOutlined';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ArrowForwardIosTwoToneIcon from '@mui/icons-material/ArrowForwardIosTwoTone'
import StarIcon from '@mui/icons-material/Star'
import { activePath } from "../../../../redux/reducers/pathes"; 
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import styled from "@emotion/styled";

type PathItemProps = {
  id: number,
  title: string,
  shortDescription: string,
  longDiscription: string,
  pathLength: number,
  select: any,
  favorites: boolean
}



const PathItem = ({id, title,shortDescription,longDiscription,select,pathLength,favorites}:PathItemProps) => {

  const selectedPath = useSelector(activePath)

  const PathItemBox = styled(Box)({
    padding: '1rem',
    backgroundColor: id === selectedPath ? '#1976d2' : '#F1F1F1',
  })

  return (
    <PathItemBox onClick={select}>
      <Grid container justifyContent={'space-between'} spacing={0} columnGap={2} direction={'row'} alignItems={'center'}>
          <Grid item >
            <Grid container columnGap={2} direction={'row'} alignItems={'center'}>
              <OpenWithOutlinedIcon sx={{width: '2rem', height: '2rem', transform: 'rotate(45deg)', color: id===selectedPath? 'white' : 'grey'}}/>
              <Grid item>
                <Grid container spacing={0} direction={'column'}>
                    <Typography variant="h6" color="initial" padding={0} display={'flex'} alignItems={'center'} sx={{columnGap:1, color: id === selectedPath ? 'white': 'black'}}>
                      {favorites ? <><StarIcon sx={{color: id === selectedPath ? 'white': '#1976d2'}}/> {title} </>: title}
                    </Typography>
                    <p style={{margin: '0 0 0 0', maxWidth: '300px', color: id === selectedPath ? '#fff' : 'grey'}}>
                      {shortDescription}
          
                    </p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          
          
          <Grid item spacing={0}>
            <Grid container spacing={0} direction={'row'} alignItems={'center'}>
              <Typography sx={{color: id===selectedPath? 'white' : 'grey'}}>
                {pathLength > 1000 ? (pathLength/1000).toFixed(1) + " km" : pathLength + "m"}
              </Typography>
              <Button sx={{color: id===selectedPath? 'white' : 'grey'}}>
                <ArrowForwardIosTwoToneIcon/>
              </Button>
            </Grid>
          </Grid>
          

      </Grid>
    </PathItemBox>
  )
}

export default PathItem