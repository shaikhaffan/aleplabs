import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView,View,TextInput,TouchableWithoutFeedback } from 'react-native'
import { scale } from "react-native-size-matters";
//import Icon from 'react-native-vector-icons/MaterialIcons'
import { ApplicationStyles,Colors } from '../Themes';
import { connect } from 'react-redux'
import HeaderComponent from '../Components/Header';
import {
  Container,
  Content,
} from "native-base";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ShowblogScreenStyle'

class ShowblogScreen extends Component {

  constructor(props){
    super(props);
    console.log(props);
  }


  goBack = ()=>{
    this.props.navigation.goBack();
  }

  
  navigatePage = (page,content) =>{
    console.log(this.props.navigation.state.params.blogData)
    if(page == "EditblogScreen"){
    this.props.navigation.navigate(page,{"blogData":this.props.navigation.state.params.blogData});
    }else{
      this.props.navigation.navigate(page); 
    }
   
  }


  render () {
    const {navigation} = this.props;
    const blogData = navigation.state.params.blogData;
    return (
      <Container>
      <HeaderComponent goBack={this.goBack}  navigatePage={this.navigatePage} title="Blog" screen="showblog"/>
      <Content >
        <View style={{marginVertical:scale(20),justifyContent:"center",alignItems:"center"}}>
        <View style={{width:'90%'}}>
          <View style={{marginBottom:scale(10),justifyContent:"center",alignItems:"center"}}><Text style={{fontWeight:"bold"}}>{blogData.title}</Text></View>
          <View><Text>{blogData.body}</Text></View>
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowblogScreen)
