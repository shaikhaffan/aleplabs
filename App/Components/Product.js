import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View,Image, Text,FlatList,TouchableOpacity,Dimensions } from 'react-native'
import styles from './Styles/ProductStyle'
//import {Fonts,Colors} from '../Themes/index'
import { scale } from "react-native-size-matters";
//import Icon from 'react-native-vector-icons/MaterialIcons'
import {
  Container,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Card
} from "native-base";
export default class Product extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }
  _renderItem = ({item}) => {
    console.log(item,"items");
    return(
      <Card  style={{ paddingVertical:scale(10),borderColor:Colors.storeTextColor,borderWidth:scale(1), margin: 1, width:"50%", justifyContent:"center",alignItems:"center",flexDirection: 'column', margin: 1 }}>
     <View >
      
       <TouchableOpacity onPress={()=>{this.props.onPressOfProduct(item.madeBy)}}>
         <Image style={{  justifyContent: 'center',
       alignItems: 'center',
       height: 100,width:100}} source={{ uri: item.image }} />
        <Text>{item.title}</Text>
     </TouchableOpacity>
    
     </View>
     </Card>
    )
     
   }

   renderSeparator = () => (
    <View
      style={{
        backgroundColor: 'red',
        height:scale(20),
      }}
    />
  );

  render () {
    console.log(this.propsata,"qwert")
    return (
      <View style={{justifyContent:"center",alignItems:"center",}}>  
        <View style={{width:'95%',
       }}>
          <FlatList
             data={this.props.data}
             disableVirtualization={true}
             removeClippedSubviews = {true}
             renderItem={this._renderItem}
             keyExtractor={(item, index) => `${index}`}
             //Setting the number of column
             numColumns={2}
             ItemSeparatorComponent={() => (
              <View style={{height:scale(10),width:scale(10)}} />
            )}
              
          
            />
      </View>
    </View>
    )
  }
}
