// Core operation imports
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Styling and Structure imports
import { Button, Box, Typography, Paper } from '@material-ui/core';

const Success = () => {

    // Hooks
    let history = useHistory();
    const dispatch = useDispatch();

    const reset = () => {
        dispatch({
            type: 'RESET_SURVEY'
        });
        history.push('/')
    } // End reset()

    return (
        <Box>
            <Paper
                style={{ 
                    padding:20,
                    width: 400,
                    margin: "auto"
                }}
            >
                <Typography
                    variant="h2"
                    align="center"
                >
                    Submitted!
                </Typography>
                <Typography
                    variant="h5"
                    align="center"
                >
                    Thank you for your valuable feedback!
                </Typography>
                <Box mt={2}>
                    <Button
                        onClick={ () => reset() }
                        variant={'contained'}
                        color={'primary'}
                    >
                        Leave New Feedback
                    </Button>
                </Box>
            </Paper>
        </Box>
    ) // End Componant Return
} // End Success()

export default Success;
