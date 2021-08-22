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

const Understanding = () => {

    // Hooks
    const dispatch = useDispatch();
    let history = useHistory();
    const storedSurvey = useSelector(state => state.surveyReducer);

    // Local state for form processing. Default of 3 (average)
    // Using Radio component "checked", dynamically setting group default, creates an error.
    const defaultAnswer = '3'; 
    const defaultValue = (storedSurvey.understanding !== undefined)
        ? storedSurvey.understanding : defaultAnswer;

    const [understanding, setUnderstanding] = useState(defaultValue);
    
    const submitUnderstanding = () => {
        dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: understanding
        });
    }; // End submitUnderstanding()

    const forwardStep = () => {
        submitUnderstanding();
        history.push('/supported');
    }; // End forwardStep()

    const backStep = () => {
        submitUnderstanding();
        history.push('/feeling')
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
                    How is your understanding today?
                </Typography>
                <FormControl component="fieldset">
                    <RadioGroup row aria-label="position" name="position" defaultValue="3" onChange={(event) => setUnderstanding(event.target.value)}>
                        <FormControlLabel
                            value="1"
                            control={<Radio color="primary" checked={understanding === "1"}/>}
                            label="1"
                            labelPlacement="bottom"
                        />
                        <FormControlLabel
                            value="2"
                            control={<Radio color="primary" checked={understanding === "2"}/>}
                            label="2"
                            labelPlacement="bottom"
                        />
                        <FormControlLabel
                            value="3"
                            control={<Radio color="primary" checked={understanding === "3"}/>}
                            label="3"
                            labelPlacement="bottom"
                        />
                        <FormControlLabel
                            value="4"
                            control={<Radio color="primary" checked={understanding === "4"}/>}
                            label="4"
                            labelPlacement="bottom"
                        />
                        <FormControlLabel
                            value="5"
                            control={<Radio color="primary" checked={understanding === "5"}/>}
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
} // End Understanding()

export default Understanding;
