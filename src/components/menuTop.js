import React from 'react';

// Icons
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';

const MenuTop = ({list}) => {
    const [value, setValue] = React.useState(0);
    return (
        list.map(item => (
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
            >
                <BottomNavigationAction label={item.name} icon={<HomeIcon />} />
            </BottomNavigation>
        ))
     );
}
 
export default MenuTop;