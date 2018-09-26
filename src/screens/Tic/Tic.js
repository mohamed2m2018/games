
import React, {Component} from 'react';
import {StyleSheet,BackHandler, Text, View} from 'react-native';
import Header from '../../components/Header';
import Grid from '../../components/Tic/Grid';


 
export default class Tic extends Component {

  componentDidMount(){
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
  }

  componentWillUnmount(){
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }

  handleBackButton=()=>{
    console.log("I am here");
    this.props.history.push('/');
    return true;
  };

  render() {
    return (
      <View>
        <Header>My Tic Tac Toe </Header>
        <Grid />   
      </View>
           

    );
  }
}

const styles = StyleSheet.create({
  
});
