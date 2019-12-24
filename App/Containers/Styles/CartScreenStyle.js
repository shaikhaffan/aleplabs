import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  percentWrap:{
    width:'95%',
 
  },
  centerWrap:{
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:"row"
  }
})
