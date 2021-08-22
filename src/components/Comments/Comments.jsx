// Core function imports
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


// Material imports
import { 
    Typography, 
    Box, 
    TextField, 
    Button, 
    ButtonGroup, 
    Paper 
}  from '@material-ui/core';

import { ArrowBack, ArrowForward } from '@material-ui/icons';

const Comments = () => {

    //Hooks
    const dispatch = useDispatch();
    let history = useHistory();
    const storedSurvey = useSelector(state => state.surveyReducer);

    // Local state for form processing. Default of '' empty string
    // Using Radio component "checked", dynamically setting group default, creates an error.
    const defaultAnswer = ''; 
    const defaultValue = (storedSurvey.comments !== undefined)
        ? storedSurvey.comments : defaultAnswer;

    const [comments, setComments] = useState(defaultValue);
    
    const submitComments = () => {
        dispatch({
            type: 'ADD_COMMENTS',
            payload: comments
        });
        
    }; // End onFormSubmit()

    const forwardStep = (event) => {
        event.preventDefault();
        submitComments();
        history.push('/review');
    }; // End forwardStep()

    const backStep = () => {
        submitComments();
        history.push('/supported')
    }; // End backStep()

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
                <form noValidate autoComplete="off" onSubmit={forwardStep}>
                    <TextField 
                        value={comments}
                        onChange={(event)=> setComments(event.target.value)}
                        variant="outlined"
                        multiline
                        fullWidth
                        rows={5}
                        label="Enter Comments Here" 
                    />
                    <Box mt={2}>
                        <ButtonGroup
                        variant={'contained'}
                        color={'primary'}
                    >
                        <Button 
                            onClick={()=> backStep()} 
                            startIcon={<ArrowBack />}
                        >
                            Back
                        </Button>
                        <Button 
                            type="submit"
                            endIcon={<ArrowForward />}
                        >
                            Next
                        </Button>
                    </ButtonGroup>
                    </Box>
                </form>
            </Paper>
        </Box>
    ) // End return of component
} // End Comments()

export default Comments;
