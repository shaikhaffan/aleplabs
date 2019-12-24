import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView,View,TextInput,TouchableWithoutFeedback } from 'react-native';

import { scale, ScaledSheet } from "react-native-size-matters";
//import Icon from 'react-native-vector-icons/MaterialIcons';
//import Ionicons from 'react-native-vector-icons/Ionicons';
import Myaccountheader from '../Components/Myaccountheader';
import { ApplicationStyles,Colors,Fonts } from '../Themes';
import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'


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
  Radio,
  Input
} from "native-base";
// Styles


class AddaddressScreen extends Component {
  render () {
    return (
      <Container>
        <Myaccountheader  headerheight={scale(80)}   
        />
        <Content  contentContainerStyle={{  }}>
          <View style={{justifyContent:"center",alignItems:"center"}}>
            <View style={{width:"95%"}}>
              <View style={{flexDirection:"row",marginVertical:scale(20)}}>
                  <View style={{width:scale(50),}}><Text>Name</Text></View>
                  <View style={{flex:1,marginLeft:scale(20)}}>
                  <TextInput
                          style={{ height: 35, borderColor: 'gray', borderBottomWidth: 1 }}
                        
                    />
                </View>   
              </View>
              <View style={{flexDirection:"row",marginVertical:scale(20),}}>
                <View style={{width:scale(50),}}><Text>Address</Text></View>
                <View style={{flex:1,marginLeft:scale(20)}}>
                 <TextInput
                        style={{ height: 35, borderColor: 'gray', borderBottomWidth: 1 }}
                     
                        
                  />
               </View>    
              </View>
              <View style={{flexDirection:"row",marginVertical:scale(20),}}>
                <View style={{width:scale(50),}}><Text>Phone</Text></View>
                <View style={{flex:1,marginLeft:scale(20)}}>
                 <TextInput
                        style={{ height: 35, borderColor: 'gray', borderBottomWidth: 1 }}
                       
                        
                  />
               </View>  
              </View>
              <View style={{flexDirection:"row",marginVertical:scale(20),}}>
                <View style={{width:scale(50),}}><Text>Email</Text></View>
                <View style={{flex:1,marginLeft:scale(20)}}>
                 <TextInput
                        style={{ height: 35, borderColor: 'gray', borderBottomWidth: 1 }}
                       
                        
                  />
               </View>   
              </View>
                                
            </View>
          </View>
        
        </Content>
        <Footer style={{backgroundColor:Colors.storePurpuleColor}}>
          <TouchableWithoutFeedback >
              <View style={{width:"100%",justifyContent:"center",alignItems:"center"}}><Text style={{color:"#fff",fontSize:Fonts.size.font15,fontFamily:Fonts.type.fontBold}}>Save</Text></View>
          </TouchableWithoutFeedback>
         </Footer>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddaddressScreen)
