import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { TextInput } from "react-native-gesture-handler";

const SearchBar = ({term, onTermChange, onTermSubmit}) =>{

return(
    <View style={styles.Searchstyle}> 
        <FontAwesome5 name="search" 
            size={24} color="black" 
            style={styles.iconStyle} />
        <TextInput  
            onEndEditing={ onTermSubmit}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Search"
            style={styles.TextinputStyle} 
            value={term}
            onChangeText={onTermChange}
           
        />
      
    </View>
)
};

const styles = StyleSheet.create({
    Searchstyle:{
        backgroundColor:'lightgray',
        marginTop:20,
        marginLeft:15,
        marginBottom:10,
        marginRight:15,
        height:50,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
      
      },
      iconStyle:{
        marginLeft:15
      },

      TextinputStyle:{
        marginLeft:15,
        fontSize:18
      }

});

export default SearchBar;

