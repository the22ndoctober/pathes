import {useState, useEffect} from 'react'
import { GoogleMap, useLoadScript, Marker, DirectionsRenderer } from '@react-google-maps/api'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles';

type ModalMapProps = {
    center: any,
    setCenter: React.Dispatch<React.SetStateAction<any>>,
    markers: any[],
    setMarkers: React.Dispatch<React.SetStateAction<any>>,
    directions: any[],
    setDirections: React.Dispatch<React.SetStateAction<any[]>>
}


const ModalMap = ({center,setCenter, markers, setMarkers, directions, setDirections}: ModalMapProps) => {
    const theme = useTheme();
    const xsQuery = useMediaQuery(theme.breakpoints.up('xs'))
    const smQuery = useMediaQuery(theme.breakpoints.up('sm'))
    const mdQuery = useMediaQuery(theme.breakpoints.up('md'))
    const lgQuery = useMediaQuery(theme.breakpoints.up('lg'))

    function handleResponsiveStyle<T>(xs:T,sm:T,md:T,lg:T){
        if(xsQuery) return xs
        if(smQuery) return sm     
        if(mdQuery) return md
        if(lgQuery) return lg
    }
    
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
                    top: {sm:'50px',xs:'5px'},
                    width: {xs: '55px', sm:'70px'},
                    height: {xs: '25px',},
                    fontSize: {xs: '0.5rem', sm: '0.75rem'},
                    left: '50%',
                    transform: 'translate(-50%,-50%)'}}
                onClick={()=>{
                
                    setDirections([])
                    setMarkers([])
            }}>
              Reset
            </Button>
            <GoogleMap 
                
                zoom={handleResponsiveStyle<number>(13,15,17,19)} 
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
                mapContainerStyle={{
                    width: '100%',
                    marginTop:handleResponsiveStyle<string>('-40px','-20px','-20px', '-20px'), 
                    height: handleResponsiveStyle<string>('180px','450px','450px','450px')     
                    ,
                    cursor: 'pointer'}}
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