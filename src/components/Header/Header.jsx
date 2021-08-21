import React from 'react';

import './Header.css';

import { Box, Typography } from '@material-ui/core';

const Header = () => {
    return (
        <Box className='App-header'>
            <Typography variant="h3">Feedback!</Typography>
            <Typography variant="h6">Don't forget it!</Typography>
        </Box>
    )
}

export default Header;
