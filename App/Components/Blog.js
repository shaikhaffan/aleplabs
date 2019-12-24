import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text,FlatList,TouchableWithoutFeedback,TouchableOpacity } from 'react-native'
import styles from './Styles/BlogStyle'
import { scale } from "react-native-size-matters";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { ApplicationStyles,Colors } from '../Themes';
export default class Blog extends Component {
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

  constructor(props){
    super(props);
    //console.log(this.props,"props")
  }
  _renderItem = ({item}) => {
 
    return(
      <View >
         <TouchableOpacity onPress={ ()=> this.props.navigatePage("ShowblogScreen",item)} style={{padding:scale(10),borderWidth:scale(1),borderWidthColor:"#000",flexDirection:"row",justifyContent:"space-between"}} onpress={()=>{this.props.navigatePage("ShowblogScreen")}}>
            <View style={{width:'90%'}}><Text numberOfLines={1} style={{ fontSize:scale(20) }}>{item.title}</Text></View>
              <View style={{justifyContent:"space-between",flexDirection:"row",alignItems:"center"}}>
            

                <TouchableWithoutFeedback onPress={()=>{this.props.delete(item.id)}}>
                    <Icon name="delete"  size={scale(20)}/>
                </TouchableWithoutFeedback>
              </View>
          </TouchableOpacity>
      </View>
    )
     
   }

  render () {
    const {data} = this.props;
    //console.log(data);
    return (
      <View >
        <FlatList
            scrollEnabled={false}
             data={this.props.data}
             disableVirtualization={true}
             removeClippedSubviews = {true}
             renderItem={this._renderItem}
             keyExtractor={(item, index) => `${index}`}
             //Setting the number of column
          
            />
      </View>
    )
  }
}
