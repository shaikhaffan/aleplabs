import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView,View,TextInput, TouchableWithoutFeedback,ActivityIndicator} from 'react-native'
import { scale } from "react-native-size-matters";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { ApplicationStyles,Colors } from '../Themes';
import { connect } from 'react-redux'
import HomeAction from "../Redux/HomeRedux";
import Blogcomponent from "../Components/Blogcomponent";
import HeaderComponent from '../Components/Header';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/AddblogScreenStyle'
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
  Root,
  Spinner,
  root
} from "native-base";
class AddblogScreen extends Component {

  constructor(props){
    super(props);
    this.state ={
      title : "",
      body : "",
      fetching : this.props.homeData.fetching
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
  
  blogAction = ()=>{
    this.setState({fetching:true})
     let data = {
      title:this.state.title,
      body:this.state.body
    };
    this.props.addBlog(data)
  }

  navigatePage = (page,content) =>{
  
    this.props.navigation.navigate(page);
   
  }
  onChangetext = (text,field)=>{
    console.log(text);
    this.setState({[field]:text})
  }

  goBack = ()=>{
    this.props.navigation.goBack();
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.homeData,"nextprops");
    if(nextProps.homeData.addBlogPayload ==true){
      this.callToast("Blog Added SuccessFully.","Success");
    }
    if(nextProps.homeData.addBlogPayload ==false){
      this.callToast("SomeThing Went Wrong.","Danger")
    }
    this.setState({fetching:nextProps.homeData.fetching})
  }




  render () {
    console.log(this.props.homeData);
    return (
      
      <Root>
      <Container>
      <View  style={[(this.state.fetching == true)? styles.activityIndicator :styles.styleNothing ]}>
        <ActivityIndicator animating={this.state.fetching}  size='large' />
      </View>
      <HeaderComponent goBack={this.goBack} navigatePage={this.navigatePage} title="Add Blog" screen="addblog"/>
      <Content style={{}} >
        <Blogcomponent title={this.state.title} body={this.state.body} blogAction={this.blogAction} onChangetext={this.onChangetext} />
      </Content>
    </Container>
    </Root>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state,"addblogstate");
  return {
    homeData: state.homeData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBlog: (data) => {dispatch(HomeAction.addBlog(data))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddblogScreen)

