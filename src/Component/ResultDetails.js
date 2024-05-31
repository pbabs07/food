import React from "react";
import {View, Image, StyleSheet, Text} from 'react-native';


const ResultDetails = ({result}) => {

    return(

        <View style={styles.viewStyle}>
            <Image style={styles.imageStyle} 
                 source={{uri:result.image_url}}/>
            <Text style={styles.nameStyle} >
                {result.name}
               
            </Text>
            <Text> {result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
}
 
const styles = StyleSheet.create({

    viewStyle:{
        marginLeft:15,
        marginBottom:10,
    },

    imageStyle:{
        width:250,
        borderRadius:5,
        height:120,
        marginBottom:5,

    },
    nameStyle:{
        fontWeight:'bold',
     

    }

})
export default ResultDetails;