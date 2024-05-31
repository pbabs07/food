import React, { useState } from 'react';
import { View, Text, StyleSheet , ScrollView} from 'react-native';
import SearchBar from '../Component/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../Component/ResultsList';

const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();
  const filterResultsByPrice = price => {
    // price === '$' || '$$' || '$$$'
    return results.filter(result => {
      return result.price === price;
    });
  };
  return (
    <>
    <View style={{flex:1}}>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      {errorMessage? <Text> {errorMessage} </Text>: null }
     
      {/* <Text>We have found {results.length} results</Text> */}
      <ScrollView>
          <View style ={styles.titleStyle} > 
            <ResultsList 
                title='Cost Effective'
                results={filterResultsByPrice('$')}
                navigation={navigation}
              
              />
            <ResultsList 
                title='Bit Pricer'
                results={filterResultsByPrice('$$')}
                navigation ={navigation}
              />
            <ResultsList 
                title='Big Spender' 
                results={filterResultsByPrice('$$$')}
                navigation ={navigation}
              />
          </View>
          </ScrollView>
     
    </View>
    
    </>
  );
};

const styles = StyleSheet.create({
  titleStyle:{
    marginLeft:15,
   
  }
});

export default SearchScreen;
