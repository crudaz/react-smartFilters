import React from 'react';

import Grid from '@material-ui/core/Grid';

// Icons
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';

const MenuTop = ({list}) => {
    const [value, setValue] = React.useState(0);
    return (
        list.map(item => (
            <Grid item xs key={item.id}>
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    showLabels
                >
                    <BottomNavigationAction label={item.name} icon={<HomeIcon />} />
                </BottomNavigation>
            </Grid>
        ))
     );
}
 
export default MenuTop;