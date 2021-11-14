import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import { Provider } from 'react-redux';
import store from './common/redux/store';
// import Home from './components/Routes/ReduxTest/Home';
// import HooksHome from './components/Routes/ReduxTest/HooksHome';
// import IceCreamContainer from './components/Routes/ReduxTest/iceCreamContainer';
// import NewCakeContainer from './components/Routes/ReduxTest/NewCakeContainer';
// import ItemContainer from './components/Routes/ReduxTest/ItemContainer';
import UserContainer from './components/Routes/ReduxTest/UserContainer';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <ItemContainer cake/>
        <ItemContainer />
        <IceCreamContainer/>
        <HooksHome/>
        <Home/>
        <NewCakeContainer/> */}
        <UserContainer/>
      </div>
    </Provider>
  );
}

export default App;
