/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View} from 'react-native';
import Routes from './src/navigation/routes';

function App() {

  return (
    <View
      style={{
        flex: 1,
      }}>
      <Routes />
    </View>
  );
}



export default App;
