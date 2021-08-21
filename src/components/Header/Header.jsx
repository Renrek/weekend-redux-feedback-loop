// Core operation imports
import React from 'react';

// Styling and Structure imports
import './Header.css';
import { Box, Typography } from '@material-ui/core';

const Header = () => {
    return (
        <Box className='App-header'>
            <Typography variant="h3">Feedback!</Typography>
            <Typography variant="h6">Don't forget it!</Typography>
        </Box>
    ) // End Componant Return
} // End Header()

export default Header;
