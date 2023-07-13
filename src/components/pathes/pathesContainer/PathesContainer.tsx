import React from 'react'
import Box from '@mui/material/Box'
import PathesSearch from './pathesSearch/PathesSearch'
import PathesWrapper from './pathesWrapper/PathesWrapper'

const PathesContainer = () => {
  return (
    <Box>
        <PathesSearch/>
        <PathesWrapper/>
    </Box>
  )
}

export default PathesContainer