import {useState, useEffect, useMemo} from 'react'
import { GoogleMap, useLoadScript, Marker, DirectionsRenderer } from '@react-google-maps/api'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'




const Map = () => {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: 'AIzaSyBA3l3bQ6X3HC7DtMZyLVjIC8I7acphPr8'
    })

    

    
    const [center,setCenter] = useState<any>({lat: 43.65,lng: -79.34})
    const [markers,setMarkers] = useState([])
    const [directions, setDirections] = useState<any[]>([])

    const handleDirection = ()=>{
        setDirections([])
        if(markers.length>=2){
            const service = new google.maps.DirectionsService()
            markers.map((marker,id)=>{
                id !== markers.length-1 &&
                service.route({
                    origin: marker,
                    destination: markers[id+1],
                    travelMode: google.maps.TravelMode.WALKING
                },
                (result,status)=>{
                    if(status === 'OK' && result){
                        setDirections(state=> [...state, result])
                    }
                }
                )
            })
        }
        
    }

    useEffect(()=>{
        handleDirection()  
    }, [markers])


    if(!isLoaded) return <p>no map</p>
    
    return (
        
        <Box sx={{width: '100%', height: '300px'}} >
            <Button variant="text" color="primary" onClick={()=>{
                
                setDirections([])
                setMarkers([])
            }}>
              Reset
            </Button>
            <GoogleMap 
                
                zoom={16} 
                center={center}
                
                mapContainerStyle={{width: '100%', height: '100%',cursor: 'pointer'}}
                onClick={(e)=>{
                    e.domEvent.preventDefault()
                    setMarkers((state):any=>[...state, e.latLng])
                    setCenter(e.latLng)
                }}
            >   
                {
                    directions.length > 0 && directions.map((direction,id)=>{
                        return  <DirectionsRenderer key={id} directions={direction}/>
                    })
                }
                {markers.map((marker,id)=>{
                    return <Marker key={id} position={marker} onClick={()=>{
                        setMarkers(state=>state.filter(e=> e !== marker))
                    }}/>
                })}
            </GoogleMap>
        </Box>
          
    )
}


export default Map