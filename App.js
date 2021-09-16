import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigator from './Components/Navigator.js';
import {createStore, applyMiddleware} from 'redux';
import {reducer} from './redux/reducer.js';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk'


const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  const store = createStore(reducer, applyMiddleware(ReduxThunk))

  if(!fontsLoaded){
    return (
        <AppLoading
          startAsync={fetchFonts}
          onFinish = {() => setFontsLoaded(true)}
          onError={console.warn}/>
    )
  }

  return (
    <Provider store={store}>
      <Navigator />
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
