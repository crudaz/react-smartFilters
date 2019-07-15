import React from 'react';
import { makeStyles, rgbToHex } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import Navigation from '@material-ui/icons/Navigation';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import truck from '../assets/icons/truck.png';


const options = [
    'Option1',
    'Option2',
  ];

const ITEM_HEIGHT = 48;

const useStyles = makeStyles(theme => ({
    card: {
        borderRadius: 50,
        margin: 20
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        color: 'rgba(0, 0, 0, 0.54)',
        alignItems: 'center',
        padding: '0 !important'
    },
    date: {
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'center',
        textAlign: 'center',
        width: 0,
        padding: 20,
        maxWidth: 90
    },
    deliver: {
        display: 'flex',
        borderLeft: '1px solid gray',
        borderRight: '1px solid gray',
        padding: 20,
        flexGrow: 1,
        justifyContent: 'center'
    },
    address: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        display: 'flex',
        alignItems: 'center',
        paddingRight: 20,
    },
    materialIcon: {
        fontSize: 64,
        color: 'orange'
    },
    navigationIcon: {
        fontSize: 36,
        transform: 'rotate(45deg)'
    },
    image: {
        height: 70
    },
    right: {
        display: 'flex',
        flexGrow: 2,
        alignItems: 'center',
        justifyContent: 'inherit'
    },
    price: {
        fontSize: 28,
        fontWeight: 500,
        transform: 'scale(1, 1.2)'
    },
    qa: {
        display: 'flex',
        backgroundColor: 'rgb(234, 83, 86)',
        padding: 15,
        borderRadius: 5,
        color: 'white',
        width: 18,
        justifyContent: 'center'
    }
  }));

const DeliveryDetail = ({list}) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    function ArrowDownIcon(props) {
        return (
            <KeyboardArrowDown {...props} />
        );
    }

    function NavigationIcon(props) {
        return (
            <Navigation {...props} />
        );
    }

    function OptionIcon(props) {
        return (
            <IconButton {...props} 
                aria-label="More"
                aria-controls="long-menu"
                aria-haspopup="true"
            >
                <MoreVertIcon />
            </IconButton>
        );
    }

    return (
        list.map( item => (
            <Card key={item.id} className={classes.card}>
                <CardContent className={classes.cardContent}>

                    <div className={classes.date}>{item.date}</div>
                    
                    <div className={classes.deliver}>
                        <div className={classes.icon}>
                            <NavigationIcon className={classes.navigationIcon} />
                        </div>
                        <div className={classes.address}>
                            <div>{item.from}</div>
                            <ArrowDownIcon className={classes.materialIcon} />
                            <div>{item.to}</div>
                        </div>
                    </div>

                    <div className={classes.right}>
                        <img src={truck} alt="" className={classes.image} />
                        <div className={classes.price}>$ {item.price}</div>
                        <div className={classes.qa}>{item.quantity}</div>
                        <OptionIcon />
                    </div>

                </CardContent>
            </Card>
        ))
     );
}
 
export default DeliveryDetail;