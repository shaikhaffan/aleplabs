import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { ScrollView, Text, KeyboardAvoidingView,View,TextInput, TouchableOpacity,TouchableWithoutFeedback} from 'react-native'
import { scale } from "react-native-size-matters";
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './Styles/BlogcomponentStyle'
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
  Card,
  Header,
  Toast,

} from "native-base";
export default class Blogcomponent extends Component {
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
    console.log(props,"aDSFafds");
  }
  blogActionFunction = ()=>{
    console.log("function")
  }

  render () {
    return (
      <View style={{justifyContent:"center",alignItems:"center"}}>
          <View style={{width:"90%"}}>
              <View style={{marginTop:scale(10)}}>
                  <View><Text>Enter Title</Text></View>
                  <View>
                  <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    value={this.props.title}
                    onChangeText={text => this.props.onChangetext(text,"title")}
                  />
                  </View>
              </View>

              <View style={{marginTop:scale(10)}}>
                  <View><Text>Enter Content</Text></View>
                  <View>
                  <TextInput
                    multiline={true}
                    numberOfLines={4}
                    style={{ textAlignVertical:"top" ,borderColor: 'gray', borderWidth: 1 }}
                    value={this.props.body}
                    onChangeText={text => this.props.onChangetext(text,"body")}
                  />
                  </View>
              </View>

              <View style={{justifyContent:"center",alignItems:"center",}}>
                <TouchableOpacity   style={{width:"50%",borderWidth:scale(1),borderWidthColor:"#000",justifyContent:"center",alignItems:"center",marginTop:scale(10),}} onPress={ ()=>{this.props.blogAction()} }>
                  
                    <Text  style={{justifyContent:"center",alignItems:"center",padding:scale(10)}}>Save</Text>
                    
                </TouchableOpacity>
              </View>
        </View>
   </View>
    )
  }
}
