import { GoogleMap, Marker, DirectionsRenderer } from '@react-google-maps/api'
import Box from '@mui/material/Box'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { activePath, selectPathes } from '../../../../redux/reducers/pathes'



export const MapHandler = (handleFunction:any)=>{
    handleFunction()
}

const Map = ({}) => {
    
    
    const [directions, setDirections] = useState<any[]>([])
    const pathes = useSelector(selectPathes)
    const selectedPath = useSelector(activePath)

    const handleDirection = (id:number)=>{
        
        const markers = pathes.find((el:any)=> el.id === id ).markers

        if(markers.length >=2){
            setDirections([]) 
            const service = new google.maps.DirectionsService()
            markers.map((marker:any,id:any)=>{
            id !== markers.length-1 &&
            service.route({
                origin: marker,
                destination: markers[id+1],
                travelMode: google.maps.TravelMode.WALKING
            },
            (result,status)=>{
                if(status === 'OK' && result){
                    setDirections((state:any)=> [...state, result])
                }
                }
                )
            })
        }
            
    }

    useEffect(()=>{
        
        handleDirection(selectedPath)  
        
    },[selectedPath])

    
    
    return (
        
        <Box sx={{width: '100%', height: '300px'}} >
            <GoogleMap 
                
                zoom={20} 
                center={pathes.find((el:any)=> el.id === selectedPath ).markers[0]}
                options={
                    {
                        mapTypeControl: false,
                        zoomControlOptions: null,
                        streetViewControl: false,
                        disableDefaultUI: true,
                        heading: null

                    }
                }  
                mapContainerStyle={{width: '100%', height: '100%',cursor: 'pointer'}}
            >   
                {
                    directions.length > 0 && directions.map((direction:any,id:any)=>{
                        return  <DirectionsRenderer key={id} directions={direction}/>
                    })
                }
                {pathes.find((el:any)=> el.id === selectedPath ).markers.map((marker:any,id:any)=>{
                    return <Marker key={id} position={marker}/>
                })}
            </GoogleMap>
        </Box>
          
    )
}


export default Map