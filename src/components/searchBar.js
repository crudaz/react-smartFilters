import React from 'react';
import TextField from '@material-ui/core/TextField';

const SearchBar = () => {
    return (
        <TextField
            id="search"
            label="search"
            placeholder="Search"
            margin="normal"
            variant="outlined"
        />
     );
}
 
export default SearchBar;