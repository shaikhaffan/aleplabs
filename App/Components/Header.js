import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text ,TextInput,Image,StatusBar,Dimensions,TouchableOpacity,TouchableWithoutFeedback  } from 'react-native'
import {Fonts,Colors} from '../Themes/index'
import { scale } from "react-native-size-matters";
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './Styles/HeaderStyle'
import LinearGradient from 'react-native-linear-gradient';

import {
  Container,
  Header,
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

const { width, height } = Dimensions.get('window');
const style = {
  padding:0,
  elevation:0,
  width:'100%',
  ...Platform.select({ios: {height: 110}}),
  backgroundColor:"transparent",
  flexDirection:'column',
  justifyContent:'flex-start'
}
export default class HeaderComponent extends Component {

  constructor(props){
    super(props);
    console.log(props,"adfqadfw",this.props.navigation)
  }
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

   gobackFunction = () => {
     console.log("asdfgasdfsadfg,search")
    this.props.pressGoback()
  }
  
  onPressOfButton = (type)=>{
    this.props.navigatePage(type);
  }

  render () {
    return (
      <Header style={{}}>
       <Left style={{flex:1}}>
         {(this.props.screen != "home")?
                 <TouchableWithoutFeedback onPress={()=>{this.props.goBack()}}>
                 <Icon name="keyboard-backspace" size={scale(20)} />
                 </TouchableWithoutFeedback>
                 :<View/>
        }
        </Left>
       <Body style={{flex:1,justifyContent:"center",alignItems:"center"}}>
          <Title style={{justifyContent:"center",alignItems:"center"}}>{this.props.title}</Title>
       </Body>
       <Right style={{flex:1}}>
       {(this.props.screen == "home")?
         <TouchableWithoutFeedback onPress={()=> this.onPressOfButton("AddblogScreen") }>
           <Icon name='add' size={scale(25)} />
           </TouchableWithoutFeedback>
        :<View/>}
        {(this.props.screen == "showblog")?
         <TouchableWithoutFeedback onPress={()=> this.onPressOfButton("EditblogScreen")} >
           <Icon name='edit' size={scale(25)} />
           </TouchableWithoutFeedback>
        :<View/>}
       </Right>
      </Header>
    )
  }
}
