import { StyleSheet } from 'react-native'
import { ApplicationStyles,Colors,Fonts } from '../../Themes/'
import { scale, ScaledSheet } from 'react-native-size-matters'

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  topButtons:{
    backgroundColor:Colors.storePurpuleColor,
    borderRadius:scale(15),
    width:scale(50),
    height:scale(50),
    justifyContent:"space-around",
    alignItems:"center"
  
  },
  justifyCenter : {
    justifyContent:"center",
    alignItems:"center"
  },
  myaccountTabParent :{
    marginVertical:scale(0)
  },
  accountTab :{
    backgroundColor:Colors.storePurpuleColor,
    opacity:scale(0.5),
    padding:scale(12),
    

  },
  accountTabContent:{
    flexDirection:"row",
    padding:scale(12)

  },
  accountTabInnerCon:{
    fontSize:scale(15),
    
    
  },
  tabTextContent:{
    justifyContent:"center",
    marginLeft:scale(12)
  },
  tabWrap:{
    marginVertical:scale(12)
  },
  socialTab:{
    flexDirection:"row",
    justifyContent:"space-around"
  },
  polycyTab:{
    flexDirection:"row",
    justifyContent:"space-around",
    marginVertical:scale(5)
  }
})
