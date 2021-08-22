// Core function imports
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


// Material imports
import { Typography, Box, TextField, Button, Paper }  from '@material-ui/core';

const Comments = () => {

    //Hooks
    const dispatch = useDispatch();
    let history = useHistory();

    // Local State for form processing
    const [comments, setComments] = useState('')
    
    const onFormSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_COMMENTS',
            payload: comments
        });
        history.push('/review');
    }; // End onFormSubmit()

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
                    variant="h5"
                    align="center"
                    gutterBottom={true}
                >
                    Do you have any comments for today?
                </Typography>
                <form noValidate autoComplete="off" onSubmit={onFormSubmit}>
                    <TextField 
                        onChange={(event)=> setComments(event.target.value)}
                        variant="outlined"
                        multiline
                        fullWidth
                        rows={5}
                        label="Enter Comments Here" 
                    />
                    <Box mt={2}>
                        <Button 
                            type="submit"
                            variant={'contained'}
                            color={'primary'}
                        > 
                            Submit
                        </Button>
                    </Box>
                </form>
            </Paper>
        </Box>
    ) // End return of component
} // End Comments()

export default Comments;
