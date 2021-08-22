// Core operation imports
import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Styling and Structure
import { 
    Button,
    ButtonGroup, 
    Box,
    TableContainer,
    Table,
    TableBody,
    TableRow,
    TableCell,
    Paper 
} from '@material-ui/core';

import { ArrowBack, Save, Edit} from '@material-ui/icons';

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

    const forwardStep = () => {
        submitSurvey();
    }; // End forwardStep()

    const backStep = () => {
        history.push('/comments');
    }; // End backStep()

    const changeEntry = (path) => {
        history.push(path);
    } // End changeEntry

    return (
        <Box>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableBody>
                        <TableRow>
                            <TableCell>Feeling</TableCell>
                            <TableCell>{survey.feeling}</TableCell>
                            <TableCell>
                                <Button
                                    variant={'contained'}
                                    color={'primary'}
                                    startIcon={<Edit />}
                                    onClick={()=> changeEntry('/feeling')}
                                >
                                    Edit
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Comprehension</TableCell>
                            <TableCell>{survey.understanding}</TableCell>
                            <TableCell>
                                <Button
                                    variant={'contained'}
                                    color={'primary'}
                                    startIcon={<Edit />}
                                    onClick={()=> changeEntry('/understanding')}
                                >
                                    Edit
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Support</TableCell>
                            <TableCell>{survey.support}</TableCell>
                            <TableCell>
                                <Button
                                    variant={'contained'}
                                    color={'primary'}
                                    startIcon={<Edit />}
                                    onClick={()=> changeEntry('/supported')}
                                >
                                    Edit
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Comments</TableCell>
                            <TableCell>{survey.comments}</TableCell>
                            <TableCell>
                                <Button
                                    variant={'contained'}
                                    color={'primary'}
                                    startIcon={<Edit />}
                                    onClick={()=> changeEntry('/comments')}
                                >
                                    Edit
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
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
                        endIcon={<Save />}
                        color={'secondary'}
                    >
                        Submit
                    </Button>
                </ButtonGroup>
            </Box>
        </Box>
    ) // End component return
} // End Review()

export default Review;
