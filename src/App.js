import React from 'react';
import './App.css';

//Components
import SmartFilter from './components/smartFilter';
import MenuTop from './components/menuTop';
import Search from './components/search'
import DeliveryDetail from './components/deliveryDetail';
import DeliveryStatus from './components/deliveryStatus';

function App() {
  return (
    <div className="app">      
      <div>
        <SmartFilter />
        <DeliveryStatus />
      </div>

      <div class="span-col-3">
        <MenuTop />
        <Search />
        <DeliveryDetail />
      </div>

    </div>
  );
}

export default App;
