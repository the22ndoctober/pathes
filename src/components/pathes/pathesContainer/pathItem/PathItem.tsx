import Box from "@mui/material/Box"
import Grid from '@mui/material/Grid'
import OpenWithOutlinedIcon from '@mui/icons-material/OpenWithOutlined';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ArrowForwardIosTwoToneIcon from '@mui/icons-material/ArrowForwardIosTwoTone';

const PathItem = () => {
  return (
    <Box padding={1} bgcolor={'#F1F1F1'}>
      <Grid container spacing={0} columnGap={2} direction={'row'} alignItems={'center'}>
          <OpenWithOutlinedIcon sx={{width: '2rem', height: '2rem', transform: 'rotate(45deg)'}}/>
          <Box>
            <Grid container spacing={0} direction={'column'}>
                <Typography variant="h6" color="initial" padding={0}>
                  Path Title
                </Typography>
                <p style={{margin: '0 0 0 0', maxWidth: '300px'}}>
                  Short discription dfsfds sfdsf sfddsf sdfdfsfd dsfdfsdfdf sdffsdsdf
      
                </p>
            </Grid>
          </Box>
          <Box>
            <Grid container spacing={0} direction={'row'} alignItems={'center'}>
                <Typography>
                  1.75km
                </Typography>
                <Button sx={{color: 'grey'}}>
                  <ArrowForwardIosTwoToneIcon/>
                </Button>
            </Grid>
          </Box>

      </Grid>
    </Box>
  )
}

export default PathItem