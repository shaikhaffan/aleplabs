import React, { Component } from 'react'
import {  Text,View, KeyboardAvoidingView,ScrollView,BackHandler,Alert  } from 'react-native'
import { scale } from "react-native-size-matters";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { ApplicationStyles,Colors } from '../Themes';
import { connect } from 'react-redux'
import Blog from '../Components/Blog';
import {
  Container,
  Content,
  Toast,
  Root
} from "native-base";

import HeaderComponent from '../Components/Header';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/FavouritesScreenStyle'

class FavouritesScreen extends Component {

  static navigationOptions = {
    headerMode: 'none',
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      activeTintColor: "#f8d224",
      inactiveTintColor: "#000000",
      style: {
        backgroundColor: "transparent",
        borderTopWidth: 1,
        borderTopColor: "#ffffff10"
      }
    },
    tabBarIcon: ({ focused, tintColor }) => {
      return (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Icon name='favorite' size={scale(25)} color={(focused) ? Colors.storePurpuleColor: Colors.storeTextColor} /> 
          <Text style={{ fontSize: scale(10) }}>Favourites</Text>
        </View>
      );
    },
    tabBarOnPress: ({ defaultHandler, navigation }) => {
      const { routeName } = navigation.state;
      if (routeName !== "CreateMatch") defaultHandler();
    }
  };
  goBack = ()=>{
    this.props.navigation.goBack();
  }

  render () {
    return (
      <Container>
    
      <HeaderComponent goBack={this.goBack} navigatePage={this.navigatePage} title="Favourites" screen="favourites"/>
      <Content style={{}}>
        <View><Text>Recent Screen</Text></View>      
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

export default connect(mapStateToProps, mapDispatchToProps)(FavouritesScreen)
