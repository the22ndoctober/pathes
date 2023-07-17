
import { useSelector} from 'react-redux'
import { selectPathes,activePath } from '../../../../redux/reducers/pathes'
import pathLengthDisplay from '../../../../other/pathLengthDisplay'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'





const PathInfo = () => {

  const pathes = useSelector(selectPathes)
  const selectedPath = useSelector(activePath)
  

  return (
    <Grid container spacing={0} direction={'column'} rowGap={2}>
      <Grid item>
        <Grid container spacing={0} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography variant="h4" color="initial">
            {pathes.find((path:any)=> selectedPath === path.id).title}
          </Typography>
          <Typography variant="h5" sx={{color:'grey'}}>
            {pathLengthDisplay(pathes.find((path:any)=> selectedPath === path.id).pathLength)} {/*Transform distance into string in KM*/}
          </Typography> 

        </Grid>
      </Grid>
        <Grid item>
          <Typography variant="body2" color="initial">
            {pathes.find((path:any)=> selectedPath === path.id).longDescription}
          </Typography>
        </Grid>
          
    </Grid>
    
  )
}

export default PathInfo