import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import SearchBar from '../components/searchBar';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
    },
    title: {
        textAlign: 'center'
    },
    status: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: 42,
        marginTop: 10
    },
}));

const DeliveryStatus = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
            <div className={classes.title}>Status</div>
            <SearchBar />
            <span className={classes.status}>
                DELIVERED
            </span>
        </div>
     );
}
 
export default DeliveryStatus;