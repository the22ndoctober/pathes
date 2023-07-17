import {useState, useEffect} from 'react'
import { GoogleMap, useLoadScript, Marker, DirectionsRenderer } from '@react-google-maps/api'
import {useSelector, } from 'react-redux'
import { selectPathes, activePath } from '../../../../redux/reducers/pathes'
import Box from '@mui/material/Box'




const Map = () => {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: 'AIzaSyBA3l3bQ6X3HC7DtMZyLVjIC8I7acphPr8'
    })

    const pathes = useSelector(selectPathes)
    const selectedPath = useSelector(activePath)

    const [center,setCenter] = useState<any>()
    const [markers,setMarkers] = useState<any[]>([])
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
        const displayMarkers = ()=>{
            setMarkers(pathes.find((path:any) => path.id === selectedPath).markers)
        }
        
        displayMarkers()
        handleDirection()  
        
    }, [selectedPath])

    useEffect(()=>{
        setCenter(markers[0])
    },[selectedPath])


    if(!isLoaded) return <p>no map</p>
    
    return (
        
        <Box sx={{width: '100%', height: '300px'}} >
            <GoogleMap 
                
                zoom={20} 
                center={center}
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