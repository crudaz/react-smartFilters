import React from 'react';
import './App.css';
import logo from './logo.png';


// Components
import SmartFilter from './components/smartFilter';
import MenuTop from './components/menuTop';
import Search from './components/search'
import DeliveryDetail from './components/deliveryDetail';
import DeliveryStatus from './components/deliveryStatus';

// Icons
import sale from './assets/icons/sale.png';
import calendar from './assets/icons/calendar.png';
import heart from './assets/icons/heart.png';


function App() {

  const filters = [
    { icon: sale, op: 'disabled' },
    { icon: calendar, op: 'disabled' },
    { icon: heart, op: 'disabled' }
  ];

  return (
    <div className="app">      
      <div>
        <img className="logo" src={logo} alt="" />
        
        <p>Smart Filters</p>
        <hr />
        <SmartFilter list={filters}/>
        <hr />
        
        <DeliveryStatus />
      </div>

      <div className="span-col-3">
        <MenuTop />
        <Search />
        <DeliveryDetail />
      </div>

    </div>
  );
}

export default App;
