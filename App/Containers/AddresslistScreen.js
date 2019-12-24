import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView ,View,Image,TouchableOpacity,TouchableWithoutFeedback} from 'react-native'
import { scale, ScaledSheet } from "react-native-size-matters";
//import Icon from 'react-native-vector-icons/MaterialIcons';
//import Ionicons from 'react-native-vector-icons/Ionicons';
import Myaccountheader from '../Components/Myaccountheader';
import { ApplicationStyles,Colors,Fonts } from '../Themes';
import { connect } from 'react-redux'

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
  Radio
} from "native-base";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/AddresslistScreenStyle'



class AddresslistScreen extends Component {

  constructor(props){
    super(props);
    this.state={
      types: [
        {label: 'paramo', value: 0,address:"address1" }, 
      ],
    }
  }
  
  render () {
    return (
      <Container>
      <Myaccountheader  headerheight={scale(80)}   
      />
      <Content  contentContainerStyle={{  }}>
        <View style={{justifyContent:"center",alignItems:"center"}}>
          <View style={{width:"90%"}}>
            <View style={{marginVertical:scale(20),flexDirection:"row"}}>
                <View style={{justifyContent:"center"}}>
                <Radio selected={true} selectedColor={Colors.storePurpuleColor} />
                </View>
                <View style={{marginLeft:scale(15)}}>
                  <Text style={{fontSize:Fonts.size.font15,color:Colors.storePurpuleColor}}>Deliver here,initial</Text>
                  <Text style={{fontSize:Fonts.size.small,}}>Mig57,1223,qwreqwe,qwerqwal</Text>
              </View>  
           </View>
           <View style={{marginVertical:scale(20),flexDirection:"row"}}>
                <View style={{justifyContent:"center"}}>
                <Radio selected={true} selectedColor={Colors.storePurpuleColor} />
                </View>
                <View style={{marginLeft:scale(15)}}>
                  <Text style={{fontSize:Fonts.size.font15,color:Colors.storePurpuleColor}}>Deliver here,initial</Text>
                  <Text style={{fontSize:Fonts.size.small,}}>Mig57,1223,qwreqwe,qwerqwal</Text>
              </View>  
           </View>
          </View>


          <View style={{justifyContent:"center",alignItems:"center",backgroundColor:Colors.storePurpuleColor,width:'100%',opacity:0.4}}>
            <TouchableWithoutFeedback>
              <View style={{width:"90%"}}>
                <View style={{marginVertical:scale(20),flexDirection:"row"}}>
                    <View style={{justifyContent:"center"}}>
                   <Icon name="add-circle-outline" size={scale(20)} />
                    </View>
                    <TouchableWithoutFeedback onPress={()=>{this.props.navigation.navigate("AddaddressScreen")}}>
                        <View style={{marginLeft:scale(15)}}>
                          <Text style={{fontSize:Fonts.size.font15,color:Colors.storePurpuleColor,fontFamily:Fonts.type.fontBold}}>Add New Address</Text>
                        </View>  
                   </TouchableWithoutFeedback>
              </View>
              </View>
              </TouchableWithoutFeedback>
          </View> 
        </View>
      </Content>
      <Footer style={{backgroundColor:Colors.storePurpuleColor}}>
        <TouchableOpacity  style={{width:"100%",justifyContent:"center",alignItems:"center"}}>
             <View><Text style={{color:"#fff",fontSize:Fonts.size.font15,fontFamily:Fonts.type.fontBold}}>CONFIRM LOCATION</Text></View>
        </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddresslistScreen)
