import React from 'react';
import axios from 'axios';

import { Box } from '@material-ui/core';

const Admin = () => {

    const getFeedback = () => {
        axios.get('/api/survey')
            .then( response => {
                
            })
            .catch( error => {
                alert('There was an error fetching information from the server.')
                console.log('Error on GET', error);
            });
    };

    return (
        <Box>
            
        </Box>
    )
}

export default Admin;
