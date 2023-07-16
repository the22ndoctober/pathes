import { HANDLE_SEARCH } from "../types/types"

export const handleSearch = (action:any)=>{
    if(action.type === HANDLE_SEARCH) return action.payload
    return
}