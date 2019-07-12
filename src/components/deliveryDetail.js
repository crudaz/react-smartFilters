import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';


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
        justifyContent: 'space-around'
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

    return (
        list.map( item => (
            <Card key={item.id} className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <Typography color="textSecondary" gutterBottom>
                        {item.date}
                    </Typography>
                    <Typography color="textSecondary">
                        {item.from}
                    </Typography>
                    <Typography color="textSecondary">
                        {item.to}
                    </Typography>
                    <i className="material-icons">
                        directions_transit
                    </i>
                    <Typography color="textSecondary">
                        {item.price}
                    </Typography>
                    <Typography color="textSecondary">
                        {item.quantity}
                    </Typography>
                </CardContent>
                {/* <CardActions>
                    <div>
                        <IconButton
                            aria-label="More"
                            aria-controls="long-menu"
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="long-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={open}
                            onClose={handleClose}
                            PaperProps={{
                            style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: 200,
                            },
                            }}
                        >
                            {options.map(option => (
                            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                {option}
                            </MenuItem>
                            ))}
                        </Menu>
                    </div>

                </CardActions> */}
            </Card>
        ))
     );
}
 
export default DeliveryDetail;