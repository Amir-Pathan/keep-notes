import React from 'react'
import {Link} from 'react-router-dom'
import {BiSpreadsheet} from 'react-icons/bi'

function Note({title,subject,note,fontSize,fontStyle}){
    return(
            <div className='note-item'>
                <h1>{title}</h1>
                <Link to={{
                pathname:'/show',
                state:{
                    title,subject,note,fontSize,fontStyle
                }
                }}>
                    <BiSpreadsheet size={55} style={{
                        paddingTop:'15px',
                        marginRight:'20px'
                    }}/>
                </Link>
            </div>
    )
}
export default Note