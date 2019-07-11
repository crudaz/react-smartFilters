import React from 'react';
import Switch from '@material-ui/core/Switch';

const SmartFilter = ({list}) => {
    return (
        list.map(item => (
            <div key={item.id}>
                <img src={item.icon} height='50px' width='50px'/>
                <Switch
                    defaultChecked
                    value="checkedF"
                    color="default"
                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                />
            </div>
        ))
    );
}
 
export default SmartFilter;