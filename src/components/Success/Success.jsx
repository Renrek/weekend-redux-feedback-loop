import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Box, Typography } from '@material-ui/core';

const Success = () => {

    let history = useHistory();
    const dispatch = useDispatch();

    const reset = () => {
        dispatch({
            type: 'RESET_SURVEY'
        });
        history.push('/')
    }

    return (
        <Box>
            <Typography
                variant="h5"
                align="center"
            >
                Thank you for your valuable feedback!
            </Typography>
            <Button
                onClick={ () => reset() }
                variant={'contained'}
                color={'primary'}
            >
                Leave New Feedback
            </Button>
        </Box>
    )
}

export default Success;
