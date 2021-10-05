import 
{ADD_NOTE,ACCESS_ALL,DELETE_NOTE,
ADD_TO_FAVORITE,ACCESS_FAVORITE,
REMOVE_FROM_FAVORITE} from './createAction'

const initailValue ={
   notes : [],
   favorite : []
}

export const reducer=(state=initailValue,action)=>{
    switch(action.type){
        case ADD_NOTE:
            return  {
                ...state,
               notes :action.payLoad
            }
        case ACCESS_ALL:
            return{
                ...state,
                notes : action.payLoad
            }
        case DELETE_NOTE:
            return{
                ...state,
                notes : action.payLoad
            }
        case ADD_TO_FAVORITE:
            return{
                ...state,
                favorite:action.payLoad
            }
        case ACCESS_FAVORITE:
            return{
                ...state,
                favorite : action.payLoad
            }
        case REMOVE_FROM_FAVORITE:
            return{
                ...state,
                favorite : action.payLoad
            }
        default :
            return state
    }
}