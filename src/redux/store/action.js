import
 {ADD_NOTE,
  ACCESS_ALL,
  DELETE_NOTE,
  ADD_TO_FAVORITE,
  ACCESS_FAVORITE,
  REMOVE_FROM_FAVORITE} 
 from './createAction'

export function AddNote(e){
    return{
        type : ADD_NOTE,
        payLoad :e
    }
}

export function AccessAll(e){
    return{
        type : ACCESS_ALL,
        payLoad : e
    }
}

export function deleteNote(e){
    return{
        type : DELETE_NOTE,
        payLoad : e
    }
}

export function add(e){
    return{
        type : ADD_TO_FAVORITE,
        payLoad : e
    }
}

export function accessfav(e){
    return{
        type : ACCESS_FAVORITE,
        payLoad : e
    }
}

export function RemoveToFav(e){
    return{
        type : REMOVE_FROM_FAVORITE,
        payLoad :e
    }
}

export function NotePlus(e){
    const str = localStorage.getItem('notes')
    const notes = JSON.parse(str)||[]
    notes.push(e)
    localStorage.setItem('notes',JSON.stringify(notes))
    console.log(notes);
    return dispatch=>{
        dispatch(AddNote(notes))
    }
}

export function List(){
    const str = localStorage.getItem('notes')
    const notes = JSON.parse(str)||[]
    console.log(notes);
    return dispatch=>{
        dispatch(AccessAll(notes))
    }
}

export function deleting(e){
    const str = localStorage.getItem('notes')
    const notes = JSON.parse(str)||[]
    const removefil = notes.filter((i)=>{
        return i.title!==e
    })
    localStorage.setItem('notes',JSON.stringify(removefil))
    console.log(removefil);
    return dispatch=>{
        dispatch(deleteNote(removefil))
    }
}

export function addtofavorite(e){
    const str=localStorage.getItem('fnote')
    const fnote = JSON.parse(str)||[]
    fnote.push(e)
    console.log(fnote);
    localStorage.setItem('fnote',JSON.stringify(fnote))
    return dispatch=>{
        dispatch(add(fnote))
    }
}

export function accessfvt(){
    const str = localStorage.getItem('fnote')
    const fnote = JSON.parse(str)||[]
    console.log(fnote);
    return dispatch=>{  
        dispatch(accessfav(fnote))
    }
}

export function removefromfavorite(e){
    const str = localStorage.getItem('fnote')
    const fnote = JSON.parse(str)||[]
    console.log(fnote);
    const filt = fnote.filter((i)=>{
        return e!==i.title
    })
    console.log(filt);
    localStorage.setItem('fnote',JSON.stringify(filt))
    return dispatch=>{
        dispatch(RemoveToFav(filt))
    }
}