import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView,View,TouchableWithoutFeedback,TouchableOpacity } from 'react-native'
import { scale, ScaledSheet } from "react-native-size-matters";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Myaccountheader from '../Components/Myaccountheader';
import { ApplicationStyles,Colors,Fonts } from '../Themes';
import { connect } from 'react-redux'
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
  Radio
} from "native-base";
// Styles
import styles from './Styles/PaymentScreenStyle'

class PaymentScreen extends Component {
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
                  <Text style={{fontSize:Fonts.size.font15,color:Colors.storePurpuleColor}}>Credit/Debit/ATM Card</Text>
                 
              </View>  
           </View>
           <View style={{marginVertical:scale(20),flexDirection:"row"}}>
                <View style={{justifyContent:"center"}}>
                <Radio selected={false} selectedColor={Colors.storePurpuleColor} />
                </View>
                <View style={{marginLeft:scale(15)}}>
                  <Text style={{fontSize:Fonts.size.font15,color:Colors.storePurpuleColor}}>Cash On Delivery</Text>
                 
              </View>  
           </View>
           <View style={{marginVertical:scale(20),flexDirection:"row"}}>
                <View style={{justifyContent:"center"}}>
                <Radio selected={false} selectedColor={Colors.storePurpuleColor} />
                </View>
                <View style={{marginLeft:scale(15)}}>
                  <Text style={{fontSize:Fonts.size.font15,color:Colors.storePurpuleColor}}>Other Payment Method</Text>                 
               </View>  
           </View>

              <View style={{paddingVertical:scale(10),justifyContent:"center",alignItems:"center",borderBottomWidth:scale(1),borderBottomColor:Colors.storeTextColor}}>
                  <View style={{width:"100%"}}><Text style={{color:Colors.storePurpuleColor}}>Price Details</Text></View>
              </View>

              <View style={{paddingVertical:scale(10),justifyContent:"center",alignItems:"center",borderBottomWidth:scale(1),borderBottomColor:Colors.storeTextColor}}>
                <View style={{width:"100%",flexDirection:"row",justifyContent:"space-between"}}>
                  <View >
                    <Text>Price(1 Item)</Text>
                    <Text style={{marginTop:scale(10)}}>Delivery Fee</Text>
                  </View>
                  <View>
                    <Text>Qr 500 </Text>
                    <Text  style={{marginTop:scale(10)}}>Qr 5</Text>
                  </View>
                </View>
            
          </View>
          <View style={{paddingVertical:scale(10),justifyContent:"center",alignItems:"center",borderBottomWidth:scale(1),borderBottomColor:Colors.storeTextColor}}>
          <View style={{width:"100%",flexDirection:"row",justifyContent:"space-between"}}>
            <View>
            
              <Text style={{color:Colors.storePurpuleColor}}>Total Amount</Text>
            </View>
            <View>
             
              <Text>Qr 5000</Text>
            </View>
          </View>
        </View>

        <View style={{width:'100%',marginTop:scale(20),flexDirection:"row"}}>
          <View style={{flex:1,justifyContent:"center"}}>
            <Text>QAR 4500/-</Text>
          </View>
          <View  style={{flex:1,justifyContent:"center",alignItems:"flex-end"}}>
            <Text style={{backgroundColor:Colors.storePurpuleColor,paddingVertical:scale(5),paddingHorizontal:scale(25),color:"#fff",fontFamily:Fonts.type.fontBold}}>Countinue</Text>
          </View>
          </View>

          </View>


        
        </View>
      </Content>
       
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

export default connect(mapStateToProps, mapDispatchToProps)(PaymentScreen)
