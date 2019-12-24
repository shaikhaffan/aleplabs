import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView,View,TextInput,TouchableWithoutFeedback,Alert,ActivityIndicator } from 'react-native'
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
//import styles from './Styles/EditblogScreenStyle'
import styles from './Styles/commonScreenStyle'
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
class EditblogScreen extends Component {

  constructor(props){
    super(props);
    console.log(props,"props")
    this.state={
      title: this.props.navigation.state.params.blogData.title,
      body : this.props.navigation.state.params.blogData.body,
      fetching : false
    }
  
  }

  blogAction = ()=>{
    this.setState({fetching:true})
    let data =  {
      id : this.props.navigation.state.params.blogData.id, 
      title:this.state.title,
      body:this.state.body,
    };
    this.props.editBloged(data);
  }
 
  goBack = ()=>{
    this.props.navigation.goBack();
  }

  onChangetext = (text,field)=>{
    this.setState({[field]:text})
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
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.homeData,"nextprops");
    if(nextProps.homeData.editBlogPayload ==true){
      this.callToast("Blog Edited SuccessFully.","Success");
    }
    if(nextProps.homeData.editBlogPayload ==false){
      this.callToast("SomeThing Went Wrong.","Danger")
    } 
    this.setState({fetching:nextProps.homeData.fetching})
  }

  render () {
    const {navigation} = this.props;
    console.log(this.props)
    return (
      <Root>
      <Container>
      <View  style={[(this.state.fetching == true)? styles.activityIndicator :styles.styleNothing ]}>
        <ActivityIndicator animating={this.state.fetching}  size='large' />
      </View>
        <HeaderComponent goBack={this.goBack}  navigatePage={this.navigatePage} title="Edit Blog" screen="editblog"/>
        <Content >
            <Blogcomponent title={this.state.title} body={this.state.body} blogAction={this.blogAction} onChangetext={this.onChangetext} />
        </Content>
    </Container>
    </Root>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    homeData: state.homeData,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editBloged: (data) => {dispatch(HomeAction.editBlog(data))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditblogScreen)
