import React,{Component} from 'react'

import {StyleSheet, View,Text} from 'react-native'


export default class Connect extends Component {


render (){


    return (
    <View style={styles.root}>
        <Text>Hi , my name is salah </Text>
    </View>
    );
}

} 


const styles = StyleSheet.create({
    root: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }


}) 


