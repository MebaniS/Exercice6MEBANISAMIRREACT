import React from 'react';
import { View } from 'react-native';
import Sign from './Sign';
import { auth } from "./firebaseconfig";

const App: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Sign auth={auth} />
    </View>
  );
};

export default App;
