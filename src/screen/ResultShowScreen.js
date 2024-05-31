import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet , ScrollView , Image} from 'react-native';
import { useRoute } from '@react-navigation/native';
import yelp from '../Api/yelp';
import { FlatList } from "react-native-gesture-handler";


const ResultShowScreen = () =>{
    const route = useRoute();
    const { id } = route.params;
    const [result, setResult] = useState(null)
    const getImage = async (id) =>{
       const response =  await yelp.get(`/${id}`);
        setResult(response.data)
    };
    useEffect(() => {
        getImage(id)
    }, []);

    if(!result){
        return null
    }
    // console.log(id);
    // console.log(result)
   
    return (
        <View>
            <Text>{result.name}</Text> 
            <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
        </View>
    )
};

const styles = StyleSheet.create({

    image:{
        height:200,
        width:100
    }
})

export default ResultShowScreen;