// Core function imports
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Material imports
import { 
    Typography, 
    Box, 
    Button, 
    Radio, 
    RadioGroup, 
    FormControl, 
    FormControlLabel 
}  from '@material-ui/core';

const Feeling = () => {

    // Hooks 
    const dispatch = useDispatch();
    let history = useHistory();

    // Local state for form processing. Default of 3 (average)
    const [feeling, setFeeling] = useState('3');
    
    const submitFeeling = () => {
        dispatch({
            type: 'ADD_FEELINGS',
            payload: feeling
        })
        history.push('/understanding');
    }; // End submitFeeling()

    return (
        <Box>
            <Typography
                variant="h5"
                align="center"
            >
                How are you feeling today?
            </Typography>
            <FormControl component="fieldset">
                <RadioGroup row aria-label="position" name="position" defaultValue="3" onChange={(event) => setFeeling(event.target.value)}>
                    <FormControlLabel
                        value="1"
                        control={<Radio color="primary" />}
                        label="1"
                        labelPlacement="bottom"
                    />
                    <FormControlLabel
                        value="2"
                        control={<Radio color="primary" />}
                        label="2"
                        labelPlacement="bottom"
                    />
                    <FormControlLabel
                        value="3"
                        control={<Radio color="primary" />}
                        label="3"
                        labelPlacement="bottom"
                    />
                    <FormControlLabel
                        value="4"
                        control={<Radio color="primary" />}
                        label="4"
                        labelPlacement="bottom"
                    />
                    <FormControlLabel
                        value="5"
                        control={<Radio color="primary" />}
                        label="5"
                        labelPlacement="bottom"
                    />
                </RadioGroup>
            </FormControl>
            <Button
                onClick={()=> submitFeeling()}
                variant={'contained'}
                color={'primary'}
            >
                Submit
            </Button>
        </Box>
    ) // End Componant Return
} // End Feeling()

export default Feeling;
