import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View,Image, Text,FlatList,TouchableOpacity } from 'react-native'
import styles from './Styles/ProductStyle'
import { scale } from 'react-native-size-matters';
import {Fonts,Colors} from '../Themes/index'
export default class CategorySlider extends Component {
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
      console.log(item.title,"itemsssss")
   return(
    <View style={{ }}>
        <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={()=>{this.props.onPressOfProduct()}}>
            <View style={{borderRadius:scale(100),height: scale(this.props.commonProps.imageHeight),borderColor:Colors.storeTextColor,width:scale(this.props.commonProps.imageWidth)}}>
                <Image style={{borderRadius:scale(100),  justifyContent: 'center',
                alignItems: 'center',
                height: scale(this.props.commonProps.imageHeight),width:scale(this.props.commonProps.imageWidth)}} source={{ uri: item.image }}
                 />
               
            </View>
            <View style={{marginTop:scale(5)}}><Text style={{fontFamily:Fonts.type.fontRegular,color:Colors.storeTextColor}}>{item.title}</Text></View>
        </TouchableOpacity>
    </View>
   )
    
  }

  render () {
    console.log(this.propsata,"qwert")
    return (
        <View style={{justifyContent:'center',alignItems:'center'}}>
            <View style={{ width:'95%', justifyContent: 'center',
            flex: 1,
            paddingTop: 30,}}>
                <FlatList
                    
                    horizontal
                    data={this.props.data}
                    disableVirtualization={true}
                    removeClippedSubviews = {true}
                    renderItem={this._renderItem}
                    keyExtractor={(item, index) => `${index}`}
                    ItemSeparatorComponent={() => <View style={{margin: scale(5)}}/>}
                />
            </View>
    </View>
    )
  }
}
