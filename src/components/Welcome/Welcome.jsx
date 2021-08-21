// Core function imports
import React from 'react';
import { useHistory } from 'react-router-dom';

// Styling and Structure imports
import { Box, Button }  from '@material-ui/core';

const Welcome = () => {
    let history = useHistory();

    return (
        <Box>
            <Button 
                onClick={()=> history.push('/feeling')}
                variant={'contained'}
                color={'primary'}
            >
                Take Survey
            </Button>
        </Box>
    ) // End Componant Return
} // End Welcom()

export default Welcome;
