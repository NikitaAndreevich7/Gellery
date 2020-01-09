import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Platform } from 'react-native'
import { MainScreen } from '../screen/MainScreen'
import { PhotoScreen } from '../screen/PhotoScreen'


const PostNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Photo: {
      screen: PhotoScreen
    }
  },
  {
    initialRouteName: 'Main' ,
  }
)



export const AppNavigation = createAppContainer(PostNavigator)
