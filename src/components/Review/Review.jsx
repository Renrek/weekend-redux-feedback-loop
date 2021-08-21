// Core operation imports
import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Styling and Structure
import { Button, Box } from '@material-ui/core';

const Review = () => {

    // Hooks
    let history = useHistory();

    // Local state for form processing. Default of 3 (average)
    const survey = useSelector(store => store.surveyReducer);

    const submitSurvey = () => {
        axios.post( '/api/survey', survey )
        .then( response => {
            history.push('/success');
        })
        .catch(error => {
            alert(error);
        });
    } // End submitServey()

    return (
        <Box>
            Feelings: {survey.feeling}<br />
            Understanding: {survey.understanding}<br />
            Supported: {survey.support}<br />
            Comments: {survey.comments}<br />
            <Button 
                onClick={() => submitSurvey()}
                variant={'contained'}
                color={'primary'}
            >
                Submit Survey
            </Button>
        </Box>
    ) // End component return
} // End Review()

export default Review;
