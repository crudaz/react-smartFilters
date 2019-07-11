import React from 'react';
import Button from '@material-ui/core/Button';

import SearchBar from '../components/searchBar';

const DeliveryStatus = () => {
    return ( 
        <React.Fragment>
            <p>Status</p>
            <SearchBar />
            <Button variant="contained">
                DELIVERED
            </Button>
        </React.Fragment>
     );
}
 
export default DeliveryStatus;