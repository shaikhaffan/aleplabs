import React, { Component } from 'react'
import {  Text,View,ActivityIndicator } from 'react-native'
import { scale } from "react-native-size-matters";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { ApplicationStyles,Colors } from '../Themes';
import { connect } from 'react-redux'
import SplashScreen from 'react-native-splash-screen';


import Blog from '../Components/Blog';
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
  Root
} from "native-base";

import HeaderComponent from '../Components/Header';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import HomeAction from "../Redux/HomeRedux";
// Styles
import styles from './Styles/commonScreenStyle'
class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fetching : false,
    }
  }

  

  callToast=(text,status)=>{
    console.log(text)
    Toast.show({
      text:text,
      buttonText: 'Okay',
      type : status,
      position : "bottom",
      duration:2500
    })
  }
  
  componentDidMount(){
   this.setState({fetching:true})
    this.props.getHomeData()
   
  }

 


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
            <Icon name='home' size={scale(25)} color={(focused) ? Colors.storePurpuleColor: Colors.storeTextColor} /> 
          <Text style={{ fontSize: scale(10) }}>Home</Text>
        </View>
      );
    },
    tabBarOnPress: ({ defaultHandler, navigation }) => {
      const { routeName } = navigation.state;
      if (routeName !== "CreateMatch") defaultHandler();
    }
  };

  navigatePage = (page,content) =>{
    console.log(page,"sdafasd")
    if(page == "EditblogScreen" || page == "ShowblogScreen"){
      this.props.navigation.navigate(page,{"blogData" : content});
    }else{
      this.props.navigation.navigate(page);
    }
  }
  
   componentWillReceiveProps(nextProps) {
    console.log(nextProps,"nextprops")
    if(nextProps.homeData.deletePayload ==true){
      this.callToast("Blog Deleted SuccessFully.","Success");
    }
    if(nextProps.homeData.deletePayload ==false){
      this.callToast("SomeThing Went Wrong.","Danger")
    }
    SplashScreen.hide()
    this.setState({fetching : nextProps.homeData.fetching})
  }

  deleteBlog = async (id) =>{
    this.setState({fetching:true})
    this.props.deleteB(id);
    
  }

  render () {
     return (   
      <Root>   
        <Container>
          <View  style={[(this.state.fetching == true)? styles.activityIndicator :styles.styleNothing ]}>
            <ActivityIndicator animating={this.state.fetching}  size='large' />
          </View>
          <HeaderComponent navigatePage={this.navigatePage} title="BLog Title" screen="home"/>
          <Content style={{}}>
            <Blog delete={this.deleteBlog} navigatePage={this.navigatePage} data={this.props.homeData.payload}/>        
          </Content>
        </Container>
    </Root> 
    )
  }
}

const mapStateToProps = state => {
  console.log(state, "stateherer");
   return {
     homeData: state.homeData,
     
   };
 };
 
 const mapDispatchToProps = dispatch => {
   console.log("dispatchAction");
   return {
    //deleteBlogData: (id) => dispatch(HomeAction.homeRequest({'id' : id})),
    getHomeData: () => dispatch(HomeAction.homeRequest("s")),
    deleteB: (id) => { console.log("dispatchdelete");dispatch(HomeAction.deleteBlog({"id":id}))}
    
   };
 };


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
