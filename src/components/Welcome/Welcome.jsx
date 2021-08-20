// Core function imports
import React from 'react';
import { useHistory } from 'react-router-dom';

// Material imports
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
    )
}

export default Welcome;
