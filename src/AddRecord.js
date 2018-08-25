import React from 'react';
import {connect} from 'react-redux';
import store from './store';
import {submitRecord} from './actions/records'
import {submitMonth} from './actions/records';
import { FormErrors } from './FormErrors';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog'; 
import DatePicker from 'react-datepicker';
import moment from 'moment';
import recordsArr from './RecordsItems' ;
import 'react-datepicker/dist/react-datepicker.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
 


const byPropKey=(propertyName,value)=>()=>({
    [propertyName]:value,
});
const INITIAL_STATE={
userNameValue:'',
startValue:'',
endValue:'',
open:false,
formErrors:{},
selectDate:'',
selectDateFormat:'',
formValid:false,
formIsValid:false,
recordsArray:recordsArr.recordsArr,
monthSelected:'',
};
class AddRecord extends React.Component{
    constructor(props){
        super(props);
        this.state={...INITIAL_STATE};
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleFieldChange=this.handleFieldChange.bind(this);
        this.handleOpen=this.handleOpen.bind(this);
        this.handleClose=this.handleClose.bind(this);
        this.handleChangeDate=this.handleChangeDate.bind(this);
        this.validateField=this.validateField.bind(this);
        this.handleChangeSelect=this.handleChangeSelect.bind(this);
        this.cleanDialog=this.cleanDialog.bind(this);
    }

    validateField(fieldName,value){
        const validateErrors=this.state.formErrors;
        let userNameValid=this.state.userNameValid;
        let startValid=this.state.startValid;
        let endValid=this.state.endValid;
        let formValid=this.state.formValid;
        switch(fieldName){
           case 'startValue':
            startValid=!isNaN(parseFloat(value)) && isFinite(value)&&Number(value)<Number(this.state.endValue);
            validateErrors.startValue=startValid?'':'value not valid';
            break;
           case 'endValue':
            endValid=!isNaN(parseFloat(value)) && isFinite(value)&&Number(value)>Number(this.state.startValue);
            validateErrors.endValue=endValid?'':'value not valid';
            break;
           case 'userNameValue':
            userNameValid=value.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
            validateErrors.userNameValue=userNameValid?'':'user name has to be email valid';
            default:
            break;
        }
        this.setState({
          formErrors: validateErrors,
         
        
             },);
        }
    
    handleFieldChange(name,value){
        this.setState(byPropKey(name,value));
    }
    handleChangeSelect(name,value){
        this.handleFieldChange(name,value);
        store.dispatch(submitMonth({
            monthSelected:value
        }))
    }
    handleChangeDate(date) {
        let formatDate=moment(date).format('YYYY-MM-DD');
        this.setState({
          selectDate:date ,
          selectDateFormat:formatDate,
        });
      }
    handleOpen(){
        this.setState({open:true});
    }
    handleClose(){
        this.setState({open:false});
    }
    cleanDialog(){
        this.setState({
            selectDateFormat:'',
            userNameValue:'',
            startValue:'',
            endValue:'',
        })
    }
    handleSubmit(){
        this.validateField('userNameValue',this.state.userNameValue);
        this.validateField('startValue',this.state.startValue);
        this.validateField('endValue',this.state.endValue);
        var isValid=(this.state.formErrors.userNameValue===""
        &&this.state.formErrors.startValue===""&&this.state.formErrors.endValue==="");

        if(isValid)
        {
        const record={
            date:this.state.selectDateFormat?this.state.selectDateFormat:moment().format('YYYY-MM-DD'),
            start:this.state.startValue,
            end:this.state.endValue,
        };
        const userNameRecord=this.state.userNameValue;

        if(this.state.recordsArray[this.state.userNameValue])
            this.state.recordsArray[this.state.userNameValue].push(record);
        else
        { 
        let recordPair=[];
        recordPair.push(record);
        var pair = {};
        pair[userNameRecord] = recordPair;
        this.state.recordsArray = {...this.state.recordsArray, ...pair};
        }
        console.log(this.state.recordsArray);
       
       store.dispatch(submitRecord({
        recordsArray:this.state.recordsArray,
        monthSelected:this.state.monthSelected,
    }));
    this.cleanDialog();
    this.handleClose();
    }
    }
    render(){
        const{
           
        }=this.state;
     return(
         <div>
          <div className='above'>
              <div>
              <Button style={{marginRight:'45px'}} variant="outlined" color="primary" onClick={this.handleOpen}>Add Record</Button>
             <div style={{display:'inline-block',color:'#ffffff'}}>
            <label>choose month:</label>
            <Select style={{fontSize: '18px'}}
            value={this.state.monthSelected}
            onChange={(event)=>{this.handleChangeSelect('monthSelected',event.target.value)}}
          >
            <MenuItem value={0}>all</MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={11}>11</MenuItem>
            <MenuItem value={12}>12</MenuItem>
          </Select>
          </div>
          </div>
              
            <Dialog style={{marginTop:'50px'}} open={this.state.open} 
            >
            <form style={{width:'350px'}}>
            <div style={{marginLeft: '77px',marginTop:'30px'}}>
           <div style={{marginBottom:10}}> <label >Date: </label>
           <DatePicker selected={this.state.selectDate?this.state.selectDate:moment()}
           dateFormat="YYYY-MM-DD"
           onChange={this.handleChangeDate}/></div> 
           <div style={{marginBottom:5}}><label >userName: </label></div>
           <div style={{marginBottom:10}}> <input type='text' value={this.state.userNameValue} onChange={(event)=>{this.handleFieldChange('userNameValue',event.target.value)}}/></div> 
           <div style={{marginBottom:5}}> <label >start: </label></div>
           <div style={{marginBottom:10}}><input type='text' value={this.state.startValue} onChange={(event)=>{this.handleFieldChange('startValue',event.target.value)}}/></div> 
           <div style={{marginBottom:5}}><label >end: </label></div>
           <div style={{marginBottom:10}}> <input type='text' value={this.state.endValue} onChange={(event)=>{this.handleFieldChange('endValue',event.target.value)}}/></div> 
           <div style={{marginBottom:10}}><Button variant="contained" style={{marginLeft:'106px'}} onClick={this.handleSubmit}>save</Button></div>
            </div></form>
            <FormErrors formErrors={this.state.formErrors} />

            </Dialog>
           
         </div>
         
          </div>
     );   
    }
}

const mapStateToProps=state=>({
});
const mapDispatchToProps={
    submitRecord,
    submitMonth
    
};

export default connect(mapStateToProps,mapDispatchToProps)(AddRecord);

