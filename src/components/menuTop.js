import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const useStyles = makeStyles({
    root: {
        // backgroundColor: 'rgb(26,57,72)'
        color: 'rgb(56,56,56)'
    },
    "&$selected": {
        color: "red"
      },
      selected: {}
});

const MenuTop = ({list}) => {
    const classes = useStyles();
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
                    className={classes.root}
                >
                    <BottomNavigationAction label={item.name} icon={item.icon} />
                </BottomNavigation>
            </Grid>
        ))
     );
}
 
export default MenuTop;