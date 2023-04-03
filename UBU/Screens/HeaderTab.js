import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export default function HeaderTab(){

    const [activeTab , setActiveTab] = useState('Delivery');

    return(
        <View style = {{ alignSelf : 'center' , flexDirection : 'row' , marginTop : 10, }}>
          <HeaderButton 
           text = "Delivery"
           btncolor = 'black'
           textcolor = 'white' 
           activeTab = {activeTab}
           setActiveTab = {setActiveTab}/>
          <HeaderButton 
          text = "Pick Up" 
          btncolor = 'white'
          textcolor = 'black'
          activeTab = {activeTab}
          setActiveTab = {setActiveTab} />
        </View>
    );
}


const HeaderButton =(props)=>{
    return(
    <TouchableOpacity 
      style = {{
        backgroundColor : props.activeTab === props.textcolor  ? 'black' : 'white',
        paddingVertical : 6,
        paddingHorizontal : 16,
        borderRadius : 30,
        
      }}

      onPress = {()=> props.setActiveTab(props.textcolor)}
     >
    <Text 
      
      style = {{
        color :  props.activeTab === props.textcolor  ? 'white' : 'black',
        fontSize : 15,
        fontWeight : '900',
      }}
    >
        {props.text}
     </Text>
    </TouchableOpacity>
 
    )
}

