import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Box } from '@material-ui/core';

const Review = () => {
    let history = useHistory();
    const survey = useSelector(store => store.surveyReducer);
    const submitSurvey = () => {
    
        axios.post( '/api/survey', survey )
        .then( response => {
            console.log(response);
        })
        .catch(error => {
            alert(error);
        });
    }
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
    )
}

export default Review;
