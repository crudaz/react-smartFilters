import React from 'react';
import './App.css';
import logo from './logo.png';

import Grid from '@material-ui/core/Grid';

// Components
import SmartFilter from './components/smartFilter';
import MenuTop from './components/menuTop';
import SearchBar from './components/searchBar';
import DeliveryDetail from './components/deliveryDetail';
import DeliveryStatus from './components/deliveryStatus';

// Icons
import sale from './assets/icons/sale.png';
import calendar from './assets/icons/calendar.png';
import heart from './assets/icons/heart.png';

import Checkbox from '@material-ui/core/Checkbox';

function App() {

  const menuList = [
    { id: 1, name: 'Home', icon: 'calendar' },
    { id: 2, name: 'Messages', icon: 'calendar' },
    { id: 3, name: 'Wishlist', icon: 'calendar' },
    { id: 4, name: 'Settings', icon: 'calendar' },
    { id: 5, name: 'My Account', icon: 'calendar' }
  ];
  
  const filters = [
    { id: 1, icon: sale, op: 'disabled' },
    { id: 2, icon: calendar, op: 'disabled' },
    { id: 3, icon: heart, op: 'disabled' }
  ];
  
  const deliveryList = [
    {
      id: 1,
      date: 'Monday 10th 2:28 PM', 
      from: 'Houston, TX, 33619', 
      to: 'Atlanta, GA, 30123',
      price: '250',
      quantity: 1
    },
    {
      id: 2,
      date: 'Monday 10th 2:28 PM', 
      from: 'Houston, TX, 33619', 
      to: 'Atlanta, GA, 30123',
      price: '250',
      quantity: 1
    },
    {
      id: 3,
      date: 'Monday 10th 2:28 PM', 
      from: 'Houston, TX, 33619', 
      to: 'Atlanta, GA, 30123',
      price: '250',
      quantity: 1
    },
  ];

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
  
  return (
    <div className="app">      
      <div className="sidebar">
        <img className="logo" src={logo} alt="" />
        
        <div className="section">
          <div className="title">
            <i className="material-icons">highlight</i>
            <p>Smart Filters</p>
          </div>
          <div className="filter">
            <SmartFilter list={filters}/>
          </div>
        </div>  

        <div className="section">
          <DeliveryStatus />
        </div>
        
      </div>

      <div className="span-col-3">

        <Grid item xs={12} className="menu">
          <MenuTop list={menuList}/>
        </Grid>
        
        <Checkbox
          checked={state.checkedA}
          onChange={handleChange('checkedA')}
          value="checkedA"
          inputProps={{
            'aria-label': 'primary checkbox',
          }}
        />

        <SearchBar />

        <div className="delivery">
          <DeliveryDetail list={deliveryList} />
        </div>

        <i className="material-icons">add_circle</i>

      </div>

    </div>
  );
}

export default App;
