//https://www.youtube.com/watch?v=Ebfi4LsCWGU&list=PLuCSTcvO629wV64PiogK-GIabxtV-tQv_&index=4
//https://stackoverflow.com/questions/54939427/react-navigation-stack-navigator-doesnt-work
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Posts from './scenes/posts';
import Profile from './scenes/profile';

const screens = {
  Posts: { screen: Posts },
  Profile: { screen: Profile },
}

const config = {
  headerMode: '',
  initialRouteName: 'Posts'
}

const App = createStackNavigator(screens,config);
export default createAppContainer(App);