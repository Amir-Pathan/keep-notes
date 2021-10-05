import React,{Component} from 'react'
import {Formik,Form,ErrorMessage,Field,FieldArray} from 'formik'
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import Controll from './controlls'
import {connect} from 'react-redux'
import {List,NotePlus} from '../redux'
import {Link} from 'react-router-dom'

class Note extends Component{
    state={
       size : '25px',
       color : 'white',
       fontStyle : 'normal',
       save : false
    }

    initialValues={
        title :'',
        subject:'',
        des:[''],
        fontSize:this.state.size,
        backgroundColor:this.state.color,
        fontStyle:this.state.fontStyle
        
    }

    validate(values){
        let errors={}
        if(!values.subject){
            errors.subject='Required'
        }
        return errors
    }

    noteValidate=(values)=>{
        let note;
        if(!values){
            note='Required'
        }
        return note
    }

    titleValidate(values){
        let title;
        this.props.access()
        if(this.props.note.length>0){
            const indx=this.props.note.findIndex((i)=>{
                return i.title===values
            })
            console.log(indx);
            if(indx!==-1){
                title='Please Change Title! This is AvailAble'
            }
        }
        if(!values){
            title ='Required'
        }
        return title
    }

    onSubmit(values){
        console.log(values);
        this.props.add(values)
        this.setState({
            save :true
        })
    }

    update(e){
        console.log(e);
        this.setState({
            size : e+'px'
        })
    }

    updateFontStyle(e){
        this.setState({
            fontStyle :e
        })
    }

    render(){
        return(
            <>
            <Controll fontsize={this.update.bind(this)} fontStyle={this.updateFontStyle.bind(this)}/>
            <Formik initialValues={this.initialValues}
             validate={this.validate} onSubmit={this.onSubmit.bind(this)}>
                {
                    formik=>{
                        return(
                            <Form>
                                <div>
                                    <label htmlFor="title">Title : </label><br/>
                                    <Field name='title' validate={this.titleValidate.bind(this)}>
                                       {
                                           ({field})=>{
                                                return <TextField label='Title'style={
                                                   {
                                                    marginLeft:'85px',
                                                    width:'80%'}}{...field}/>
                                                    }
                                        }
                                </Field>
                                <ErrorMessage className='err' name='title' component='div'/>
                                </div>
                                <div>
                                    <label htmlFor="subject">Subject : </label><br/>
                                    <Field name='subject'>
                                        {
                                           ({field})=>{
                                                return <TextField label='Subject'
                                                multiline maxRows={4} minRows={2} style={
                                                   {
                                                    marginLeft:'85px',
                                                    width:'80%'}}{...field}/>
                                                    }
                                        }
                                    </Field>
                                    <ErrorMessage className='err' name='subject' component='div'/>
                                </div>
                                <div>
                                    <label htmlFor="description">Description : </label>
                                    <FieldArray name='des'>
                                        {
                                            (props)=>{
                                                const {form,push,remove} = props
                                                const {values}= form
                                                const {des} = values
                                                return des.map((i,index)=>{
                                                    return(
                                                        <div key={index}>
                                                            <label htmlFor="page">{index+1} Page :</label>
                                                            <Field name={`des[${index}]`} validate={this.noteValidate.bind(this)}>
                                                                {
                                                                    ({field})=>{
                                                                        return(
                                                                            <div>
                                                                                <TextareaAutosize minRows={15} maxRows={30}
                                                                                className='text' style={{
                                                                                    fontSize:this.state.size,
                                                                                    fontStyle:this.state.fontStyle
                                                                                }} {...field}/>
                                                                            </div>
                                                                        )
                                                                    }
                                                                }
                                                            </Field>
                                                            <ErrorMessage className='err'  name={`des[${index}]`} component='div'/>
                                                            <div style={{
                                                                marginLeft:'75%',
                                                                marginTop:'5px',
                                                                marginBottom:'10px'
                                                            }}>
                                                                {
                                                                    index>0?
                                                                      <Button variant='outlined' onClick={()=>remove(index)}>-</Button>:
                                                                      null
                                                                }
                                                            <Button style={{marginLeft:'10px'}} variant='outlined' type='button' onClick={()=>{push('')}}>+</Button>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        }
                                    </FieldArray>
                                </div>
                                {
                                    this.state.save?
                                       <Link to='/'>
                                           <Button disabled={!formik.isValid} style={{marginLeft:'76%'}}
                                              type='submit' size='small' variant='outlined'
                                            >
                                            Save
                                            </Button>
                                       </Link>:
                                       <Button disabled={!formik.isValid} style={{marginLeft:'76%'}}
                                       type='submit' size='small' variant='outlined'
                                       >
                                           Save
                                       </Button>
                                }
                            </Form>
                        )
                    }
                }
            </Formik>
            </>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        note : state.notes
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        access : ()=>dispatch(List()),
        add : (e)=>dispatch(NotePlus(e))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Note)