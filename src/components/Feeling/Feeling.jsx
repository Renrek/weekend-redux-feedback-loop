// Core function imports
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Material imports
import { 
    Typography, 
    Box, 
    Button, 
    Radio, 
    RadioGroup, 
    FormControl, 
    FormControlLabel,
    Paper 
}  from '@material-ui/core';

const Feeling = () => {

    // Hooks 
    const dispatch = useDispatch();
    let history = useHistory();
    const storedSurvey = useSelector(state => state.surveyReducer);

    
    // Local state for form processing. Default of 3 (average)
    // Using Radio component "checked", dynamically setting group default, creates an error.
    const defaultAnswer = '3'; 
    const storedFeeling = (storedSurvey.feeling !== undefined)
        ? storedSurvey.feeling : defaultAnswer;
        
    const [feeling, setFeeling] = useState(storedFeeling);
    
    const submitFeeling = () => {
        dispatch({
            type: 'ADD_FEELINGS',
            payload: feeling
        })
        history.push('/understanding');
    }; // End submitFeeling()

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
                    How are you feeling today?
                </Typography>
                <FormControl component="fieldset">
                    <RadioGroup row aria-label="position" name="position" onChange={(event) => setFeeling(event.target.value)}>
                        <FormControlLabel
                            value="1"
                            control={<Radio color="primary" checked={feeling === "1"}/>}
                            label="1"
                            labelPlacement="bottom"
                        />
                        <FormControlLabel
                            value="2"
                            control={<Radio color="primary"  checked={feeling === "2"}/>}
                            label="2"
                            labelPlacement="bottom"
                        />
                        <FormControlLabel
                            value="3"
                            control={<Radio color="primary"  checked={feeling === "3"}/>}
                            label="3"
                            labelPlacement="bottom"
                        />
                        <FormControlLabel
                            value="4"
                            control={<Radio color="primary"  checked={feeling === "4"}/>}
                            label="4"
                            labelPlacement="bottom"
                        />
                        <FormControlLabel
                            value="5"
                            control={<Radio color="primary"  checked={feeling === "5"}/>}
                            label="5"
                            labelPlacement="bottom"
                        />
                    </RadioGroup>
                </FormControl>
                <Box mt={2}>
                    <Button
                        onClick={()=> submitFeeling()}
                        variant={'contained'}
                        color={'primary'}
                    >
                        Submit
                    </Button>
                </Box>
            </Paper>
        </Box>
    ) // End Componant Return
} // End Feeling()

export default Feeling;
