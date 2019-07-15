import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const IOSSwitch = withStyles(theme => ({
    root: {
      width: 62,
      height: 36,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(26px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: 'rgb(26,57,72)',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: 'rgb(26,57,72)',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 34,
      height: 34,
    },
    track: {
      borderRadius: 34 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
}))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
});

const useStyles = makeStyles(theme => ({
    item: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px 0'
    },
    control: {
        margin: 0,
        transform: 'rotate(180deg)'
    }
  }));

const SmartFilter = ({list}) => {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
      });

    const classes = useStyles();

    const handleChange = name => event => {
        // setState({ ...state, [name]: event.target.checked });
    };

    return (

        list.map(item => (
            <div key={item.id} className={classes.item}>
                <img src={item.icon} height='60px' width='60px'/>

                <FormControlLabel className={classes.control}
                    control={
                    <IOSSwitch key={item.id}
                        checked={item.checked}
                        // onChange={handleChange('checkedB')}
                        value="checkedB"
                    />
                    }
                />
            </div>
        ))
    );
}
 
export default SmartFilter;