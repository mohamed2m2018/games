import React,{Component} from 'react'

import {StyleSheet, View,Text,Button} from 'react-native'

import Grid from '../../components/Connect/Grid'

import Arrow from '../../components/Connect/Arrow'

import Expo from "expo"
import Header from '../../components/Header';


export default class Connect extends Component {
    

    componentDidMount() {
       // Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE);
    }

render (){


    return (
    <View style={styles.root}>
       
        <Grid></Grid>
    </View>
    );
}

} 


const styles = StyleSheet.create({
    root: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#B6B6B6',
        
        
    }


}) 


