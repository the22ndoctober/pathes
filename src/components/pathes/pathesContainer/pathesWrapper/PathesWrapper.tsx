import {useEffect} from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import PathItem from '../pathItem/PathItem'
import { useDispatch, useSelector } from 'react-redux'
import { selectPathes, getPathesStatus, getPathesError, selectPath} from '../../../../redux/reducers/pathes'

import { fetchPathes } from '../../../../redux/actions/pathes'
import { SELECT_PATH } from '../../../../redux/types/types'
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
        <Box sx={{overflowY: 'scroll', maxHeight: '420px'}}>
            <Grid container spacing={0} direction={'column'} rowGap={2} >
                {status === 'loading' ? 
                <CircularProgress color="primary"/> : 
                pathes.map((path:any)=>{
                  return (
                    <PathItem
                    key={path.id}
                    id={path.id}
                    select={
                      ()=>{
                        dispatch(selectPath({type: SELECT_PATH, payload: path.id}))
                      }
                    }
                    title={path.title}
                    shortDescription={path.shortDescription}
                    longDescription={path.longDescription}
                    pathLength={path.pathLength}
                    favorites={path.favorites}
                  />
                  )
                })
                
                }
                
                
            </Grid>
        </Box>
   )
}
export default PathesWrapper