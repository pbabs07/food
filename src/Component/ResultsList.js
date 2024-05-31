import React from "react";
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import ResultDetails from "./ResultDetails";
import { useNavigation } from '@react-navigation/native';

const ResultsList = ({title, results, }) => {
    const navigation = useNavigation();
    return(
        <View > 
            <Text style={styles.titleStyle}>
                {title} 
                  {/* Results: {results.length} */}
            </Text>

            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({item}) => {
                    return (
                      <TouchableOpacity onPress={()=>navigation.navigate('ResultsShow', {id: item.id})}>
                            <ResultDetails result={item} />
                      </TouchableOpacity>  
                    )
                }}
            />
        </View>

    )
}

const styles = StyleSheet.create({

    titleStyle:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:5,
        color:'purple'
      
      }
})

export default ResultsList;

