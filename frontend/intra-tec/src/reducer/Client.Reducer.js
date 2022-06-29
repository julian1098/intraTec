export default function ClientReducer(state, action){
    switch(action.type){
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/   
        case "GET":
            console.log("ClientReducer->GET")
            return {
                ...state,
                clients:  action.payload   
            }
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/ 
        case "GETID":
            console.log("ClientReducer->GETID")
            return {
                ...state,
                client:  action.payload   
            }
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/ 
        case "ADD":
            console.log("ClientReducer->ADD")
            return {
                ...state,
                clients: []
            }
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/ 
        case "UPDATE":
            console.log("ClientReducer->UPDATE")
            return {
                ...state,
                clients: []
            }
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/ 
        case "REMOVE":
            console.log("ClientReducer->REMOVE")
            return{
                ...state,
                clients: []
            }
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/                
        default:
            return state;
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/ 
    }
}