import React,{useState,useEffect} from 'react'
import {List} from '../../redux'
import {useDispatch,useSelector} from 'react-redux'
import Empty from '../showcase/empty'
import Note from '../showcase/noteshow'
import {MdCancel} from 'react-icons/md'

function Srch({srch,back}){

    const [searchlist,setSearchList] = useState([])
    const [no,setNo] = useState(0)

    const dispatch = useDispatch()
    const list = useSelector((state)=>state.notes)

    useEffect(()=>{
        dispatch(List())
        console.log(srch);
        const filt = list.filter((i)=>{
            return i.title.includes(srch)
        })
        setSearchList(filt)
        setNo(1)
        console.log(searchlist);
    },[no])

    return(
        <div>
            <MdCancel size={50} color='white' cursor='pointer'
            onClick={back}/>
            {
                searchlist.length===0?
                   <Empty text='Not Available'/>:
                   searchlist.map((i)=>{
                       return <Note title={i.title} subject={i.subject} 
                       note={i.des} fontSize={i.fontSize} fontStyle={i.fontStyle}/>
                   })
            }
        </div>
    )
}

export default Srch 