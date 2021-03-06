/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/
//LOGIN
export function ActionLogin( user ){
    return {
        type: 'LOGIN',
        payload: user
    };
}
/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/
//LOGOUT
export function ActionLogout(){
    return {
        type: 'LOGOUT',
        payload: null
    };
}
/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/
//UPDATE
export function ActionUpdate( user ){
    return {
        type: 'UPDATE',
        payload: user
    };
}
/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/
//ERROR
export function ActionError(error){
    return {
        type: 'ERROR',
        payload: error
    };
}
/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/