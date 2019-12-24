import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text,FlatList,TouchableOpacity,Image,SafeAreaView } from 'react-native'
import styles from './Styles/MostviewedStyle'
import {scale} from 'react-native-size-matters'

export default class Mostviewed extends Component {
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
    console.log(item,"mostviewed");
    return(
     <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
          <TouchableOpacity onPress={()=>{this.props.onPressOfProduct(item.madeBy)}}>
         <Image style={{  justifyContent: 'center',
       alignItems: 'center',
       height: 100,width:100}} source={{ uri: item.prodctImage }} />
        <Text>{item.title}</Text>
     </TouchableOpacity>
   
     </View>
    )
     
   }

  render () {
    return (
      <View style={styles.container}>
        <View style={{marginVertical:scale(10)}}><Text style={{color: this.props.textColor ||'#000',fontSize:scale(this.props.fontSize || 15 )}}>Most Viewed</Text></View>
        <SafeAreaView style={{flex: 1}}>
         <FlatList
          disableVirtualization={true}
          removeClippedSubviews = {true}
         showsHorizontalScrollIndicator={false}
         horizontal={true}
         data={this.props.data[0].categoryData}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => `${index}`}
            //Setting the number of column
        
          />
          </SafeAreaView>
      </View>
    )
  }
}
