import React from 'react';

import {
    SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import HeaderTab from './HeaderTab';
import SearchBar from './SearchBar';
import Icon  from 'react-native-vector-icons/FontAwesome';
import catergories from './Catergories';
import Catergories from './Catergories';
import Restuarent from './Restuarent';

export default function Home(){
    return(
        <SafeAreaView style = {{}}>
        <View  style = {{backgroundColor : 'white' , padding : 15}}>
         <HeaderTab />
         <SearchBar/>
        </View>
        <ScrollView 
          showsVerticalScrollIndicator = {false}
        >
        <Catergories/>
        <Restuarent/>
        </ScrollView>
        </SafeAreaView>    
    );
}

