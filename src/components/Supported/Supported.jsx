// Core function imports
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Styling and Structure imports
import { 
    Typography, 
    Box, 
    Button,
    ButtonGroup, 
    Radio, 
    RadioGroup, 
    FormControl, 
    FormControlLabel,
    Paper 
}  from '@material-ui/core';

import { ArrowBack, ArrowForward } from '@material-ui/icons';

const Supported = () => {

    // Hooks
    const dispatch = useDispatch();
    let history = useHistory();
    const storedSurvey = useSelector(state => state.surveyReducer);

    // Local state for form processing. Default of 3 (average)
    // Using Radio component "checked", dynamically setting group default, creates an error.
    const defaultValue = '3'; 
    const defaultState = (storedSurvey.support !== undefined)
        ? storedSurvey.support : defaultValue;

    const [supported, setSupported] = useState(defaultState)
    
    const submitSupported = () => {
        dispatch({
            type: 'ADD_SUPPORTED',
            payload: supported
        })
        
    }; // End submitSupported()

    const forwardStep = () => {
        submitSupported();
        history.push('/comments');
    }; // End forwardStep()

    const backStep = () => {
        submitSupported();
        history.push('/understanding')
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
                >
                    How supported are you today?
                </Typography>
                <FormControl component="fieldset">
                    <RadioGroup row aria-label="position" name="position" onChange={(event) => setSupported(event.target.value)}>
                        <FormControlLabel
                            value="1"
                            control={<Radio color="primary" checked={supported === "1"}/>}
                            label="1"
                            labelPlacement="bottom"
                        />
                        <FormControlLabel
                            value="2"
                            control={<Radio color="primary" checked={supported === "2"}/>}
                            label="2"
                            labelPlacement="bottom"
                        />
                        <FormControlLabel
                            value="3"
                            control={<Radio color="primary" checked={supported === "3"}/>}
                            label="3"
                            labelPlacement="bottom"
                        />
                        <FormControlLabel
                            value="4"
                            control={<Radio color="primary" checked={supported === "4"}/>}
                            label="4"
                            labelPlacement="bottom"
                        />
                        <FormControlLabel
                            value="5"
                            control={<Radio color="primary" checked={supported === "5"}/>}
                            label="5"
                            labelPlacement="bottom"
                        />
                    </RadioGroup>
                </FormControl>
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
                            onClick={()=> forwardStep()}
                            endIcon={<ArrowForward />}
                        >
                            Next
                        </Button>
                    </ButtonGroup>
                </Box>
            </Paper>
        </Box>
    ) // End Componant Return
} // End Supported

export default Supported;
