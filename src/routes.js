import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      SignIn,
      SignUp
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#7159c1'
        },
        headerTintColor: '#FFF'
      }
    }
  )
);

export default Routes;
