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

import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';
import StarIcon from '@material-ui/icons/Star';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import AddCircle from '@material-ui/icons/AddCircle';

import Checkbox from '@material-ui/core/Checkbox';

function App() {

  const menuList = [
    { id: 1, name: 'Home', icon: <HomeIcon /> },
    { id: 2, name: 'Messages', icon: <MailIcon /> },
    { id: 3, name: 'Wishlist', icon: <StarIcon /> },
    { id: 4, name: 'Settings', icon: <SettingsIcon /> },
    { id: 5, name: 'My Account', icon: <AccountCircleIcon /> }
  ];
  
  const filters = [
    { id: 1, icon: sale, checked: true },
    { id: 2, icon: calendar, checked: true },
    { id: 3, icon: heart, checked: true }
  ];
  
  const deliveryList = [
    {
      id: 1,
      date: 'Monday 10th 2:28 PM', 
      from: 'Houston, TX, 33619', 
      to: 'Atlanta, GA, 30123',
      price: '250.00',
      quantity: 1
    },
    {
      id: 2,
      date: 'Monday 10th 2:28 PM', 
      from: 'Houston, TX, 33619', 
      to: 'Atlanta, GA, 30123',
      price: '250.00',
      quantity: 1
    },
    {
      id: 3,
      date: 'Monday 10th 2:28 PM', 
      from: 'Houston, TX, 33619', 
      to: 'Atlanta, GA, 30123',
      price: '250.00',
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

  function AddIcon(props) {
    return (
        <AddCircle {...props} />
    );
}
  
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

        <AddIcon className="addIcon" />
      </div>

    </div>
  );
}

export default App;
