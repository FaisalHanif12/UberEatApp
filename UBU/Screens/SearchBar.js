
import React from 'react';

import {
  Text,
  TextInput,
  View,
} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import  Icon  from 'react-native-vector-icons/Entypo';


export default function SearchBar(){
    return(

      


       <View>

      <View  style = {{marginTop: 10 , flexDirection : 'row' , alignItems : 'center',
          width : '100%',
          borderRadius : 30,
          backgroundColor : "#eee",
          paddingLeft : 10, 
     }}>
      <Icon name='location-pin'
       size={20}
       color="black" />
      <TextInput 
      placeholder='Search'
     />
       

       <Text style = {{ width : 80, height : 30, paddingLeft:15,paddingTop:5, backgroundColor : 'white', marginLeft :210 , borderRadius : 10,}}>
       <Icon name='clock'
       size={10}
       color="black"
       
       />
           Search
         
       </Text>
     </View>
    
   </View>

    );
} 