import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: 'white'
    },
  }));

const SearchBar = () => {
    const classes = useStyles();
    return (
        <TextField className={classes.root}
            id="search"
            label="search"
            placeholder="Search"
            margin="normal"
            variant="outlined"
        />
     );
}
 
export default SearchBar;