import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text,FlatList,TouchableOpacity,Image,SafeAreaView,TouchableWithoutFeedback } from 'react-native'
import {Fonts,Colors} from '../Themes/index'
//import { scale } from "react-native-size-matters";
import Icon from 'react-native-vector-icons/MaterialIcons'
export default class RecommendedComponent extends Component {
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
    console.log(this.props,"recommended");
  }
  onPressOfProduct = (type)=>{
    this.props.onPressOfProduct(type);
  }

  _renderItem = ({item}) => {

    return(
     <View style={{paddingVertical:scale(10),justifyContent:"center",alignItems:"center",borderColor:Colors.storeTextColor,borderWidth:scale(1),flex: 1, margin: 1,width:scale(120) }}>
            <View style={{position:'absolute',zIndex:9999,right:scale(3),top:scale(3)}}>
              <TouchableWithoutFeedback>
                <TouchableOpacity>
                   <Icon name='star-border' size={scale(25)} style={{}}/>
                </TouchableOpacity>
                </TouchableWithoutFeedback>    
            </View>
          <TouchableWithoutFeedback onPress={()=> this.props.onPressOfProduct(this.props.productType)}>
          
              <View>
                 
                 <Image style={{  justifyContent: 'center',
                alignItems: 'center',
                height: 100,width:100}} source={require('../Images/product1.png')} />
                <View style={{paddingVertical:scale(10),justifyContent:'center',alignItems:'center'}}>
                    <Text>{item.title}</Text>
                    <Text style={{marginTop:scale(5)}}>{`QAR ${item.price}`}</Text>
                </View>
              </View>
         </TouchableWithoutFeedback>
   
     </View>
    )
     
   }

  render () {
    return (
      <View style={{}}>
        <View style={{marginVertical:scale(10)}}><Text style={{color: this.props.textColor ||'#000',fontSize:scale(this.props.fontSize || 15 )}}>{this.props.cardText || 'CacADC'}</Text></View>
            <SafeAreaView style={{flex: 1}}>
            <FlatList
            ItemSeparatorComponent={() => <View style={{margin: scale(5)}}/>}
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
