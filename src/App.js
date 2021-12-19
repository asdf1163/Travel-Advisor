import React from 'react';
import './common/SCSS/main.scss';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './common/redux/store';
import Header from './components/Header/Header'
import Home from './components/Routes/Home/Home'
import Offers from './components/Routes/Offers/Offers';
import PageNotFound from './components/Routes/PageNotFound/PageNotFound';
import MoreInfo from './components/Routes/Offers/MoreInfo';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="offers" element={<Offers />} />
          <Route path="offers/:offerid" element={<MoreInfo />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;