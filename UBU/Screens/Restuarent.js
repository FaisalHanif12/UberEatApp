import React from 'react';

import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';

const localRestuarent = [

    {name : "Gourmet Restauent ",
     image : require("../assets/images/Res.jpeg"),
     reviews : 1244,
     rating : 4.4,
     price : '$20',
    },

    {name : "Yasir Brost",
    image : require("../assets/images/Res7.jpeg"),
    reviews : 1300,
    rating : 4.8,
    price : '$25',
   },

   {name : "Monal Restaurent ",
   image : require("../assets/images/Res4.jpeg"),
   reviews : 1300,
   rating : 4.9,
   price : '$30',
  },

  {name : "PIND Restuarent",
  image : require("../assets/images/Res5.jpeg"),
  reviews : 1044,
  rating : 4.0,
  price : '$10',
  },
  {name : "Lal Qila",
 image : require("../assets/images/Res6.jpeg"),
 reviews : 1044,
 rating : 4.0,
 price : '$34',
  },
];

export default function Restuarent(){
    return(
       

        <TouchableOpacity>
           {localRestuarent.map((restuarent , index)=>(

          
          <View  key = {index} style = {{ marginTop : 10, padding : 10 , backgroundColor : 'white'}}>
          <Restuarentimage image = {restuarent.image}/>
          <Restuarentinfo name = {restuarent.name} rating = {restuarent.rating}/>
          </View>
          ))}
        </TouchableOpacity>
);

}


const Restuarentimage =(props)=>{
    
    return(
        <View>

        
          <Image source= {props.image}
          style = {{
             width : '100%',
             height : 200,
          }}

        />     

        <TouchableOpacity 
          
          style = {{position : 'absolute', right : 20, top : 20,}}
        >

            <MaterialCommunityIcons name= 'cards-heart-outline' color='white' size={20} />

        </TouchableOpacity>
        </View>
        
    )

}


const Restuarentinfo =(props)=>{
    return(
    <View style = {{flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center', marginTop : 5}}>
       <View>
       <Text style = {{fontSize : 15, fontWeight : 'bold'}}>
        {props.name}
       </Text>
       <Text style = {{fontSize : 13, color : 'grey'}}>
        30-40 min
       </Text>
       </View>
       <View style = {{backgroundColor : '#eee' , marginRight : 10, height : 30, width : 30 , alignItems : 'center', justifyContent : 'center', borderRadius : 15 }}>
       <Text>
        {props.rating}
       </Text>
       </View>
       
    </View>
    )
}