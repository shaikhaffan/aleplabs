import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text,ScrollView,FlatList } from 'react-native'
import styles from './Styles/MaincategoryStyle'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Maincategory extends Component {
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

  constructor(props) {
    super(props);
  
  }


  render () {
    console.log(this.props,"ADS")
    return (
      <View>
        <FlatList 
        numColumns={3}
  data={this.props.data}
  renderItem={({item, index, separators}) => (
    <TouchableOpacity
      onPress={() => this.props.onCatSelect(index)}
      >
      <View style={[this.props.style]}>
        <Text style={[this.props.textStyle]}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  )}
/>
      </View>
    )
  }
}
