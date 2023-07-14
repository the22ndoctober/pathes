import {useEffect} from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import PathItem from '../pathItem/PathItem'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPathes, selectPathes, getPathesStatus, getPathesError} from '../../../../redux/reducers/pathes'
import CircularProgress from '@mui/joy/CircularProgress'


const PathesWrapper = () => {   

    const pathes = useSelector(selectPathes)
    const status = useSelector(getPathesStatus)
    const error = useSelector(getPathesError)

    const dispatch = useDispatch<any>()

    useEffect(()=>{
        if(status === 'idle'){
            dispatch(fetchPathes())
        }
    },[pathes,dispatch])

    return (
        <Box>
            <Grid container spacing={0} direction={'column'}>
                {status === 'loading' ? <CircularProgress color="primary"/> : <PathItem/>}
                
            </Grid>
        </Box>
   )
}

export default PathesWrapper