import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {accessfvt} from '../../redux'
import Empty from '../showcase/empty'
import Note from '../showcase/noteshow'
import {BiArrowBack} from 'react-icons/bi'

function FvrtList({home}){

    const dispatch = useDispatch()
    const list = useSelector((state)=>state.favorite)

    useEffect(()=>{
        dispatch(accessfvt())
        console.log(list);
    },[])

    return(
        <div>
            <div className='note-item'>
                <BiArrowBack size='50' cursor='pointer' color='blue'
                onClick={home}/>
                <h3 style={{
                    marginRight:'15px'
                }}>Favorite Notes</h3>
             </div>
            {
                list.length===0?
                   <Empty text='Your Favorite List is Empty'/>:
                   <div>
                       {
                           list.map((i,index)=>{
                           return <Note key ={index} title={i.title} subject={i.subject}
                           note={i.note} fontSize={i.fontSize} fontStyle={i.fontStyle}/>
                           })
                       }
                   </div>
            }
        </div>
    )
}

export default FvrtList