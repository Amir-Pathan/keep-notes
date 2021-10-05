import React,{useEffect} from 'react'
import Empty from './empty'
import Note from './noteshow'
import {List} from '../../redux'
import {useDispatch,useSelector} from 'react-redux'

function Container(){

    const dispatch=useDispatch()
    const list = useSelector(state=>state.notes)

    useEffect(()=>{
        dispatch(List())
    },[])

    console.log(list);

    return(
        <>
            {
                list.length===0?
                    <Empty text='Your Note List Is Empty'/>:
                    list.map((i,index)=>{
                        return <Note key={index} title={i.title}
                        subject={i.subject} note={i.des} fontSize={i.fontSize}
                        fontStyle={i.fontStyle}/>
                    })
            }
        </>
    )
}
export default Container