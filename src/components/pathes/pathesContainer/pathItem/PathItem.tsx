import Box from "@mui/material/Box"
import Grid from '@mui/material/Grid'
import OpenWithOutlinedIcon from '@mui/icons-material/OpenWithOutlined';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ArrowForwardIosTwoToneIcon from '@mui/icons-material/ArrowForwardIosTwoTone'
import StarIcon from '@mui/icons-material/Star'

type PathItemProps = {
  title: string,
  shortDescprition: string,
  longDiscription: string,
  pathLength: number,
  favorites: boolean
}

const PathItem = ({title,shortDescprition,longDiscription,pathLength,favorites}:PathItemProps) => {
  return (
    <Box padding={1} bgcolor={'#F1F1F1'}>
      <Grid container justifyContent={'space-between'} spacing={0} columnGap={2} direction={'row'} alignItems={'center'}>
          <Grid item >
            <Grid container columnGap={2} direction={'row'} alignItems={'center'}>
              <OpenWithOutlinedIcon sx={{width: '2rem', height: '2rem', transform: 'rotate(45deg)'}}/>
              <Grid item>
                <Grid container spacing={0} direction={'column'}>
                    <Typography variant="h6" color="initial" padding={0} display={'flex'} alignItems={'center'} sx={{columnGap:1}}>
                      {favorites ? <><StarIcon color="primary"/> {title} </>: title}
                    </Typography>
                    <p style={{margin: '0 0 0 0', maxWidth: '300px'}}>
                      {shortDescprition}
          
                    </p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          
          
          <Grid item spacing={0}>
            <Grid container spacing={0} direction={'row'} alignItems={'center'}>
              <Typography>
                {pathLength > 1000 ? (pathLength/1000).toFixed(1) + " km" : pathLength + "m"}
              </Typography>
              <Button sx={{color: 'grey'}}>
                <ArrowForwardIosTwoToneIcon/>
              </Button>
            </Grid>
          </Grid>
          

      </Grid>
    </Box>
  )
}

export default PathItem