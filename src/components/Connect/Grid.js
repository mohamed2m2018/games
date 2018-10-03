import React,{Component} from 'react'

import {StyleSheet,View,Text,TouchableOpacity,Button} from  'react-native'

import Cell from './Cell'


  

class Grid extends Component{

    create2dArr=(columns)=>{
       arr=[]
       for(var i=0;i<columns;i++)
            arr[i]=[];
       return arr      
    }    

    state = {
        id:null,
        arr:this.create2dArr(7),
        next:'red',
        winner :"",
        result :""
    }
    flag=false;
    reset= ()=>{
        flag=true
       
    } 

    copyArr=this.state.arr.slice();
    
    checkVertical(board,color){
            
               
        var win=false;		
        for (var col=0; col<7; col++) {	//go through every column
           
            for (var row=0; row<=2; row++) {//4 vertical must include rows 0, 1, or 2
             if (board[col][row] === color &&	//current row has token
              board[col][row+1]=== color &&	//1 row below has token
              board[col][row+2] === color &&	//2 rows below has token
              board[col][row+3] === color) {	//3 rows below has token
              win = true;			//we have 4 in a row
              return (win);			//we have a winner
              }
               }
          }

            return (win);
    }

    checkHorizontal(board,color){
        var win=false;			//Assume not a winner
        for (var row=0; row<6; row++) {		//Go through every row
           for (var col=0; col<=3; col++){//4 horizontal must include column 0, 1, 2, or 3
              if (board[col][row] == color &&	//this column has token
              board[col+1][row] == color &&	//column 1 to the right has token
              board[col+2][row] == color &&	//column 2 to the right has token
              board[col+3][row] == color) {	//column 3 to the right has token
                 win = true;		//we have 4 in a row
                 return (win);		//we have a winner
              }
            }
        }
        return (win);
    }

    checkDiagonalUp(board,color){
        var win=false;			//assume not a winner
        //Check diagonal "/"
        for ( var row=0; row<=2; row++) {	  //4 diagonal must include rows 0, 1, or 2
            for (var col=3; col<=6; col++){ //4 diagonal must include columns 3, 4, 5, or 6
            if (board[col][row] === color &&      //this cell has token
                board[col-1][row+1] === color &&  //one down, one left hast token
                board[col-2][row+2] === color &&  //two down, two left has token
                board[col-3][row+3] === color){ //three down, three left has token
                win = true;	        //we have 4 in a row
                return (win);	        //we have a winner
             }
              }
          }
              return (win);
    }

    checkDiagonalDown(board,color){
        var win=false;		//assume not a winner
        //Check diagonal "\"
        for (var row=0; row<=2; row++) {	//diagonal winner must include rows 0, 1, or 2
          for (var col=0; col<=3; col++) {//diagonal winner must include columns 0, 1, 2, or 3
        if (board[col][row] == color &&    //this cell has token
          board[col+1][row+1] == color &&    //cell one down, one right has token
          board[col+2][row+2] == color &&    //cell two down, two right has token
          board[col+3][row+3] == color) {   //cell three down, three right has token
            win = true;		      //we have 4 in a row
            return (win);		      //we have a winner
           }
         }
            }
          return (win);
    }

     checkForWinner(board,color){
        //We have a winner if token appears 4 times in a row either vertically,
        // horizontally, or diagonally
        win = this.checkVertical(board,color);		//check for 4 in a row vertically
        if (!win) win = this.checkHorizontal(board,color); //check for 4 in a row horizontally		if (!win) win = checkDiagonalUp(token);		//check for 4 in a row '/'
        if (!win) win = this.checkDiagonalUp(board,color); //check for 4 in a row horizontally		if (!win) win = checkDiagonalUp(token);		//check for 4 in a row '/'
        if (!win) win = this.checkDiagonalDown(board,color);	//check for 4 in a row '\'
        return (win);
    
    }

    columnClicked=(i)=>{
        if(this.state.winner=='')
        {
        this.setState(()=>
                ({
                    id:i
                })
            
        , ()=>{
            if(this.copyArr[i].length<6){
                this.copyArr[i].push(this.state.next);
            }
            this.setState((prevstate)=>{
               
                return {
                   arr:this.copyArr,
                   next:(prevstate.next==='green')? 'red':'green'
                }
            });
          if (this.checkForWinner(this.copyArr,'red'))
          {
                    this.setState(()=>{

                        return {
                            winner:'red',
                            result:'Red won'
                        }});
          }else if(this.checkForWinner(this.copyArr,'green'))
                {
                    this.setState(()=>{
                        
                     return {
                         winner:'green',
                         result: 'Green won'
                      }});  
                }

                    
                }
            );
     }else{
         this.setState({
            result : "Sorry ,game is finished"
            
         })
     }       
    }
  
   

   create_column=(i,columnAlignment)=>{
       
    return (<TouchableOpacity key={i} style={columnAlignment} onPress={this.columnClicked.bind(this,i)}>    
    <Cell myid={5} checkTurn={this.state.arr[i].length} myColor={this.state.next} flag={this.flag}></Cell>
    <Cell myid={4} checkTurn={this.state.arr[i].length} myColor={this.state.next} flag={this.flag}></Cell>
    <Cell myid={3} checkTurn={this.state.arr[i].length} myColor={this.state.next} flag={this.flag}></Cell>
    <Cell myid={2} checkTurn={this.state.arr[i].length} myColor={this.state.next} flag={this.flag}></Cell>
    <Cell myid={1} checkTurn={this.state.arr[i].length} myColor={this.state.next} flag={this.flag}></Cell>
    <Cell myid={0} checkTurn={this.state.arr[i].length} myColor={this.state.next} flag={this.flag}></Cell>
    </TouchableOpacity>);
    
   }

  createGrid=(columnAlignment)=>{
    cells_array=[];
    for(var i=0 ;i<7;i++)
    {
        cells_array.push(this.create_column(i,columnAlignment));
    } 
    return cells_array;
   }

   
    
    
    render(){

        var winColor =(this.state.winner!=='')? this.state.winner:'black';
    
        return (
        <View>
        <View style={styles.gridAlignment}>
            
            {this.createGrid(styles.columnAlignment)}
        </View>
        <View style={styles.viewStyling}>   
            <Text style={{
                marginTop:10,
                fontSize:30,
                color:winColor}} >
            {this.state.result}</Text>

        </View>    

        </View>         
        );
    }
}



const styles = StyleSheet.create({
    gridAlignment: {
        flexDirection :'row',
        marginTop:5,
        borderWidth:2,
        borderRadius:10,
        padding: 10,
        backgroundColor:'#4600F3'
        
    },
    columnAlignment :{
        marginLeft:5,
        marginRight:5
    },
    viewStyling :{
        alignItems:'center',
                
    }




}) 




export default Grid;