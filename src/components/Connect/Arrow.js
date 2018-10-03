import React,{Component} from 'react'

import {StyleSheet,View,Text} from 'react-native'


class Arrow extends Component{


    render(){
    
        return (<View style={styles.arrowStyling}>


        </View>
        );    
    }
}

const styles =StyleSheet.create({


    arrowStyling:{

        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 15,
        borderRightWidth: 15,
        borderBottomWidth: 30, 
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'red',
        transform: [
            {rotate: '180deg'}
          ]       
    }

});

export default Arrow;