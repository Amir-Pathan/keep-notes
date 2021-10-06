import React,{useState,useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import {useHistory} from 'react-router-dom'
import Button from '@mui/material/Button';
import {MdDelete} from 'react-icons/md'
import {FiStar} from 'react-icons/fi'
import {deleting,addtofavorite,accessfvt,removefromfavorite} from '../../redux'
import {useDispatch,useSelector} from 'react-redux'

function Show(){

    const [able,setAble] = useState(false)
    const [no,setNo] = useState(0)

    const location=useLocation()
    const data = location.state

    const history = useHistory()

    const back = ()=>{
        history.push('/')
    }

    const dispatch = useDispatch()
    const fvt = useSelector((state)=>state.favorite)

    const removefromfvt=()=>{
        dispatch(removefromfavorite(data.title))
        setAble(false)
    }

    useEffect(()=>{
        dispatch(accessfvt())
        console.log(fvt);
        const indx = fvt.findIndex((i)=>{
            return i.title===data.title
        })
        if(indx!==-1){
            setAble(true)
        }
        setNo(1)
    },[no])

    console.log(fvt);

    const dlt=()=>{
        dispatch(deleting(data.title))
        const indx= fvt.findIndex((i)=>{
            return i.title===data.title
        })
        if(indx!==-1){
            dispatch(removefromfavorite(data.title))
        }
        history.push('/')
    }

    const addtofvrt=()=>{
        dispatch(addtofavorite(data))
        setAble(true)
    }

    return(
        <>
        <div className='iconsbtn'>
            <div>
                <BiArrowBack color='white' size={50} cursor='pointer'
                onClick={back}/>
            </div>
            <div>
                  {
                      able?
                        <Button variant='outlined' color='primary' cursor='pointer'
                        onClick={removefromfvt}>    
                            Remove To
                            <FiStar size={25} style={{
                               marginLeft:'5px',
                           }}/>
                        </Button>:
                        <Button variant='outlined' color='primary' cursor='pointer'
                        onClick={addtofvrt}>
                           Add To
                           <FiStar size={25} style={{
                               marginLeft:'5px',
                           }}/>
                        </Button>
                  }
                   <Button variant='outlined' color='primary' cursor='pointer'
                   style={{
                    marginLeft:'5px',
                }} onClick={dlt}>
                      Delete
                      <MdDelete size={25} style={{
                          marginLeft:'5px',
                      }}/>
                   </Button>
            </div>
        </div>
        <div className='noteBox'>
                <div className='center'>
                <h1>Title : {data.title}</h1>
             </div>
             <div>
                 <h3 className='sub'>Subject : {data.subject}</h3>
             </div>
             <div className='notes'>
                 <h5>Notes :</h5>
                 {
                     data.note.map((i,index)=>{
                           return <div key={index} style={{
                               fontSize:data.fontSize,
                               fontStyle : data.fontStyle
                           }}>{i}</div>
                     })
                 }
             </div>
        </div>
        </>
    )
}

export default Show
