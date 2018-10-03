import React,{Component} from 'react'

import {StyleSheet,Text,View} from 'react-native'



 

class Cell extends Component {

    
    componentWillReceiveProps(nextProps){
        if((this.props.flag===false)||this.props.secondFlag){
            console.log("hello");
        if (nextProps.checkTurn !== this.props.checkTurn)
        if (this.props.checkTurn===this.props.myid)
        {
         this.setState(()=>{
             return {
                 color:this.props.myColor
             }
         });      
        }}else{
            console.log("hamada");
            this.setState(()=>{
                return {
                    color:'#B6B6B6'
                }
            });   
        }
        
    }

   state ={
        color :'#B6B6B6',
       
    }


      render(){
    return (

            <View style={{ height:35,
                width:35,
                borderRadius:50,
                backgroundColor:this.state.color,
                marginTop:5,
                marginBottom:5,}} ></View>

    );}


}

const styles=StyleSheet.create({

});

export default Cell;