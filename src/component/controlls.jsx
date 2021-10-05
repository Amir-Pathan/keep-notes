import { Button } from '@mui/material'
import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function Controll(props){

    const {fontsize,fontStyle} = props

    const [fsize,setSize] = useState('25')
    const [fsty,setSty] = useState('normal')
    const history = useHistory()

    const size = ['15','20','25','30','35','40','45','50']
    const sty=['normal','oblique','italic']

    const home=()=>{
        history.push('/')
    }

    const handle=(e)=>{
        setSize(e.target.value)
        fontsize(e.target.value)
    }

    const sHandle=(e)=>{
        setSty(e.target.value)
        fontStyle(e.target.value)
    }

    return(
        <div className='cntrs'>
            <div>
                <label htmlFor="style">Font-Size : </label>
                <Select  size='small' label='Font-Style'
                    value={fsty}
                    onChange={sHandle}>
                        {
                            sty.map((i)=>{
                                 return <MenuItem value={i} key={i}>{i}</MenuItem>
                            })
                        }
                </Select>
            </div>
            <div>
                <label htmlFor="size">Font-Size : </label>
                 <Select  size='small' label='Font_size'
                  value={fsize}
                  onChange={handle}>
                     {
                         size.map((i)=>{
                         return <MenuItem value={i} key={i}>{i}</MenuItem>
                        })
                     }
                 </Select>
            </div>
            <Button color='primary' variant='outlined'>Bg-Color</Button>
            <Button color='primary' size='small' variant='outlined' onClick={home}>Cancell</Button>
        </div>
    )
}

export default Controll