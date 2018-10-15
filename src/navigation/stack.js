import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../views/Home';
import DetailsScreen from '../views/Details';

const RootStack = createStackNavigator({
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default RootStack;