
import { useDispatch} from 'react-redux'
import { handleSearch} from '../../../../redux/reducers/search'
import { HANDLE_SEARCH } from '../../../../redux/types/types'
import { Box } from '@mui/material'
import Input from '@mui/joy/Input'

type PathesSearchProps = {

}


const PathesSearch = ({}:PathesSearchProps) => {

  const dispatch = useDispatch()


  return(

    <Box>
      <Input placeholder='Search for pathes' onChange={(e)=>{
        dispatch(handleSearch({type: HANDLE_SEARCH ,payload: e.target.value.toLowerCase()}))
      }}/>
    </Box>
  )
  
}

export default PathesSearch