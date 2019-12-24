import 'react-native-gesture-handler'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator,BottomTabBar  } from 'react-navigation-tabs';
import {Fonts,Colors} from '../Themes/index';
import HomeScreen from '../Containers/HomeScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import RecentScreen from '../Containers/RecentScreen';
import FavouritesScreen from '../Containers/FavouritesScreen';
import NearbyScreen from '../Containers/NearbyScreen';
import EditblogScreen from '../Containers/EditblogScreen';
import AddblogScreen from '../Containers/AddblogScreen';
import ShowblogScreen from '../Containers/ShowblogScreen';
import ShowstopScreen from '../Containers/ShowstopScreen';

import styles from './Styles/NavigationStyles'

const TabBarComponent = props => <BottomTabBar {...props} />;

const TabNavigator = createBottomTabNavigator({
  HomeScreen: { screen: HomeScreen },
  RecentScreen: { screen: RecentScreen },
  FavouritesScreen : {screen:FavouritesScreen},
  NearbyScreen :{screen : NearbyScreen},

 
},
{headerMode: 'none',},
{
  tabBarComponent: props => (
    <SafeAreaView>
      <TabBarComponent {...props} style={{ borderTopColor: Colors.storeTextColor}} />
    </SafeAreaView>
  ),
}
);




// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  TabNavigator : TabNavigator,
  ShowblogScreen : {screen : ShowblogScreen},
  EditblogScreen :{screen : EditblogScreen},
  AddblogScreen : {screen : AddblogScreen},
  topScreen : {screen : ShowstopScreen}
},
{
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'TabNavigator',
  
});

export default createAppContainer(PrimaryNav)
