import { StackNavigator } from 'react-navigation';

import HomePage from './pages/Home';
import LoginPage from './pages/Login';

export default StackNavigator({
  Home: {
    screen: HomePage,
  },
  Login: {
    screen: LoginPage,
  },
});
