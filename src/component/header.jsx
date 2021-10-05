import React,{PureComponent} from 'react'
import {BsPlusCircle} from 'react-icons/bs'
import {IconContext} from 'react-icons'
import {FiStar} from 'react-icons/fi'
import TextField from '@mui/material/TextField';
import {FaSearch} from 'react-icons/fa'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import Container from './showcase/container'
import FvrtList from './fvrt/favorite'
import Srch from './search/srch'

class Header extends PureComponent{

    state={
        search :'',
        src : false,
        page : true
    }

    setSearch(val){
          this.setState({
           search : val.target.value,
           src : false
       },()=>{
           this.setState({
               ...this.state,
               src : true
           })
       })
    }

    done(){
        this.setState({
            ...this.state,
            src : true
        })
    }

    fvrt(){
        this.setState({
            ...this.state,
            page: false
        })
    }

    home(){
        this.setState({
            ...this.state,
            page : true
        })
    }

    back(){
        this.setState({
            ...this.state,
            search :'',
            src :false,
        })
    }

    render(){
        return(
            <>
            <div className='flx'>
                <IconContext.Provider value={{
                        color :'black',
                        size:'35px',
                    }}>
                <div>
                     <h3 className='apptitle'>Keep-Notes</h3>
                </div>
                <div>
                     <TextField className='input' label='search' variant='standard'
                     value={this.state.search} onChange={this.setSearch.bind(this)} onBlur={this.done.bind(this)}/>
                     <Button>
                         <FaSearch style={{paddingTop:'10px',cursor:'pointer'}} size='30px'/>
                     </Button>
                </div>
                <div className='icons'>
                    <Link to='/note'>
                        <BsPlusCircle cursor='pointer'/>
                    </Link>
                        <FiStar cursor='pointer' onClick={this.fvrt.bind(this)}/>
                </div>
             </IconContext.Provider>
            </div>
            {
                this.state.src?
                   <Srch srch={this.state.search} back={this.back.bind(this)}/>:
                   this.state.page?
                     <Container/>:
                     <FvrtList home={this.home.bind(this)}/>
            }
            </>
        )
    }  

}

export default Header