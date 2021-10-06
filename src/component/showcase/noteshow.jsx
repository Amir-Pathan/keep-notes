import React from 'react'
import {Link} from 'react-router-dom'
import {BiSpreadsheet} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'
import {IconContext} from 'react-icons'
import {deleting,accessfvt,removefromfavorite} from '../../redux'
import {useDispatch,useSelector} from 'react-redux'

function Note({title,subject,note,fontSize,fontStyle}){

    const dispatch = useDispatch()
    const fvt = useSelector(state=>state.favorite)
    const delte=()=>{
        dispatch(deleting(title))
        dispatch(accessfvt())
        const indx= fvt.findIndex((i)=>{
            return i.title===title
        })
        if(indx!==-1){
            dispatch(removefromfavorite(title))
        }
    }

    return(
            <div className='note-item'>
                <h1>{title}</h1>
                <div style={{
                        paddingTop:'15px',
                        marginRight:'20px'
                    }}>
                    <IconContext.Provider value={{
                        size:55,
                        cursor :'pointer',
                        color:'black'
                    }}>
                        <MdDelete cursor='pointer' onClick={delte }/>
                        <Link to={{
                         pathname:'/show',
                         state:{
                            title,subject,note,fontSize,fontStyle
                           }
                        }}>
                            <BiSpreadsheet/>
                       </Link>
                </IconContext.Provider>
                </div>
            </div>
    )
}
export default Note