import React from 'react'
import { View,StyleSheet} from 'react-native';
import { Text } from 'react-native-elements';

 
const Header =(props)=>{

return (
<View style={styles.container}>

    <Text style={styles.textStyle}>{props.children}</Text>

</View>
);
}

const styles = StyleSheet.create({
    
    container:{
        alignItems :'center', 
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        paddingBottom:8,
        marginBottom:50 
    
    },
    textStyle:
        {
           marginTop:55,
           fontSize:30,
           fontFamily:'monospace'
        }


  });

export default Header;