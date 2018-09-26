//import firebase from 'firebase'
import React, {Component} from 'react';
import {TextInput,Platform, StyleSheet, Text, View} from 'react-native';
import Tic from './src/screens/Tic/Tic';
import Start from './src/screens/Start/Start';

import { NativeRouter,Route, Switch } from 'react-router-native';

import Connect from './src/screens/Connect/Connect'

 
export default class App extends Component {


    componentWillMount(){

      // firebase.initializeApp({ 
      //     apiKey: "AIzaSyAuzq4XPVToJ_NRgFHE3aUKac6ktwHTJGQ",
      //     authDomain: "my-tic-tac-toe-24f63.firebaseapp.com",
      //     databaseURL: "https://my-tic-tac-toe-24f63.firebaseio.com",
      //     projectId: "my-tic-tac-toe-24f63",
      //     storageBucket: "my-tic-tac-toe-24f63.appspot.com",
      //     messagingSenderId: "351395654031"
      //  });
    }


  render() {
    return (
      <NativeRouter>
      <Switch>
        <Route path="/" exact component={Start} />          
        <Route path="/tic" component={Tic} />
        <Route path="/connect4" component={Connect} />        
      </Switch>
    </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  
});
