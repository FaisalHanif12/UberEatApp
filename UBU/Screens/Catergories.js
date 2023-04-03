import React from 'react';

import {
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

const Items =[
    {
        images : require('../assets/images/shopping-bag.png'),
        text : "PickUp",
    },
    {
        images : require('../assets/images/soft-drink.png'),
        text : "Soft Drinks",
    },
    {
        images : require('../assets/images/bread.png'),
        text : "Bakery Items",
    },
    {
        images : require('../assets/images/fast-food.png'),
        text : "Fast Food",
    },
    {
        images : require('../assets/images/coffee.png'),
        text : "Coffee & Tea ",
    },
    {
        images : require('../assets/images/deals.png'),
        text : "Deals",
    },
    {
        images : require('../assets/images/desserts.png'),
        text : "Desserts",
    },

];

export default function Catergories(){
     return(

        <View 
        
           style = {{
                 marginTop : 10,
                 backgroundColor : '#fff',
                 paddingVertical : 10,
                 paddingHorizontal : 5,
           }}
        >

        
        <ScrollView  
           horizontal

           showsHorizontalScrollIndicator = {false}
        >

            {Items.map((item,index) =>(

          
            <View  

            key={index}
            
            style = {{alignItems : 'center' ,marginLeft : 5,marginRight : 20}}>

            <Image source={item.images}
                style = {{
                    width : 58,
                    height : 40,
                    resizeMode : 'contain',
                    marginRight : 10,
                }}
            />

            <Text style = {{
                fontSize : 13,
                fontWeight : '900',
                marginRight : 10,
            }}>
               {item.text}
            </Text>
            </View>

            ))}
        </ScrollView>
        </View>
       
     )
}

