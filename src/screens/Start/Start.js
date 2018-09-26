import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

 
export default class Start extends Component {

    goToTic=()=>{
        this.props.history.push("/tic");
    }

    goToConnect=()=>{
        this.props.history.push("/connect4");
    }

  render() {
    return (
      <View style={styles.root}>

        <Button style={{marginBottom:20}} title="Tic Tac Toe" onPress={this.goToTic} />
        <Button style={styles.button} title="Connect Four (Under Construction)" onPress={this.goToConnect} />        
        
       
    </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex:1,
    justifyContent: 'center',
    alignItems:'center'
  }
});
