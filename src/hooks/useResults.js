import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import yelp from '../Api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
  
    const searchApi = async searchTerm => {
      console.log('initial search!');
      try {
        const response = await yelp.get('/search', {
          params: {
            limit: 50,
            term: searchTerm,
            location: 'san jose'
          }
        });
        setResults(response.data.businesses);
      } catch (err) {
        setErrorMessage('Something went wrong');
      }
    };
  

    // searchApi('pasta');
    useEffect(() => {
      searchApi('pasta');
    }, []);
  
    return [searchApi, results, errorMessage];
};
