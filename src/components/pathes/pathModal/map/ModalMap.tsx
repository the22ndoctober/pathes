import {useState, useEffect} from 'react'
import { GoogleMap, useLoadScript, Marker, DirectionsRenderer } from '@react-google-maps/api'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

type ModalMapProps = {
    center: any,
    setCenter: React.Dispatch<React.SetStateAction<any>>,
    markers: any[],
    setMarkers: React.Dispatch<React.SetStateAction<any>>,
    directions: any[],
    setDirections: React.Dispatch<React.SetStateAction<any[]>>
}


const ModalMap = ({center,setCenter, markers, setMarkers, directions, setDirections}: ModalMapProps) => {

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
        console.log(directions)
    }, [markers])


    return (
        <Box sx={{width: '100%', height: '100%', position: 'relative'}} >
            <Button variant="contained" 
                sx={{
                    backgroundColor: 'grey',
                    zIndex: 20,
                    postion: 'absolute',
                    top: '50px',
                    left: '50%',
                    transform: 'translate(-50%,-50%)'}} 
                onClick={()=>{
                
                    setDirections([])
                    setMarkers([])
            }}>
              Reset
            </Button>
            <GoogleMap 
                
                zoom={19} 
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
                mapContainerStyle={{width: '100%',marginTop:'-20px', height: '420px',cursor: 'pointer'}}
                onClick={(e)=>{
                    e.domEvent.preventDefault()
                    setMarkers((state:any)=>[...state, e.latLng])
                    setCenter(e.latLng)
                }}
            >   
                {
                    directions.length > 0 && directions.map((direction,id)=>{
                        return  <DirectionsRenderer key={id} directions={direction}/>
                    })
                }
                {markers.map((marker,id)=>{
                    return <Marker key={id} position={marker} zIndex={9999999} onClick={()=>{
                        setMarkers((state:any)=>state.filter((e:any)=> e !== marker))
                    }}/>
                })}
            </GoogleMap>
        </Box>
    )
}


export default ModalMap