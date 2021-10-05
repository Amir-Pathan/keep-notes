import React,{ useCallback, useEffect } from 'react';
import './App.css';
import Routing from './component/routing'
import {Provider} from 'react-redux'
import store from './redux/store'

function App() {

  const notes = []

  useCallback(()=>{
    localStorage.setItem('notes',JSON.stringify(notes))
    localStorage.setItem('fnotes',JSON.stringify(notes))
  },[])

  useEffect(()=>{
    document.title='Keep-Notes'
  },[])

  return (
    <div className="App">
      <Provider store={store}>
          <Routing/>
      </Provider>
    </div>
  );
}

export default App;
