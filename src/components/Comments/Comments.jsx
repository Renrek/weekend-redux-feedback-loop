// Core function imports
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


// Material imports
import { Typography, Box, TextField, Button }  from '@material-ui/core';

const Comments = () => {

    const dispatch = useDispatch();
    let history = useHistory();
    
    const [comments, setComments] = useState('')
    
    const onFormSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_COMMENTS',
            payload: comments
        });
        history.push('/review');
    };

    return (
        <Box>
            <Typography
                variant="h5"
                align="center"
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
                <Button 
                    type="submit"
                    variant={'contained'}
                    color={'primary'}
                > 
                    Submit
                </Button>
            </form>
        </Box>
    )
}

export default Comments;
