// Core function imports
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


// Material imports
import { Typography, Box, TextField }  from '@material-ui/core';

const Comments = () => {
    let history = useHistory();
    const [comments, setComments] = useState('3')
    
    const submitComments = () => {
        //Submit to global state
        history.push('/comments');
    };

    return (
        <Box>
            <Typography
                variant="h3"
                align="center"
            >
                Do you have any comments for today?
            </Typography>
            <form noValidate autoComplete="off">
                <TextField 
                    variant="outlined"
                    multiline
                    fullWidth
                    rows={5}
                    
                    label="Enter Comments Here" 
                />
   
</form>
        </Box>
    )
}

export default Comments;
