
 const pathLengthDisplay = (pathLength:number):string => {
    if(pathLength > 1000) return (pathLength/1000).toFixed(1) + " km" 
    return pathLength + " m"
}

export default pathLengthDisplay